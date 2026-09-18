"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminIndexPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/dashboard");
  }, [router]);

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center text-white">
      <div className="w-8 h-8 rounded-full border-2 border-brandgreen-400 border-t-transparent animate-spin" />
    </div>
  );
}
