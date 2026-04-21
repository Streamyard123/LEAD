"use client";

import Sidebar from "./Sidebar";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream">
      <Sidebar />
      <main className="ml-[260px] p-6 md:p-8 lg:p-10 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
