import fs from "fs/promises";
import path from "path";
import { companyInfo } from "@/content/company";
import { servicesData } from "@/content/services";
import { technologyData } from "@/content/technology";
import { careersData } from "@/content/careers";
import { caseStudiesData } from "@/content/caseStudies";
import { industriesData } from "@/content/industries";
import { getSupabaseAdminClient } from "./supabase";

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");
const PARTNERS_FILE = path.join(DATA_DIR, "partners.json");
const CANDIDATES_FILE = path.join(DATA_DIR, "candidates.json");
const CONTENT_FILE = path.join(DATA_DIR, "content_overrides.json");

export interface Lead {
  id: string;
  createdAt: string;
  status: "NEW" | "CONTACTED" | "ASSESSMENT_SCHEDULED" | "PROPOSAL_SENT" | "WON" | "LOST" | "ARCHIVED";
  name: string;
  company?: string;
  phone: string;
  email: string;
  propertyType: string;
  city: string;
  approxArea?: string;
  requiredServices: string[];
  staffRequired?: string;
  message?: string;
  sourceUrl?: string;
  internalNotes?: string;
  assignedTo?: string;
  lastContactedAt?: string;
  userAgent?: string;
  ip?: string;
}

export interface Partner {
  id: string;
  createdAt: string;
  type: string;
  partnerName: string;
  company?: string;
  phone: string;
  email: string;
  city?: string;
  profileType: string;
  notes?: string;
  status?: "PENDING" | "MOU_SENT" | "VERIFIED" | "INACTIVE";
  internalNotes?: string;
}

export interface Candidate {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  role: string;
  experience?: string;
  currentLocation?: string;
  notes?: string;
  status?: string;
}

export interface ContentOverrides {
  company?: typeof companyInfo;
  services?: typeof servicesData;
  technology?: typeof technologyData;
  careers?: typeof careersData;
  caseStudies?: typeof caseStudiesData;
  industries?: typeof industriesData;
  updatedAt?: string;
}

// Ensure local data dir exists for fallback
async function ensureDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch {}
}

/* ================= ROW CONVERTERS (PostgreSQL <-> App) ================= */

function leadToDbRow(l: Lead): Record<string, unknown> {
  return {
    id: l.id,
    created_at: l.createdAt,
    status: l.status || "NEW",
    name: l.name,
    company: l.company || null,
    phone: l.phone,
    email: l.email,
    property_type: l.propertyType,
    city: l.city,
    approx_area: l.approxArea || null,
    required_services: l.requiredServices || [],
    staff_required: l.staffRequired || null,
    message: l.message || null,
    source_url: l.sourceUrl || null,
    internal_notes: l.internalNotes || null,
    assigned_to: l.assignedTo || null,
    last_contacted_at: l.lastContactedAt || null,
    user_agent: l.userAgent || null,
    ip: l.ip || null,
  };
}

function dbRowToLead(row: Record<string, unknown>): Lead {
  return {
    id: String(row.id),
    createdAt: String(row.created_at || new Date().toISOString()),
    status: (row.status as Lead["status"]) || "NEW",
    name: String(row.name || ""),
    company: row.company ? String(row.company) : undefined,
    phone: String(row.phone || ""),
    email: String(row.email || ""),
    propertyType: String(row.property_type || "Corporate Office"),
    city: String(row.city || "Gurgaon"),
    approxArea: row.approx_area ? String(row.approx_area) : undefined,
    requiredServices: Array.isArray(row.required_services)
      ? (row.required_services as string[])
      : [],
    staffRequired: row.staff_required ? String(row.staff_required) : undefined,
    message: row.message ? String(row.message) : undefined,
    sourceUrl: row.source_url ? String(row.source_url) : undefined,
    internalNotes: row.internal_notes ? String(row.internal_notes) : undefined,
    assignedTo: row.assigned_to ? String(row.assigned_to) : undefined,
    lastContactedAt: row.last_contacted_at ? String(row.last_contacted_at) : undefined,
    userAgent: row.user_agent ? String(row.user_agent) : undefined,
    ip: row.ip ? String(row.ip) : undefined,
  };
}

