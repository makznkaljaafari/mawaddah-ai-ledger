import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, DollarSign, Package, Users } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const monthlyData = [
  { month: "يناير", sales: 45000, purchases: 30000, profit: 15000 },
  { month: "فبراير", sales: 52000, purchases: 35000, profit: 17000 },
  { month: "مارس", sales: 48000, purchases: 32000, profit: 16000 },
  { month: "أبريل", sales: 61000, purchases: 40000, profit: 21000 },
  { month: "مايو", sales: 55000, purchases: 36000, profit: 19000 },
  { month: "يونيو", sales: 67000, purchases: 43000, profit: 24000 },
];

export default function Reports() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            التقارير والإحصائيات
          </h1>
          <p className="text-muted-foreground">تحليل شامل لأداء عملك</p>
        </div>
        <Button className="gradient-primary glow-primary gap-2">
          <Download className="w-5 h-5" />
          تصدير التقارير
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass p-6 glow-primary">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">إجمالي المبيعات</p>
              <p className="text-2xl font-bold">328,000 ر.ي</p>
            </div>
          </div>
        </Card>

        <Card className="glass p-6 glow-secondary">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">إجمالي المشتريات</p>
              <p className="text-2xl font-bold">216,000 ر.ي</p>
            </div>
          </div>
        </Card>

        <Card className="glass p-6 glow-accent">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">صافي الربح</p>
              <p className="text-2xl font-bold text-green-400">112,000 ر.ي</p>
            </div>
          </div>
        </Card>

        <Card className="glass p-6 glow-primary">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">العملاء النشطون</p>
              <p className="text-2xl font-bold">256</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Monthly Performance Chart */}
      <Card className="glass p-6 glow-secondary">
        <h3 className="text-xl font-bold mb-6">الأداء الشهري</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 22%)" />
            <XAxis dataKey="month" stroke="hsl(215, 20%, 65%)" />
            <YAxis stroke="hsl(215, 20%, 65%)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(222, 47%, 16%)",
                border: "1px solid hsl(217, 33%, 22%)",
                borderRadius: "12px",
              }}
            />
            <Bar dataKey="sales" fill="hsl(217, 91%, 60%)" radius={[8, 8, 0, 0]} />
            <Bar dataKey="purchases" fill="hsl(262, 83%, 58%)" radius={[8, 8, 0, 0]} />
            <Bar dataKey="profit" fill="hsl(189, 94%, 43%)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Quick Reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass p-6 glow-accent">
          <h3 className="text-xl font-bold mb-4">المنتجات الأكثر مبيعاً</h3>
          <div className="space-y-3">
            {[
              { name: "محرك تويوتا كامري 2.4", sales: 25 },
              { name: "فرامل هوندا أكورد", sales: 18 },
              { name: "زيت موبيل 1", sales: 15 },
            ].map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-card/50"
              >
                <span className="font-medium">{product.name}</span>
                <span className="text-primary font-bold">{product.sales} وحدة</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="glass p-6 glow-primary">
          <h3 className="text-xl font-bold mb-4">أفضل العملاء</h3>
          <div className="space-y-3">
            {[
              { name: "أحمد محمد الحميري", amount: 125000 },
              { name: "محمد علي القاضي", amount: 85000 },
              { name: "سالم أحمد الشامي", amount: 65000 },
            ].map((customer, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-card/50"
              >
                <span className="font-medium">{customer.name}</span>
                <span className="text-primary font-bold">{customer.amount.toLocaleString()} ر.ي</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
