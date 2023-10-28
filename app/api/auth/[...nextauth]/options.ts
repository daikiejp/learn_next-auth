import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const options = {
  providers: [
    GithubProvider({
      profile(profile: any) {
        // console.log("Profile Github: ", profile);

        let userRole = "Github User";
        if (profile?.email == process.env.ADMIN_EMAIL) {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      profile(profile) {
        // console.log("Profile Profile: ", profile);

        let userRole = "Google User";
        // if (profile?.email == process.env.ADMIN_EMAIL) {
        //   userRole = "admin";
        // }

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
          placeholder: "your@email.com",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        try {
          const foundUser: any = await prisma.user.findUnique({
            where: {
              email: credentials?.email,
            },
          });

          if (foundUser) {
            // console.log("User Exists");
            const match = await bcrypt.compare(
              credentials?.password as string,
              foundUser.password
            );

            if (match) {
              // console.log("Good pass");
              delete foundUser.password;

              foundUser["role"] = "Unverified email";
              return foundUser;
            }
          }
        } catch (error) {
          // console.log(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
