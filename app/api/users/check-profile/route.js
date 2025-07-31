import dbConnect from '@/lib/dbconnect';
import User from '@/lib/models/user';

export async function GET(req) {
  const url = new URL(req.url);
  const email = url.searchParams.get('email');

  await dbConnect();

  const user = await User.findOne({ email });

  const incompleteProfile = !user?.phone || !user?.password;

  return Response.json({ incompleteProfile });
}
