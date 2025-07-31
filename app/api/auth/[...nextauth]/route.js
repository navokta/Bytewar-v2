import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import dbConnect from "@/lib/dbconnect";
import User from "@/lib/models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],

  callbacks: {
   async signIn({ user }) {
  await dbConnect();
  const existingUser = await User.findOne({ email: user.email });

  if (!existingUser) {
    await User.create({
      email: user.email,
      firstName: user.name?.split(" ")[0] || "",
      lastName: user.name?.split(" ")[1] || "",
      image: user.image || "",
      password: "",
      phone: "",
    });
    user.newOAuthUser = true;
  } else {
    // ✅ Only true if either phone or password is missing
    const hasPhone = !!existingUser.phone?.trim();
    const hasPassword = !!existingUser.password?.trim();

    user.newOAuthUser = !(hasPhone && hasPassword); // FALSE if both are filled
  }

  return true;
},

     async session({ session, token }) {
    session.userId = token.sub;
    session.isNewUser = token.newOAuthUser ?? false;
    return session;
  },
  async jwt({ token, user }) {
    if (user) {
      token.newOAuthUser = user.newOAuthUser ?? false;
    }
    return token;
  },

    redirect({ url, baseUrl }) {
      return baseUrl; // Always redirect to home, frontend handles complete-profile
    },
  },

  pages: {
    signIn: "/login",
    error: "/auth/error",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
