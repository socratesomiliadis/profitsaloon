import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  afterAuth(auth, req, evt) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      const signIn = new URL("/sign-in", req.url);
      return NextResponse.redirect(signIn);
    }

    // redirect them to organization selection page
  },
  publicRoutes: [
    "/",
    "/sign-in",
    "/onboarding",
    "/studio",
    "/videos/watch(.*)",
    "/videos",
    "/videos/trending(.*)",
    "/api(.*)",
  ],
  signInUrl: "/sign-in",
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
