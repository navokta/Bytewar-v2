export async function POST(request) {
  // Since we're using JWT in localStorage, logout is handled client-side
  // This endpoint is just for consistency
  return new Response(
    JSON.stringify({ message: 'Logout successful' }),
    { status: 200 }
  );
}