import { withAuth } from "next-auth/middleware";

// middleware is applied to all routes, use conditionals to select
export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      const pathname = req.nextUrl.pathname;
      const unauthorizedConditions =
        (pathname.startsWith("/admin") && token?.role !== "ADMIN") ||
        (pathname.startsWith("/dashboard") && token?.role !== "USER");

      // Return true if there is no unauthorized conditions met
      return !unauthorizedConditions;
    },
  },
});
