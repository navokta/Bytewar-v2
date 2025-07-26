// app/api/auth/login/route.js
import dbConnect from "@/lib/dbconnect";
import User from "@/lib/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Ensure JWT_SECRET is defined
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("❌ JWT_SECRET is not defined in environment variables.");
}

export async function POST(request) {
  try {
    console.log("Login API: Connecting to DB...");
    await dbConnect();
    console.log("Login API: Connected ✅");

    const body = await request.json();
    const { email, password } = body;
    console.log("Login API: Received credentials for:", email); // Be cautious logging passwords

    // 1. Validate input
    if (!email || !password) {
      console.log("Login API: Missing email or password ❌");
      return new Response(
        JSON.stringify({ message: 'Email and password are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2. Find user by email (ensure email is unique in your schema)
    // Use .select('+password') to explicitly include the hashed password field,
    // assuming it's excluded by default in your User model.
    const user = await User.findOne({ email }).select('+password').lean();
    
    if (!user) {
      console.log("Login API: User not found ❌");
      // Generic error message for security (don't reveal if email exists)
      return new Response(
        JSON.stringify({ message: 'Invalid credentials' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log("Login API: User found, checking password...");
    // 3. Compare provided password with stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log("Login API: Invalid password ❌");
      return new Response(
        JSON.stringify({ message: 'Invalid credentials' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log("Login API: Password valid ✅");

    // 4. Generate JWT token
    // Create a payload with user information (avoid sensitive data)
    const tokenPayload = {
      userId: user._id.toString(), // Mongoose ObjectId to string
      email: user.email,
      // Add other non-sensitive user data if needed (e.g., name)
      // name: user.name
    };

    // Sign the token. ExpiresIn is optional but recommended.
    const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: '7d' }); // Token expires in 7 days

    console.log("Login API: JWT generated ✅");

    // 5. Respond with success and token
    // Decide how to send the token back:
    // Option A: In the response body (frontend stores in localStorage/cookie)
    // Option B: As an HttpOnly cookie (more secure, frontend reads from cookie)
    // We'll use Option A for simplicity, but Option B is generally preferred.

    // Remove sensitive data (password) before sending user details
    const { password: _, ...userWithoutPassword } = user;

    return new Response(
      JSON.stringify({
        message: 'Login successful',
        token: token, // Send token in response body
        user: userWithoutPassword // Optionally send user details
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          // If using HttpOnly cookie (Option B), you would set it like this:
          // 'Set-Cookie': `authToken=${token}; HttpOnly; Path=/; Max-Age=${7 * 24 * 60 * 60}; SameSite=Strict; Secure` // 7 days
        }
      }
    );
  } catch (error) {
    console.error('Login API: Error ❌:', error);
    // Return a generic server error message
    return new Response(
      JSON.stringify({ message: 'Internal Server Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}