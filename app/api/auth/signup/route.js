import dbConnect from '@/lib/dbconnect';
import User from '@/lib/models/user';
import bcrypt from 'bcryptjs';
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  await dbConnect();

  const { email, password , phone } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ message: 'User already exists' });
  if (!phone) return res.status(400).json({ message: 'Phone number required' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ email, password: hashedPassword , phone });

  res.status(201).json({ message: 'User created', user: newUser._id });
}
