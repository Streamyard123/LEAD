"use client";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  height?: string;
}

export default function ChartCard({
  title,
  subtitle,
  children,
  className = "",
  height = "h-[350px]",
}: ChartCardProps) {
  return (
    <div
      className={`bg-surface border border-border rounded-sm p-5 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:border-accent/30 ${className}`}
    >
      <div className="mb-4">
        <h3 className="text-sm font-medium text-primary tracking-tight">{title}</h3>
        {subtitle && (
          <p className="text-xs text-muted mt-0.5 font-light">{subtitle}</p>
        )}
      </div>
      <div className={height}>{children}</div>
    </div>
  );
}
