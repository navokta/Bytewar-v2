// app/api/check-auth/route.js
import jwt from "jsonwebtoken";

export async function GET(request) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return new Response("Not authenticated", { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return new Response(JSON.stringify({ user: decoded }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response("Invalid token", { status: 401 });
  }
}
