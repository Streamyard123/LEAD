"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { ResponsiveLine } from "@nivo/line";

interface KPICardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  sparkData?: number[];
  detail?: string;
  delay?: number;
}

export default function KPICard({
  label,
  value,
  change,
  trend,
  sparkData,
  detail,
  delay = 0,
}: KPICardProps) {
  const lineData = sparkData
    ? [
        {
          id: "spark",
          data: sparkData.map((y, i) => ({ x: i, y })),
        },
      ]
    : null;

  return (
    <div
      className="bg-surface border border-border rounded-sm p-5 hover:shadow-lg hover:shadow-black/5 hover:border-accent/30 transition-all duration-300 animate-fade-in-up opacity-0 group"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="flex items-start justify-between mb-2">
        <p className="text-[10px] uppercase tracking-widest text-muted">{label}</p>
        <div
          className={`flex items-center gap-1 text-[11px] font-medium px-1.5 py-0.5 rounded-sm ${
            trend === "up"
              ? "text-emerald-700 bg-emerald-50"
              : "text-rose-600 bg-rose-50"
          }`}
        >
          {trend === "up" ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
          {change}
        </div>
      </div>

      <div className="flex items-end justify-between gap-4">
        <div className="flex-1 min-w-0">
          <span className="text-2xl md:text-3xl font-serif tracking-tight text-primary block">
            {value}
          </span>
          {detail && (
            <p className="text-[11px] text-muted mt-1 truncate">{detail}</p>
          )}
        </div>

        {lineData && (
          <div className="w-24 h-10 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
            <ResponsiveLine
              data={lineData}
              margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
              xScale={{ type: "point" }}
              yScale={{ type: "linear", min: "auto", max: "auto" }}
              curve="monotoneX"
              colors={[trend === "up" ? "#059669" : "#e11d48"]}
              lineWidth={2}
              enablePoints={false}
              enableGridX={false}
              enableGridY={false}
              enableArea={true}
              areaBaselineValue={0}
              areaOpacity={0.1}
              isInteractive={false}
              animate={true}
              motionConfig="gentle"
              axisTop={null}
              axisRight={null}
              axisBottom={null}
              axisLeft={null}
            />
          </div>
        )}
      </div>
    </div>
  );
}
