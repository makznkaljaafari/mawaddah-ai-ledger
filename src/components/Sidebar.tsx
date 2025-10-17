import { LayoutDashboard, Package, Users, FileText, BarChart3, Settings, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "لوحة التحكم", path: "/" },
  { icon: Package, label: "المخزون", path: "/inventory" },
  { icon: Users, label: "العملاء", path: "/customers" },
  { icon: FileText, label: "الفواتير", path: "/invoices" },
  { icon: BarChart3, label: "التقارير", path: "/reports" },
  { icon: Settings, label: "الإعدادات", path: "/settings" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "fixed right-0 top-0 h-screen glass border-l border-border transition-all duration-300 z-50",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Logo & Toggle */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center glow-primary">
                <span className="text-xl font-bold">م</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                المودة
              </span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="hover:bg-primary/10"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-smooth",
                  "hover:bg-primary/10 hover:glow-primary",
                  isActive && "gradient-primary text-primary-foreground glow-primary"
                )
              }
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
