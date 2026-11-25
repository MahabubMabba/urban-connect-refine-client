
import { NextResponse } from "next/server";

export function proxy(request) {
  const sessionCookie =
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("__Secure-better-auth.session_token");

  const isPublicPage =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register";

  if (!sessionCookie && !isPublicPage) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  if (sessionCookie && isPublicPage) {
    return NextResponse.redirect(
      new URL("/", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
