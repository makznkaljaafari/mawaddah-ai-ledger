import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  time: string;
  type?: "success" | "warning" | "info" | "error";
}

export function ActivityCard({
  icon: Icon,
  title,
  description,
  time,
  type = "info",
}: ActivityCardProps) {
  const typeColors = {
    success: "text-green-400",
    warning: "text-yellow-400",
    info: "text-blue-400",
    error: "text-red-400",
  };

  return (
    <div className="glass rounded-xl p-4 hover:glow-primary transition-smooth hover:scale-105">
      <div className="flex items-start gap-4">
        <div className={cn("w-10 h-10 rounded-lg gradient-primary flex items-center justify-center", typeColors[type])}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
      </div>
    </div>
  );
}
