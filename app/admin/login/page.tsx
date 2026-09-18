"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Lock,
  Mail,
  ArrowRight,
  Eye,
  EyeOff,
  AlertCircle,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextUrl = searchParams.get("next") || "/admin/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Authentication failed. Please check your credentials.");
        setLoading(false);
        return;
      }

      router.push(nextUrl);
      router.refresh();
    } catch {
      setError("An unexpected network error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-navy-900/90 border border-navy-800 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl relative z-10">
      {/* Brand Icon & Heading */}
      <div className="text-center space-y-3 mb-8">
        <div className="flex justify-center mb-2">
          <BrandLogo variant="facilities" size="lg" theme="dark" />
        </div>
        <h1 className="text-xl font-extrabold font-heading text-white tracking-tight">
          Executive Admin Portal
        </h1>
        <p className="text-xs text-slate-400 font-medium">
          Sign in to manage leads, partners, facilities, and content.
        </p>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="mb-6 p-3.5 rounded-2xl bg-rose-950/80 border border-rose-800/80 text-xs text-rose-200 flex items-center gap-2.5 animate-shake">
          <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Admin Email Address
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full bg-navy-950 border border-navy-800 rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brandgreen-400 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Master Password
          </label>
          <div className="relative">
            <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-navy-950 border border-navy-800 rounded-xl py-3 pl-10 pr-11 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brandgreen-400 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-1"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-4 mt-2 rounded-xl bg-gradient-to-r from-brandgreen-500 to-emerald-600 hover:from-brandgreen-600 hover:to-emerald-700 text-navy-950 font-extrabold text-sm transition-all shadow-lg hover:shadow-xl shadow-brandgreen-500/20 disabled:opacity-50 flex items-center justify-center gap-2 group cursor-pointer"
        >
          {loading ? (
            <div className="w-5 h-5 rounded-full border-2 border-navy-950 border-t-transparent animate-spin" />
          ) : (
            <>
              <span>Sign In to Dashboard</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>

      {/* Footer Back Link */}
      <div className="mt-8 pt-6 border-t border-navy-800/80 text-center">
        <Link
          href="/"
          className="text-xs text-slate-400 hover:text-brandgreen-400 transition-colors inline-flex items-center gap-1.5"
        >
          <span>← Return to Public Website</span>
        </Link>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-navy-950 relative flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brandgreen-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <Suspense
        fallback={
          <div className="text-white text-sm">Loading admin authentication...</div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
