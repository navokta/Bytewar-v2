import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import dbConnect from "@/lib/dbconnect";
import User from "@/lib/models/user";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const session = await getServerSession(req, res, authOptions);
    
    if (!session?.user?.email) {
      return res.redirect('/login');
    }

    await dbConnect();
    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return res.redirect('/login');
    }

    // Check if profile is complete (has phone and password)
    if (!user.phone || !user.password) {
      return res.redirect('/complete-profile');
    }

    // If profile is complete, redirect to home
    return res.redirect('/');

  } catch (error) {
    console.error('Profile check error:', error);
    return res.redirect('/login?error=Profile check failed');
  }
}