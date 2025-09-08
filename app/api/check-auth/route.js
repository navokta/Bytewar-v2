// app/api/check-auth/route.js
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Adjust path if needed

export async function GET(request) {
  const session = await getServerSession(authOptions);

  if (session && session.user) {
    return new Response(JSON.stringify({ user: session.user }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Unauthorized", { status: 401 });
}