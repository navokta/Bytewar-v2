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

    // ✅ Validate required fields
    if (!email || !password || !phone || !firstName || !lastName) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    // ✅ Validate password strength (optional but recommended)
    if (password.length < 6) {
      return new Response(
        JSON.stringify({ message: "Password must be at least 6 characters" }),
        { status: 400 }
      );
    }

    // ✅ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "User already exists" }),
        { status: 409 }
      );
    }

    // ✅ Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create new user
    const newUser = await User.create({
      email,
      password: hashedPassword,
      phone,
      firstName,
      lastName,
    });

    // ✅ Generate JWT token
    const token = jwt.sign(
      {
        userId: newUser._id.toString(),
        email: newUser.email,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ Exclude password from response
    const { password: _, ...userWithoutPassword } = newUser.toObject();

    return new Response(
      JSON.stringify({
        message: "User created successfully",
        token,
        user: userWithoutPassword,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