function partnerToDbRow(p: Partner): Record<string, unknown> {
  return {
    id: p.id,
    created_at: p.createdAt,
    type: p.type || "CHANNEL_PARTNER",
    partner_name: p.partnerName,
    company: p.company || null,
    phone: p.phone,
    email: p.email,
    city: p.city || null,
    profile_type: p.profileType,
    notes: p.notes || null,
    status: p.status || "PENDING",
    internal_notes: p.internalNotes || null,
  };
}

function dbRowToPartner(row: Record<string, unknown>): Partner {
  return {
    id: String(row.id),
    createdAt: String(row.created_at || new Date().toISOString()),
    type: String(row.type || "CHANNEL_PARTNER"),
    partnerName: String(row.partner_name || ""),
    company: row.company ? String(row.company) : undefined,
    phone: String(row.phone || ""),
    email: String(row.email || ""),
    city: row.city ? String(row.city) : undefined,
    profileType: String(row.profile_type || "Partner"),
    notes: row.notes ? String(row.notes) : undefined,
    status: (row.status as Partner["status"]) || "PENDING",
    internalNotes: row.internal_notes ? String(row.internal_notes) : undefined,
  };
}

function candidateToDbRow(c: Candidate): Record<string, unknown> {
  return {
    id: c.id,
    created_at: c.createdAt,
    name: c.name,
    phone: c.phone,
    email: c.email,
    role: c.role,
    experience: c.experience || null,
    current_location: c.currentLocation || null,
    notes: c.notes || null,
    status: c.status || "APPLIED",
  };
}

function dbRowToCandidate(row: Record<string, unknown>): Candidate {
  return {
    id: String(row.id),
    createdAt: String(row.created_at || new Date().toISOString()),
    name: String(row.name || ""),
    phone: String(row.phone || ""),
    email: String(row.email || ""),
    role: String(row.role || ""),
    experience: row.experience ? String(row.experience) : undefined,
    currentLocation: row.current_location ? String(row.current_location) : undefined,
    notes: row.notes ? String(row.notes) : undefined,
    status: row.status ? String(row.status) : "APPLIED",
  };
}

/* ================= LEADS ================= */

export async function getLeads(): Promise<Lead[]> {
  const supabase = getSupabaseAdminClient();

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        return data.map((d: Record<string, unknown>) => dbRowToLead(d));
      }
      if (error) {
        console.warn("[Supabase getLeads error, falling back to local]", error.message);
      }
    } catch (err) {
      console.warn("[Supabase getLeads exception, falling back to local]", err);
    }
  }

  // Local fallback
  await ensureDir();
  try {
    const data = await fs.readFile(LEADS_FILE, "utf-8");
    return JSON.parse(data || "[]");
  } catch {
    return [];
  }
}

export async function insertLead(lead: Lead): Promise<void> {
  const supabase = getSupabaseAdminClient();

  if (supabase) {
    try {
      const row = leadToDbRow(lead);
      const { error } = await supabase.from("leads").insert([row]);
      if (error) {
        console.error("[Supabase insertLead error]:", error.message);
      }
    } catch (err) {
      console.error("[Supabase insertLead exception]:", err);
    }
  }

  // Always keep local mirror updated
  try {
    await ensureDir();
    const leads = await getLeadsLocal();
    leads.unshift(lead);
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
  } catch (fsErr) {
    console.error("[Local leads fallback write error]:", fsErr);
  }
}

