import { cookies } from "next/headers";
import crypto from "crypto";
import fs from "fs/promises";
import path from "path";

const AUTH_FILE_PATH = path.join(process.cwd(), "data", "admin_auth.json");
const ADMIN_SESSION_COOKIE = "kd_admin_session";

// Default admin credentials (configurable via environment variables)
const DEFAULT_ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@kdglobalfacilities.com";
const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "kdadmin2026";

const DEFAULT_ADMIN = {
  email: DEFAULT_ADMIN_EMAIL,
  passwordHash: crypto.createHash("sha256").update(DEFAULT_ADMIN_PASSWORD).digest("hex"),
  name: "Operations Director",
  role: "SUPER_ADMIN",
  updatedAt: new Date().toISOString(),
};

export interface AdminUser {
  email: string;
  name: string;
  role: string;
}

export interface AdminAuthData {
  users: Array<{
    email: string;
    passwordHash: string;
    name: string;
    role: string;
    updatedAt: string;
  }>;
  sessions: Array<{
    token: string;
    email: string;
    expiresAt: string;
    createdAt: string;
  }>;
}

export async function getAuthData(): Promise<AdminAuthData> {
  try {
    const content = await fs.readFile(AUTH_FILE_PATH, "utf-8");
    return JSON.parse(content);
  } catch {
    const initialData: AdminAuthData = {
      users: [DEFAULT_ADMIN],
      sessions: [],
    };
    try {
      await fs.writeFile(AUTH_FILE_PATH, JSON.stringify(initialData, null, 2), "utf-8");
    } catch (e) {
      console.error("Could not write initial admin_auth.json:", e);
    }
    return initialData;
  }
}

const SESSION_SECRET =
  process.env.ADMIN_PASSWORD ||
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "kd-facilities-super-admin-auth-secret-key-2026";

function createSignedToken(payload: { email: string; name: string; role: string; exp: number }): string {
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto.createHmac("sha256", SESSION_SECRET).update(data).digest("base64url");
  return `${data}.${signature}`;
}

function verifySignedToken(token: string): AdminUser | null {
  try {
    const [data, signature] = token.split(".");
    if (!data || !signature) return null;
    const expectedSig = crypto.createHmac("sha256", SESSION_SECRET).update(data).digest("base64url");
    if (signature !== expectedSig) return null;
    const payload = JSON.parse(Buffer.from(data, "base64url").toString("utf-8"));
    if (payload.exp && Date.now() > payload.exp) return null;
    return {
      email: payload.email,
      name: payload.name || "Operations Director",
      role: payload.role || "SUPER_ADMIN",
    };
  } catch {
    return null;
  }
}

export async function saveAuthData(data: AdminAuthData): Promise<void> {
  try {
    await fs.writeFile(AUTH_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    // Vercel serverless has a read-only filesystem; in-memory / stateless signed tokens handle auth
    console.warn("Could not persist auth file on read-only runtime:", err);
  }
}

export function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export async function authenticateAdmin(email: string, passwordPlain: string): Promise<string | null> {
  const inputHash = hashPassword(passwordPlain);
  const normalizedEmail = email.toLowerCase().trim();

  // 1. Check against environment variables / default admin
  const isEnvAdmin =
    normalizedEmail === DEFAULT_ADMIN_EMAIL.toLowerCase().trim() &&
    (passwordPlain === DEFAULT_ADMIN_PASSWORD || inputHash === DEFAULT_ADMIN.passwordHash);

  let user: { email: string; name: string; role: string } | null = null;

  if (isEnvAdmin) {
    user = {
      email: DEFAULT_ADMIN_EMAIL,
      name: "Operations Director",
      role: "SUPER_ADMIN",
    };
  } else {
    // 2. Check against admin_auth.json file
    const authData = await getAuthData();
    const found = (authData.users || []).find(
      (u) => u.email.toLowerCase() === normalizedEmail && u.passwordHash === inputHash
    );
    if (found) {
      user = {
        email: found.email,
        name: found.name,
        role: found.role,
      };
    }
  }

  if (!user) return null;

  // Create signed stateless token (valid 7 days)
  const exp = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const token = createSignedToken({
    email: user.email,
    name: user.name,
    role: user.role,
    exp,
  });

  // Also safely record in session storage if writable
  try {
    const authData = await getAuthData();
    const now = new Date();
    authData.sessions = (authData.sessions || []).filter((s) => new Date(s.expiresAt) > now);
    authData.sessions.push({
      token,
      email: user.email,
      expiresAt: new Date(exp).toISOString(),
      createdAt: now.toISOString(),
    });
    await saveAuthData(authData);
  } catch {
    // Ignored in read-only serverless environments
  }

  return token;
}

export async function verifySession(token?: string): Promise<AdminUser | null> {
  if (!token) {
    const cookieStore = cookies();
    token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  }

  if (!token) return null;

  // 1. Fast verify signed token (works on Vercel Serverless without DB)
  const signedUser = verifySignedToken(token);
  if (signedUser) return signedUser;

  // 2. Fallback to checking admin_auth.json sessions
  try {
    const authData = await getAuthData();
    const session = (authData.sessions || []).find(
      (s) => s.token === token && new Date(s.expiresAt) > new Date()
    );
    if (!session) return null;
    const user = (authData.users || []).find((u) => u.email.toLowerCase() === session.email.toLowerCase());
    if (!user) return null;
    return {
      email: user.email,
      name: user.name,
      role: user.role,
    };
  } catch {
    return null;
  }
}

export async function removeSession(token?: string): Promise<void> {
  if (!token) {
    const cookieStore = cookies();
    token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  }

  if (!token) return;

  try {
    const authData = await getAuthData();
    authData.sessions = (authData.sessions || []).filter((s) => s.token !== token);
    await saveAuthData(authData);
  } catch {
    // Ignored in read-only serverless environments
  }
}

export async function updateAdminPassword(email: string, oldPassword: string, newPassword: string): Promise<{ success: boolean; error?: string }> {
  const authData = await getAuthData();
  const oldHash = hashPassword(oldPassword);
  const user = authData.users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.passwordHash === oldHash);

  if (!user) {
    return { success: false, error: "Current password is incorrect." };
  }

  if (newPassword.length < 6) {
    return { success: false, error: "New password must be at least 6 characters long." };
  }

  user.passwordHash = hashPassword(newPassword);
  user.updatedAt = new Date().toISOString();

  await saveAuthData(authData);
  return { success: true };
}

export { ADMIN_SESSION_COOKIE };
