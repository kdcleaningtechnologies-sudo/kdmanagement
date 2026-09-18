import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/adminAuth";
import { getPartners, updatePartner, deletePartner } from "@/lib/adminStorage";

export async function GET(req: NextRequest) {
  const user = await verifySession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  const query = searchParams.get("q")?.toLowerCase();

  let partners = await getPartners();

  if (status && status !== "ALL") {
    partners = partners.filter((p) => p.status === status);
  }

  if (query) {
    partners = partners.filter(
      (p) =>
        p.partnerName?.toLowerCase().includes(query) ||
        p.company?.toLowerCase().includes(query) ||
        p.email?.toLowerCase().includes(query) ||
        p.phone?.includes(query) ||
        p.profileType?.toLowerCase().includes(query)
    );
  }

  return NextResponse.json({ success: true, count: partners.length, partners });
}

export async function PUT(req: NextRequest) {
  const user = await verifySession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: "Partner ID is required" }, { status: 400 });
    }

    const updated = await updatePartner(id, updates);
    if (!updated) {
      return NextResponse.json({ error: "Partner not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, partner: updated });
  } catch {
    return NextResponse.json({ error: "Failed to update partner" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const user = await verifySession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Partner ID is required" }, { status: 400 });
  }

  const deleted = await deletePartner(id);
  if (!deleted) {
    return NextResponse.json({ error: "Partner not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Partner deleted successfully" });
}
