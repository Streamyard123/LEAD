"use client";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream">
      <main className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8 xl:p-10">
        {children}
      </main>
    </div>
  );
}
