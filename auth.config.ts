import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

const publicRoutes = ["/", "/dashboard"];
const authRoutes = ["/auth/login"];

export default {
  providers: [Google],
  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;

      if (publicRoutes.includes(pathname)) {
        return true;
      }

      if (authRoutes.includes(pathname)) {
        if (isLoggedIn) {
          // Use nextUrl.origin to ensure a full, valid URL
          return Response.redirect(new URL("/dashboard", nextUrl.origin));
        }
        return true;
      }

      return isLoggedIn;
    },
  },
  pages: {
    signIn: "/",
  },
} satisfies NextAuthConfig;
