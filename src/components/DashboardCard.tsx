import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: "up" | "down";
  trendValue?: string;
  gradient?: "primary" | "secondary" | "accent";
}

export function DashboardCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendValue,
  gradient = "primary",
}: DashboardCardProps) {
  const gradientClass = {
    primary: "gradient-primary",
    secondary: "gradient-secondary",
    accent: "gradient-accent",
  }[gradient];

  const glowClass = {
    primary: "glow-primary",
    secondary: "glow-secondary",
    accent: "glow-accent",
  }[gradient];

  return (
    <div className={cn("glass rounded-2xl p-6 transition-smooth hover:scale-105", glowClass)}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-muted-foreground text-sm mb-1">{title}</p>
          <h3 className="text-3xl font-bold">{value}</h3>
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", gradientClass)}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      {trend && trendValue && (
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "text-sm font-medium",
              trend === "up" ? "text-green-400" : "text-red-400"
            )}
          >
            {trend === "up" ? "↑" : "↓"} {trendValue}
          </span>
          <span className="text-xs text-muted-foreground">مقارنة بالشهر السابق</span>
        </div>
      )}
    </div>
  );
}
