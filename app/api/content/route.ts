import { NextRequest, NextResponse } from "next/server";
import { getContentOverrides } from "@/lib/adminStorage";
import { companyInfo } from "@/content/company";
import { servicesData } from "@/content/services";
import { technologyData } from "@/content/technology";
import { careersData } from "@/content/careers";
import { caseStudiesData } from "@/content/caseStudies";
import { industriesData } from "@/content/industries";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const section = searchParams.get("section");

    const overrides = await getContentOverrides();

    const data = {
      company: overrides.company || companyInfo,
      services: overrides.services || servicesData,
      technology: overrides.technology || technologyData,
      careers: overrides.careers !== undefined ? overrides.careers : careersData,
      caseStudies: overrides.caseStudies || caseStudiesData,
      industries: overrides.industries || industriesData,
    };

    if (section && section in data) {
      return NextResponse.json(
        { success: true, [section]: data[section as keyof typeof data] },
        {
          headers: {
            "Cache-Control": "no-store, max-age=0, must-revalidate",
          },
        }
      );
    }

    return NextResponse.json(
      { success: true, ...data },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Public content API error:", error);
    return NextResponse.json(
      {
        success: false,
        careers: careersData,
        company: companyInfo,
        services: servicesData,
        technology: technologyData,
        caseStudies: caseStudiesData,
        industries: industriesData,
      },
      { status: 500 }
    );
  }
}
