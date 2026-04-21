"use client";

import { Bell, Search, Calendar } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-serif tracking-tight text-primary">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-muted mt-1 font-light">{subtitle}</p>
        )}
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 text-sm bg-surface border border-border rounded-sm focus:outline-none focus:border-accent transition-colors w-48"
          />
        </div>
        <button className="flex items-center gap-2 px-3 py-2 text-sm bg-surface border border-border rounded-sm hover:border-accent transition-colors">
          <Calendar size={14} className="text-muted" />
          <span className="text-muted text-xs">Last 30 days</span>
        </button>
        <button className="relative p-2 bg-surface border border-border rounded-sm hover:border-accent transition-colors">
          <Bell size={16} className="text-muted" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-accent rounded-full text-[8px] text-primary font-bold flex items-center justify-center">
            3
          </span>
        </button>
        <div className="w-8 h-8 rounded-full bg-accent text-primary font-medium text-sm flex items-center justify-center">
          JD
        </div>
      </div>
    </header>
  );
}
