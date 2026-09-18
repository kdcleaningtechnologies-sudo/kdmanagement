"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AdminSidebar } from "./AdminSidebar";

export const AdminShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [verifying, setVerifying] = useState(true);

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      setVerifying(false);
      return;
    }

    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin/auth/me");
        if (!res.ok) {
          router.push(`/admin/login?next=${encodeURIComponent(pathname)}`);
        } else {
          setVerifying(false);
        }
      } catch {
        router.push("/admin/login");
      }
    };

    checkAuth();
  }, [pathname, isLoginPage, router]);

  if (isLoginPage) {
    return <div className="min-h-screen bg-navy-950 text-slate-100">{children}</div>;
  }

  if (verifying) {
    return (
      <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center text-white space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brandgreen-400 to-emerald-600 flex items-center justify-center text-navy-950 font-heading font-extrabold text-2xl shadow-xl animate-bounce">
          KD
        </div>
        <p className="text-sm font-semibold text-slate-300">Authenticating Operations Session...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row font-sans text-slate-800">
      <AdminSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
};
