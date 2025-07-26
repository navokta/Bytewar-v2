import dbConnect from '@/lib/dbconnect';
import User from '@/lib/models/user';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    await dbConnect();
    return new Response(JSON.stringify({ status: '✅ DB Connected' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ DB Connection Error:', error.message);
    return new Response(JSON.stringify({ status: '❌ Connection Failed', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const { email, password, phone } = await req.json();

    if (!email || !password || !phone) {
      return new Response(JSON.stringify({ status: '❌ Missing fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ status: '❌ User already exists' }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword, phone });

    return new Response(JSON.stringify({ status: '✅ User Created', userId: newUser._id }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ Create User Error:', error.message);
    return new Response(JSON.stringify({ status: '❌ Failed', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
