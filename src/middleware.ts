import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const nonAuthPath = ["/login", "/register", "/email-verify"];
const protectedRoutes = ["/profile"];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  res.headers.set("origin", req.nextUrl.origin);

  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session && nonAuthPath.some((e) => req.nextUrl.pathname.startsWith(e)))
    return NextResponse.redirect(new URL("/", req.url));

  if (!session && nonAuthPath.some((e) => req.nextUrl.pathname.startsWith(e)))
    return res;

  if (
    !session &&
    protectedRoutes.some((e) => req.nextUrl.pathname.startsWith(e))
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