export async function saveLeads(leads: Lead[]): Promise<void> {
  await ensureDir();
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

export async function updateLead(id: string, updates: Partial<Lead>): Promise<Lead | null> {
  const supabase = getSupabaseAdminClient();

  if (supabase) {
    try {
      const dbUpdates: Record<string, unknown> = {};
      if (updates.status !== undefined) dbUpdates.status = updates.status;
      if (updates.internalNotes !== undefined) dbUpdates.internal_notes = updates.internalNotes;
      if (updates.assignedTo !== undefined) dbUpdates.assigned_to = updates.assignedTo;
      if (updates.lastContactedAt !== undefined) dbUpdates.last_contacted_at = updates.lastContactedAt;

      const { data, error } = await supabase
        .from("leads")
        .update(dbUpdates)
        .eq("id", id)
        .select()
        .single();

      if (!error && data) {
        // Also update local copy
        await updateLeadLocal(id, updates);
        return dbRowToLead(data as Record<string, unknown>);
      }
    } catch (err) {
      console.warn("[Supabase updateLead exception, falling back to local]", err);
    }
  }

  return updateLeadLocal(id, updates);
}

export async function deleteLead(id: string): Promise<boolean> {
  const supabase = getSupabaseAdminClient();

  if (supabase) {
    try {
      const { error } = await supabase.from("leads").delete().eq("id", id);
      if (!error) {
        await deleteLeadLocal(id);
        return true;
      }
    } catch (err) {
      console.warn("[Supabase deleteLead exception, falling back to local]", err);
    }
  }

  return deleteLeadLocal(id);
}

async function getLeadsLocal(): Promise<Lead[]> {
  try {
    const data = await fs.readFile(LEADS_FILE, "utf-8");
    return JSON.parse(data || "[]");
  } catch {
    return [];
  }
}

async function updateLeadLocal(id: string, updates: Partial<Lead>): Promise<Lead | null> {
  const leads = await getLeadsLocal();
  const index = leads.findIndex((l) => l.id === id);
  if (index === -1) return null;

  leads[index] = { ...leads[index], ...updates };
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
  return leads[index];
}

async function deleteLeadLocal(id: string): Promise<boolean> {
  const leads = await getLeadsLocal();
  const filtered = leads.filter((l) => l.id !== id);
  if (filtered.length === leads.length) return false;
  await fs.writeFile(LEADS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}

/* ================= PARTNERS ================= */

export async function getPartners(): Promise<Partner[]> {
  const supabase = getSupabaseAdminClient();

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("partners")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        return data.map((d: Record<string, unknown>) => dbRowToPartner(d));
      }
    } catch (err) {
      console.warn("[Supabase getPartners error, falling back]", err);
    }
  }

  await ensureDir();
  try {
    const data = await fs.readFile(PARTNERS_FILE, "utf-8");
    return JSON.parse(data || "[]");
  } catch {
    return [];
  }
}

export async function insertPartner(partner: Partner): Promise<void> {
  const supabase = getSupabaseAdminClient();

  if (supabase) {
    try {
      const row = partnerToDbRow(partner);
      const { error } = await supabase.from("partners").insert([row]);
      if (error) {
        console.error("[Supabase insertPartner error]:", error.message);
      }
    } catch (err) {
      console.error("[Supabase insertPartner exception]:", err);
    }
  }

  // Local fallback mirror
  try {
    await ensureDir();
    const partners = await getPartnersLocal();
    partners.unshift(partner);
    await fs.writeFile(PARTNERS_FILE, JSON.stringify(partners, null, 2), "utf-8");
  } catch (fsErr) {
    console.error("[Local partners write error]:", fsErr);
  }
}

export async function savePartners(partners: Partner[]): Promise<void> {
  await ensureDir();
  await fs.writeFile(PARTNERS_FILE, JSON.stringify(partners, null, 2), "utf-8");
}

export async function updatePartner(id: string, updates: Partial<Partner>): Promise<Partner | null> {
  const supabase = getSupabaseAdminClient();

  if (supabase) {
    try {
      const dbUpdates: Record<string, unknown> = {};
      if (updates.status !== undefined) dbUpdates.status = updates.status;
      if (updates.internalNotes !== undefined) dbUpdates.internal_notes = updates.internalNotes;

      const { data, error } = await supabase
        .from("partners")
        .update(dbUpdates)
        .eq("id", id)
        .select()
        .single();

      if (!error && data) {
        await updatePartnerLocal(id, updates);
        return dbRowToPartner(data as Record<string, unknown>);
      }
    } catch (err) {
      console.warn("[Supabase updatePartner error]", err);
    }
  }

  return updatePartnerLocal(id, updates);
}

