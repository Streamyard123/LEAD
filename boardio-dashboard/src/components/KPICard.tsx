"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

interface KPICardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  delay?: number;
}

export default function KPICard({ label, value, change, trend, delay = 0 }: KPICardProps) {
  return (
    <div
      className="bg-surface border border-border rounded-sm p-5 hover:shadow-lg hover:shadow-black/5 hover:border-accent/30 transition-all duration-300 animate-fade-in-up opacity-0"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <p className="text-[10px] uppercase tracking-widest text-muted mb-3">{label}</p>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-serif tracking-tight text-primary">{value}</span>
        <div
          className={`flex items-center gap-1 text-xs font-medium ${
            trend === "up" ? "text-emerald-600" : "text-rose-500"
          }`}
        >
          {trend === "up" ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {change}
        </div>
      </div>
    </div>
  );
}
