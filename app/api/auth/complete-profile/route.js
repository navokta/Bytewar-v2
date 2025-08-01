// app/api/auth/complete-profile/route.js
import dbConnect from '@/lib/dbconnect';
import User from '@/lib/models/user';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    await dbConnect();
    const { email, phone, password } = await req.json();

    if (!email || !phone || !password) {
      return Response.json({ error: 'Missing fields' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { phone, password: hashedPassword },
      { new: true }
    );

    if (!updatedUser) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }

    return Response.json({ message: 'Profile completed successfully' }, { status: 200 });
  } catch (err) {
    console.error(err);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}