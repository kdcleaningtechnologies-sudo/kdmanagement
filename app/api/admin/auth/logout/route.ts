import { NextResponse } from "next/server";
import { removeSession, ADMIN_SESSION_COOKIE } from "@/lib/adminAuth";

export async function POST() {
  try {
    await removeSession();
    const response = NextResponse.json({ success: true, message: "Logged out successfully" });
    response.cookies.set(ADMIN_SESSION_COOKIE, "", {
      httpOnly: true,
      maxAge: 0,
      path: "/",
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
