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
    await User.create({
      email: user.email,
      firstName: user.name?.split(" ")[0] || "",
      lastName: user.name?.split(" ")[1] || "",
      image: user.image || "",
      password: "",
      phone: "",
      authMethod: account.provider,
    });
    // mark token flag
    user.isNewOAuthUser = true;
  } else if ((!existingUser.phone || !existingUser.password) && account.provider !== "credentials") {
    user.isNewOAuthUser = true;
  }
  return true;
},

async session({ session, token }) {
  session.userId = token.sub;
  session.isNewUser = token.isNewOAuthUser || false;
  return session;
},

  async jwt({ token, user }) {
  if (user) {
    token.isNewOAuthUser = user.isNewOAuthUser ?? false;
  }
  return token;
},

   async redirect({ url, baseUrl, token }) {
  if (token?.isNewOAuthUser) {
    return `${baseUrl}/complete-profile`;
  }
  return baseUrl;
},
  },

  pages: {
    signIn: "/login",
    error: "/auth/error",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
