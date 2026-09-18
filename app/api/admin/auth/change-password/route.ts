import { NextRequest, NextResponse } from "next/server";
import { verifySession, updateAdminPassword } from "@/lib/adminAuth";

export async function POST(req: NextRequest) {
  const user = await verifySession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { oldPassword, newPassword } = await req.json();
    if (!oldPassword || !newPassword) {
      return NextResponse.json({ error: "Please provide both old and new password." }, { status: 400 });
    }

    const result = await updateAdminPassword(user.email, oldPassword, newPassword);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Password updated successfully." });
  } catch {
    return NextResponse.json({ error: "Failed to update password." }, { status: 500 });
  }
}
