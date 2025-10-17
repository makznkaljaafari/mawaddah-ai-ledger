import { DashboardCard } from "@/components/DashboardCard";
import { DollarSign, Package, Users, TrendingUp, AlertCircle, ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const salesData = [
  { name: "يناير", sales: 4000, profit: 2400 },
  { name: "فبراير", sales: 3000, profit: 1398 },
  { name: "مارس", sales: 2000, profit: 9800 },
  { name: "أبريل", sales: 2780, profit: 3908 },
  { name: "مايو", sales: 1890, profit: 4800 },
  { name: "يونيو", sales: 2390, profit: 3800 },
];

const categoryData = [
  { name: "محركات", value: 400, color: "hsl(217, 91%, 60%)" },
  { name: "قطع كهربائية", value: 300, color: "hsl(262, 83%, 58%)" },
  { name: "زيوت", value: 200, color: "hsl(189, 94%, 43%)" },
  { name: "إطارات", value: 100, color: "hsl(217, 91%, 70%)" },
];

const recentActivity = [
  { id: 1, action: "فاتورة جديدة", customer: "أحمد محمد", amount: "2,500 ر.ي", time: "منذ 5 دقائق" },
  { id: 2, action: "تحديث المخزون", customer: "قطعة غيار #1234", amount: "+50 قطعة", time: "منذ 15 دقيقة" },
  { id: 3, action: "عميل جديد", customer: "محمد علي", amount: "-", time: "منذ ساعة" },
  { id: 4, action: "فاتورة مدفوعة", customer: "سالم أحمد", amount: "1,800 ر.ي", time: "منذ ساعتين" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            مرحباً بك في المودة
          </h1>
          <p className="text-muted-foreground">نظرة شاملة على عملياتك اليومية</p>
        </div>
        <div className="text-left">
          <p className="text-sm text-muted-foreground">التاريخ</p>
          <p className="text-lg font-semibold">
            {new Date().toLocaleDateString("ar-YE", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="إجمالي المبيعات"
          value="45,000 ر.ي"
          subtitle="هذا الشهر"
          icon={DollarSign}
          trend="up"
          trendValue="12.5%"
          gradient="primary"
        />
        <DashboardCard
          title="المخزون الحالي"
          value="1,234"
          subtitle="قطعة غيار"
          icon={Package}
          trend="down"
          trendValue="3.2%"
          gradient="secondary"
        />
        <DashboardCard
          title="العملاء النشطون"
          value="256"
          subtitle="عميل"
          icon={Users}
          trend="up"
          trendValue="8.1%"
          gradient="accent"
        />
        <DashboardCard
          title="الفواتير المعلقة"
          value="18"
          subtitle="فاتورة"
          icon={AlertCircle}
          gradient="primary"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <Card className="glass p-6 glow-primary">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">المبيعات والأرباح</h3>
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 22%)" />
              <XAxis dataKey="name" stroke="hsl(215, 20%, 65%)" />
              <YAxis stroke="hsl(215, 20%, 65%)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(222, 47%, 16%)",
                  border: "1px solid hsl(217, 33%, 22%)",
                  borderRadius: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="hsl(217, 91%, 60%)"
                strokeWidth={3}
                dot={{ fill: "hsl(217, 91%, 60%)", r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="hsl(262, 83%, 58%)"
                strokeWidth={3}
                dot={{ fill: "hsl(262, 83%, 58%)", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Category Distribution */}
        <Card className="glass p-6 glow-secondary">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">توزيع المنتجات</h3>
            <ShoppingCart className="w-5 h-5 text-secondary" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(222, 47%, 16%)",
                  border: "1px solid hsl(217, 33%, 22%)",
                  borderRadius: "12px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="glass p-6 glow-accent">
        <h3 className="text-xl font-bold mb-4">النشاط الأخير</h3>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 rounded-xl bg-card/50 hover:bg-card/70 transition-smooth"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                  <span className="text-sm font-bold">{activity.id}</span>
                </div>
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.customer}</p>
                </div>
              </div>
              <div className="text-left">
                <p className="font-semibold text-primary">{activity.amount}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
