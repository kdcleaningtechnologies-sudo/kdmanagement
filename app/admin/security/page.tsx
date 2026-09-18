"use client";

import React, { useState } from "react";
import {
  KeyRound,
  CheckCircle2,
  AlertCircle,
  Save,
  ShieldCheck,
  Download,
  RefreshCw,
} from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";

export default function AdminSecurityPage() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (newPassword !== confirmPassword) {
      setMessage({ type: "error", text: "New password and confirmation do not match." });
      return;
    }

    if (newPassword.length < 6) {
      setMessage({ type: "error", text: "New password must be at least 6 characters long." });
      return;
    }

    try {
      setSaving(true);
      const res = await fetch("/api/admin/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: "error", text: data.error || "Failed to update password." });
        return;
      }

      setMessage({ type: "success", text: "Master admin password has been updated successfully!" });
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch {
      setMessage({ type: "error", text: "An unexpected error occurred." });
    } finally {
      setSaving(false);
    }
  };

  const handleDownloadBackup = async () => {
    try {
      const [leadsRes, partnersRes, contentRes] = await Promise.all([
        fetch("/api/admin/leads"),
        fetch("/api/admin/partners"),
        fetch("/api/admin/content"),
      ]);

      const backup = {
        exportedAt: new Date().toISOString(),
        leads: (await leadsRes.json()).leads || [],
        partners: (await partnersRes.json()).partners || [],
        content: await contentRes.json(),
      };

      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `KD_Global_Full_Backup_${new Date().toISOString().split("T")[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (e) {
      console.error("Backup download error:", e);
    }
  };

  return (
    <div className="pb-20">
      <AdminHeader
        title="Security & System Controls"
        subtitle="Manage master access credentials, session security, and full database backups."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 pt-6 space-y-8">
        {/* Section 1: Change Master Password */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <KeyRound className="w-5 h-5 text-brandgreen-600" />
            <h2 className="text-base font-bold font-heading text-navy-950">
              Update Master Admin Password
            </h2>
          </div>

          {message && (
            <div
              className={`p-4 rounded-2xl text-xs font-bold flex items-center gap-2 animate-fade-in ${
                message.type === "success"
                  ? "bg-emerald-50 border border-emerald-300 text-emerald-900"
                  : "bg-rose-50 border border-rose-300 text-rose-900"
              }`}
            >
              {message.type === "success" ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
              )}
              <span>{message.text}</span>
            </div>
          )}

          <form onSubmit={handlePasswordChange} className="space-y-4 text-xs max-w-lg">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                required
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:border-navy-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:border-navy-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat new password"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:border-navy-900 focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-3 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs shadow-md transition-all inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                <span>{saving ? "Updating..." : "Update Password"}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Section 2: Full System JSON Backup */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <ShieldCheck className="w-5 h-5 text-brandgreen-600" />
            <h2 className="text-base font-bold font-heading text-navy-950">
              Database & Content Backup
            </h2>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Download a complete snapshot of all incoming facility leads, partner inquiries, custom content overrides, and system settings as a standalone `.json` archive.
          </p>

          <div className="pt-2">
            <button
              onClick={handleDownloadBackup}
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-brandgreen-600" />
              <span>Download Full JSON Backup Archive</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
