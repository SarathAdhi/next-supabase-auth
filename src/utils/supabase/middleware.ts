import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const nonAuthPath = ["/login", "/register", "/email-verify"];
const protectedRoutes = ["/profile"];

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && nonAuthPath.some((e) => request.nextUrl.pathname.startsWith(e)))
    return response;

  if (user && nonAuthPath.some((e) => request.nextUrl.pathname.startsWith(e)))
    return NextResponse.redirect(new URL("/", request.url));

  if (
    !user &&
    protectedRoutes.some((e) => request.nextUrl.pathname.startsWith(e))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}
