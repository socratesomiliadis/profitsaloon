import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/onboarding", "/studio"],
  ignoredRoutes: ["/api/clerk-webhook", "/api/stripe-webhook"],
  signInUrl: "/sign-in",
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
