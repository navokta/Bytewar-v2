import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbconnect";
import User from "@/lib/models/user";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await dbConnect();
    const { email, phone, password } = await request.json();

    const user = await User.findOne({ email });
    if (!user || user.authMethod === 'credentials') {
      return NextResponse.json({ message: "Not an OAuth user" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.updateOne({ email }, { phone, password: hashedPassword });

    return NextResponse.json({ message: "Profile completed" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}