import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/adminAuth";
import { getContentOverrides, saveContentOverrides } from "@/lib/adminStorage";
import { companyInfo } from "@/content/company";
import { servicesData } from "@/content/services";
import { technologyData } from "@/content/technology";
import { careersData } from "@/content/careers";
import { caseStudiesData } from "@/content/caseStudies";
import { industriesData } from "@/content/industries";

export async function GET(req: NextRequest) {
  const user = await verifySession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const section = searchParams.get("section");

  const overrides = await getContentOverrides();

  const data = {
    company: overrides.company || companyInfo,
    services: overrides.services || servicesData,
    technology: overrides.technology || technologyData,
    careers: overrides.careers || careersData,
    caseStudies: overrides.caseStudies || caseStudiesData,
    industries: overrides.industries || industriesData,
  };

  if (section && section in data) {
    return NextResponse.json({ success: true, [section]: data[section as keyof typeof data] });
  }

  return NextResponse.json({ success: true, ...data });
}

export async function PUT(req: NextRequest) {
  const user = await verifySession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const updated = await saveContentOverrides(body);
    return NextResponse.json({ success: true, message: "Content updated successfully", data: updated });
  } catch (error) {
    console.error("Content override error:", error);
    return NextResponse.json({ error: "Failed to update content" }, { status: 500 });
  }
}
