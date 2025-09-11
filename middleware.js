// middleware.js
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET;

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;

  // If no token, redirect to login
  if (!token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', request.nextUrl.pathname); // Preserve original URL
    return NextResponse.redirect(loginUrl);
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
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('token'); // Clear invalid token
    return response;
  }
}

// Updated config to include theme/problem routes
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*', // Protect individual problem pages
    // '/themes/:themeId' // Protect theme overview pages
  ],
};

// Bhavy Sharma