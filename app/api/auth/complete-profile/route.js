import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbconnect";
import User from "@/lib/models/user";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await dbConnect();
    const { email, phone, password } = await request.json();

    if (!email || !phone || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await User.findOneAndUpdate(
  { email, $or: [{ phone: "" }, { password: "" }] },
  { phone, password: hashedPassword },
  { new: true }
);

if (!updatedUser) {
  return NextResponse.json({ message: "User already completed profile or not found." }, { status: 400 });
}


    return NextResponse.json({ message: "Profile updated" }, { status: 200 });
  } catch (error) {
    console.error("Complete profile error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
