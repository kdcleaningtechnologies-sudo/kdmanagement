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

export async function saveAuthData(data: AdminAuthData): Promise<void> {
  await fs.writeFile(AUTH_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export async function authenticateAdmin(email: string, passwordPlain: string): Promise<string | null> {
  const authData = await getAuthData();
  const inputHash = hashPassword(passwordPlain);

  const user = authData.users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase().trim() && u.passwordHash === inputHash
  );

  if (!user) return null;

  // Generate session token
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(); // 7 days

  // Clean old expired sessions & add new
  const now = new Date();
  authData.sessions = authData.sessions.filter((s) => new Date(s.expiresAt) > now);
  authData.sessions.push({
    token,
    email: user.email,
    expiresAt,
    createdAt: new Date().toISOString(),
  });

  await saveAuthData(authData);
  return token;
}

export async function verifySession(token?: string): Promise<AdminUser | null> {
  if (!token) {
    const cookieStore = cookies();
    token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  }

  if (!token) return null;

  const authData = await getAuthData();
  const session = authData.sessions.find(
    (s) => s.token === token && new Date(s.expiresAt) > new Date()
  );

  if (!session) return null;

  const user = authData.users.find((u) => u.email.toLowerCase() === session.email.toLowerCase());
  if (!user) return null;

  return {
    email: user.email,
    name: user.name,
    role: user.role,
  };
}

export async function removeSession(token?: string): Promise<void> {
  if (!token) {
    const cookieStore = cookies();
    token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  }

  if (!token) return;

  const authData = await getAuthData();
  authData.sessions = authData.sessions.filter((s) => s.token !== token);
  await saveAuthData(authData);
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
