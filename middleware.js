// middleware.js
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET;

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Verify token using jose
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET)
    );

    // Optional: You can attach user info to request if needed
    request.user = payload;

    return NextResponse.next(); // allow request to proceed

  } catch (err) {
    // If verification fails, redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// ✅ Apply to protected routes only
export const config = {
  matcher: [
    '/dashboard/:path*',     // example private route
    '/profile/:path*',       // add all routes that need protection
    '/settings/:path*',
  ],
};
