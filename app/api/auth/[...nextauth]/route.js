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
   async signIn({ user, account }) {
    await dbConnect();
    const existingUser = await User.findOne({ email: user.email });

    if (!existingUser) {
      // New OAuth user → mark as incomplete
      await User.create({
        email: user.email,
        firstName: user.name?.split(" ")[0] || "",
        lastName: user.name?.split(" ")[1] || "",
        image: user.image || "",
        password: "", // Force profile completion
        phone: "",    // Force profile completion
        authMethod: account.provider, // "google" or "github"
      });
      return '/complete-profile'; // Redirect OAuth users
    }

    // Existing OAuth user with missing phone/password
    if (account.provider !== 'credentials' && (!existingUser.phone || !existingUser.password)) {
      return '/complete-profile';
    }

    return true; // Allow login
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
