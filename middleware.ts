import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "";

  // Detect admin subdomain: e.g. "admin.kdfmservices.com", "admin.localhost:3000", "admin.domain.com"
  const isAdminSubdomain =
    hostname.startsWith("admin.") ||
    hostname.includes("admin.localhost");

  if (isAdminSubdomain) {
    const pathname = url.pathname;

    // Allow Next.js internals, API routes, and static assets to pass through untouched
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname.includes(".")
    ) {
      return NextResponse.next();
    }

    // If the request already includes /admin in the path, let it pass
    if (pathname.startsWith("/admin")) {
      return NextResponse.next();
    }

    // If root on admin subdomain (e.g. admin.yourdomain.com/), rewrite to /admin
    if (pathname === "/" || pathname === "") {
      return NextResponse.rewrite(new URL("/admin", req.url));
    }

    // Rewrite any subpath (e.g. admin.yourdomain.com/leads -> /admin/leads)
    return NextResponse.rewrite(new URL(`/admin${pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images/
     */
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
};