export async function deletePartner(id: string): Promise<boolean> {
  const supabase = getSupabaseAdminClient();

  if (supabase) {
    try {
      const { error } = await supabase.from("partners").delete().eq("id", id);
      if (!error) {
        await deletePartnerLocal(id);
        return true;
      }
    } catch (err) {
      console.warn("[Supabase deletePartner error]", err);
    }
  }

  return deletePartnerLocal(id);
}

async function getPartnersLocal(): Promise<Partner[]> {
  try {
    const data = await fs.readFile(PARTNERS_FILE, "utf-8");
    return JSON.parse(data || "[]");
  } catch {
    return [];
  }
}

async function updatePartnerLocal(id: string, updates: Partial<Partner>): Promise<Partner | null> {
  const partners = await getPartnersLocal();
  const index = partners.findIndex((p) => p.id === id);
  if (index === -1) return null;

  partners[index] = { ...partners[index], ...updates };
  await fs.writeFile(PARTNERS_FILE, JSON.stringify(partners, null, 2), "utf-8");
  return partners[index];
}

async function deletePartnerLocal(id: string): Promise<boolean> {
  const partners = await getPartnersLocal();
  const filtered = partners.filter((p) => p.id !== id);
  if (filtered.length === partners.length) return false;
  await fs.writeFile(PARTNERS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}

/* ================= CANDIDATES (CAREERS) ================= */

export async function getCandidates(): Promise<Candidate[]> {
  const supabase = getSupabaseAdminClient();

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("candidates")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        return data.map((d: Record<string, unknown>) => dbRowToCandidate(d));
      }
    } catch (err) {
      console.warn("[Supabase getCandidates error]", err);
    }
  }

  await ensureDir();
  try {
    const data = await fs.readFile(CANDIDATES_FILE, "utf-8");
    return JSON.parse(data || "[]");
  } catch {
    return [];
  }
}

export async function insertCandidate(candidate: Candidate): Promise<void> {
  const supabase = getSupabaseAdminClient();

  if (supabase) {
    try {
      const row = candidateToDbRow(candidate);
      const { error } = await supabase.from("candidates").insert([row]);
      if (error) {
        console.error("[Supabase insertCandidate error]:", error.message);
      }
    } catch (err) {
      console.error("[Supabase insertCandidate exception]:", err);
    }
  }

  try {
    await ensureDir();
    let candidates: Candidate[] = [];
    try {
      const data = await fs.readFile(CANDIDATES_FILE, "utf-8");
      candidates = JSON.parse(data || "[]");
    } catch {
      candidates = [];
    }
    candidates.unshift(candidate);
    await fs.writeFile(CANDIDATES_FILE, JSON.stringify(candidates, null, 2), "utf-8");
  } catch (fsErr) {
    console.error("[Local candidates write error]:", fsErr);
  }
}

/* ================= DYNAMIC CONTENT ================= */

export async function getContentOverrides(): Promise<ContentOverrides> {
  const supabase = getSupabaseAdminClient();

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("content_overrides")
        .select("content, updated_at")
        .eq("key", "main")
        .maybeSingle();

      if (!error && data?.content) {
        return data.content as ContentOverrides;
      }
    } catch (err) {
      console.warn("[Supabase getContentOverrides error]", err);
    }
  }

  await ensureDir();
  try {
    const data = await fs.readFile(CONTENT_FILE, "utf-8");
    return JSON.parse(data || "{}");
  } catch {
    return {};
  }
}

export async function saveContentOverrides(updates: Partial<ContentOverrides>): Promise<ContentOverrides> {
  const current = await getContentOverrides();
  const merged: ContentOverrides = {
    ...current,
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  const supabase = getSupabaseAdminClient();
  if (supabase) {
    try {
      await supabase.from("content_overrides").upsert({
        key: "main",
        content: merged,
        updated_at: merged.updatedAt,
      });
    } catch (err) {
      console.warn("[Supabase saveContentOverrides error]", err);
    }
  }

  await ensureDir();
  await fs.writeFile(CONTENT_FILE, JSON.stringify(merged, null, 2), "utf-8");
  return merged;
}
