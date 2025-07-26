import dbConnect from '@/lib/dbconnect';
import User from '@/lib/models/user';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await dbConnect();
  
  const { email, password, phone } = await req.json();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ message: 'User already exists' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!phone) {
    return new Response(JSON.stringify({ message: 'Phone number required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ email, password: hashedPassword, phone });

  return new Response(JSON.stringify({ message: 'User created', user: newUser._id }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
