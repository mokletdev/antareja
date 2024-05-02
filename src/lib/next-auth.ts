import { validateHash } from "@/lib/hash";
import { findUser } from "@/queries/user.query";
import { Role } from "@prisma/client";
import {
  getServerSession as nextAuthGetServerSession,
  type DefaultSession,
  type AuthOptions,
} from "next-auth";
import type { DefaultJWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user?: {
      id: string;
      role: Role;
      nama: string;
      email: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  // eslint-disable-next-line no-unused-vars
  interface JWT extends DefaultJWT {
    id: string;
    role: Role;
    nama: string;
    email: string;
  }
}

export const authOptions: AuthOptions = {
  theme: {
    colorScheme: "light",
    brandColor: "#E04E4E",
    logo: "/",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "user@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        try {
          let findUser = await prisma.user.findUnique({
            where: { email: credentials?.email },
          });
          if (!findUser) return null;

          const comparePassword = validateHash(
            credentials?.password!,
            findUser.password
          );

          if (!comparePassword) return null;

          const user = {
            id: findUser.id,
            role: findUser.role,
            nama: findUser.nama,
            email: findUser.email,
          };

          return user;
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      const redirectUrl = url.startsWith("/")
        ? new URL(url, baseUrl).toString()
        : url;
      return redirectUrl;
    },
    async signIn({ user, profile, account }) {
      const userInDb = await findUser({ email: user.email! });
      if (!userInDb) return false;

      return true;
    },
    async jwt({ token, user }) {
      if (user?.email) {
        let userInDb = await findUser({ email: user?.email });
        token.id = userInDb?.id ?? "";
        token.role = userInDb?.role ?? "USER";
        token.nama = userInDb?.nama ?? token.nama;
        token.email = userInDb?.email ?? token.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.email && session.user) {
        session.user.role = token?.role || "USER";
        session.user.id = token?.id;
        session.user.nama = token?.nama;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const getServerSession = () => nextAuthGetServerSession(authOptions);
