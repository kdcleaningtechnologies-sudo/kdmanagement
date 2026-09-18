import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/adminAuth";
import { getLeads, saveLeads, updateLead, deleteLead, Lead } from "@/lib/adminStorage";

export async function GET(req: NextRequest) {
  const user = await verifySession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  const city = searchParams.get("city");
  const query = searchParams.get("q")?.toLowerCase();

  let leads = await getLeads();

  if (status && status !== "ALL") {
    leads = leads.filter((l) => l.status === status);
  }

  if (city && city !== "ALL") {
    leads = leads.filter((l) => l.city?.toLowerCase() === city.toLowerCase());
  }

  if (query) {
    leads = leads.filter(
      (l) =>
        l.name?.toLowerCase().includes(query) ||
        l.company?.toLowerCase().includes(query) ||
        l.email?.toLowerCase().includes(query) ||
        l.phone?.includes(query) ||
        l.propertyType?.toLowerCase().includes(query) ||
        l.message?.toLowerCase().includes(query)
    );
  }

  return NextResponse.json({ success: true, count: leads.length, leads });
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
      return NextResponse.json({ error: "Lead ID is required" }, { status: 400 });
    }

    const updated = await updateLead(id, updates);
    if (!updated) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, lead: updated });
  } catch {
    return NextResponse.json({ error: "Failed to update lead" }, { status: 500 });
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
    return NextResponse.json({ error: "Lead ID is required" }, { status: 400 });
  }

  const deleted = await deleteLead(id);
  if (!deleted) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Lead deleted successfully" });
}

export async function POST(req: NextRequest) {
  const user = await verifySession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    if (!body.name || !body.phone) {
      return NextResponse.json({ error: "Name and Phone are required" }, { status: 400 });
    }

    const newLead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      status: body.status || "NEW",
      name: body.name,
      company: body.company || "",
      phone: body.phone,
      email: body.email || "",
      propertyType: body.propertyType || "Commercial Office",
      city: body.city || "Gurgaon",
      approxArea: body.approxArea || "",
      requiredServices: body.requiredServices || ["Integrated Facility Management"],
      staffRequired: body.staffRequired || "",
      message: body.message || "",
      internalNotes: body.internalNotes || "Manually added by Admin",
      assignedTo: body.assignedTo || user.name,
    };

    const leads = await getLeads();
    leads.unshift(newLead);
    await saveLeads(leads);

    return NextResponse.json({ success: true, lead: newLead });
  } catch {
    return NextResponse.json({ error: "Failed to create lead" }, { status: 500 });
  }
}
