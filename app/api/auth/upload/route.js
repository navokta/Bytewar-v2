import { writeFile } from 'fs/promises';
import path from 'path';
import dbConnect from "@/lib/dbconnect";
import User from "@/lib/models/user";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(request) {
  try {
    await dbConnect();

    // Verify token
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ message: 'Unauthorized' }),
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    // Get file from form data
    const formData = await request.formData();
    const file = formData.get('profilePicture');

    if (!file) {
      return new Response(
        JSON.stringify({ message: 'No file uploaded' }),
        { status: 400 }
      );
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      return new Response(
        JSON.stringify({ message: 'Only JPEG, PNG, and WebP images are allowed' }),
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return new Response(
        JSON.stringify({ message: 'File size must be less than 5MB' }),
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const timestamp = Date.now();
    const ext = path.extname(file.name);
    const filename = `profile_${decoded.userId}_${timestamp}${ext}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'profiles');
    const filePath = path.join(uploadDir, filename);

    // Ensure upload directory exists
    await writeFile(filePath, buffer);

    // Update user profile picture in database
    const profilePictureUrl = `/uploads/profiles/${filename}`;
    const updatedUser = await User.findByIdAndUpdate(
      decoded.userId,
      { profilePicture: profilePictureUrl },
      { new: true }
    ).select('-password');

    return new Response(
      JSON.stringify({ 
        message: 'Profile picture updated successfully',
        user: updatedUser
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Upload error:', error);
    if (error.name === 'JsonWebTokenError') {
      return new Response(
        JSON.stringify({ message: 'Invalid token' }),
        { status: 401 }
      );
    }
    return new Response(
      JSON.stringify({ message: 'Internal Server Error' }),
      { status: 500 }
    );
  }
}