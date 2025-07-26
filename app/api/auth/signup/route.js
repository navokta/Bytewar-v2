import dbConnect from "@/lib/dbconnect";
import User from "@/lib/models/user";
import bcrypt from "bcryptjs";


export async function POST(request) {
  try {
    console.log("Connecting to DB...");
    await dbConnect();
    console.log("Connected ✅");
    //finnaly fix

    const body = await request.json();
    const { email, password, phone } = body;
    console.log("Received body:", body);

    if (!email || !password || !phone) {
      console.log("Missing fields ❌");
      return new Response(JSON.stringify({ message: 'All fields are required' }), { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists ❌");
      return new Response(JSON.stringify({ message: 'User already exists' }), { status: 400 });
    }

    console.log("Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Creating user...");
    const newUser = await User.create({
      email,
      password: hashedPassword,
      phone,
    });

    console.log("User created ✅", newUser);

    return new Response(JSON.stringify({ message: 'User created', user: newUser._id }), {
      status: 201,
    });
  } catch (error) {
    console.error('Signup error ❌:', error); // ← this will show full stack trace
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
