// app/api/save-extra-details/route.js

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import dbConnect from "@/lib/dbconnect";
import User from "@/lib/models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const { phone, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  await dbConnect();
  await User.updateOne(
    { email: session.user.email },
    { phone, password: hashedPassword }
  );

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
