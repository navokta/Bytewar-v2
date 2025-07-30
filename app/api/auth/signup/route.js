import dbConnect from "@/lib/dbconnect";
import User from "@/lib/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { email, password, phone, firstName, lastName } = body;

    if (!email || !password || !phone || !firstName || !lastName) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }), 
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: 'User already exists' }), 
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      phone,
      firstName,
      lastName,
    });

    const token = jwt.sign(
      { userId: newUser._id.toString(), email: newUser.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const { password: _, ...userWithoutPassword } = newUser.toObject();

    return new Response(
      JSON.stringify({ 
        message: 'User created', 
        token,
        user: userWithoutPassword
      }), 
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return new Response(
      JSON.stringify({ message: 'Internal Server Error' }), 
      { status: 500 }
    );
  }
}
