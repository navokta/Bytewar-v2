import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  const cookieStore = cookies();
  
  // Clear all relevant cookies
  cookieStore.delete('token');
  cookieStore.delete('session');
  
  // You might have other cookies to clear depending on your auth setup
  // cookieStore.delete('other-auth-cookie');

  return NextResponse.json(
    { message: 'Logged out successfully' },
    {
      status: 200,
      headers: {
        // Clear cookies on client side too
        'Set-Cookie': [
          'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
          'session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
        ]
      }
    }
  );
}