import { NextRequest, NextResponse } from "next/server";

const PUBLIC = ["/", "/login", "/signup", "/verify"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = req.cookies.get("onyx_session")?.value;

  if (PUBLIC.includes(pathname)) return NextResponse.next();
  if (pathname.startsWith("/api/")) return NextResponse.next();

  if (!session) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
