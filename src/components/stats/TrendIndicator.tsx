import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrendIndicatorProps {
  trend: "up" | "down" | "neutral";
  value: string;
  label?: string;
}

export function TrendIndicator({ trend, value, label }: TrendIndicatorProps) {
  const Icon = trend === "up" ? ArrowUp : trend === "down" ? ArrowDown : Minus;
  
  const colorClass = {
    up: "text-green-400",
    down: "text-red-400",
    neutral: "text-muted-foreground",
  }[trend];

  return (
    <div className="flex items-center gap-2">
      <span className={cn("text-sm font-medium flex items-center gap-1", colorClass)}>
        <Icon className="w-4 h-4" />
        {value}
      </span>
      {label && <span className="text-xs text-muted-foreground">{label}</span>}
    </div>
  );
}
