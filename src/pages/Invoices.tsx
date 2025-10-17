import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Invoice {
  id: string;
  number: string;
  customer: string;
  date: string;
  amount: number;
  status: "مدفوعة" | "معلقة" | "متأخرة";
}

const mockInvoices: Invoice[] = [
  {
    id: "1",
    number: "INV-001",
    customer: "أحمد محمد الحميري",
    date: "2025-01-15",
    amount: 15000,
    status: "مدفوعة",
  },
  {
    id: "2",
    number: "INV-002",
    customer: "محمد علي القاضي",
    date: "2025-01-14",
    amount: 8500,
    status: "معلقة",
  },
  {
    id: "3",
    number: "INV-003",
    customer: "سالم أحمد الشامي",
    date: "2025-01-10",
    amount: 12000,
    status: "متأخرة",
  },
];

export default function Invoices() {
  const getStatusColor = (status: Invoice["status"]) => {
    switch (status) {
      case "مدفوعة":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "معلقة":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "متأخرة":
        return "bg-red-500/20 text-red-400 border-red-500/30";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            الفواتير
          </h1>
          <p className="text-muted-foreground">إدارة ومتابعة جميع الفواتير</p>
        </div>
        <Button className="gradient-accent glow-accent gap-2">
          <Plus className="w-5 h-5" />
          إنشاء فاتورة جديدة
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass p-6 glow-primary">
          <p className="text-sm text-muted-foreground mb-2">إجمالي الفواتير</p>
          <p className="text-3xl font-bold">{mockInvoices.length}</p>
        </Card>
        <Card className="glass p-6 glow-secondary">
          <p className="text-sm text-muted-foreground mb-2">الفواتير المدفوعة</p>
          <p className="text-3xl font-bold text-green-400">
            {mockInvoices.filter((inv) => inv.status === "مدفوعة").length}
          </p>
        </Card>
        <Card className="glass p-6 glow-accent">
          <p className="text-sm text-muted-foreground mb-2">الفواتير المتأخرة</p>
          <p className="text-3xl font-bold text-red-400">
            {mockInvoices.filter((inv) => inv.status === "متأخرة").length}
          </p>
        </Card>
      </div>

      {/* Invoices List */}
      <Card className="glass glow-primary overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-card/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-right text-sm font-semibold">رقم الفاتورة</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">العميل</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">التاريخ</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">المبلغ</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">الحالة</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {mockInvoices.map((invoice, index) => (
                <tr
                  key={invoice.id}
                  className="border-b border-border hover:bg-card/30 transition-smooth"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="px-6 py-4 font-mono text-primary font-semibold">
                    {invoice.number}
                  </td>
                  <td className="px-6 py-4 font-medium">{invoice.customer}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    {new Date(invoice.date).toLocaleDateString("ar-YE")}
                  </td>
                  <td className="px-6 py-4 font-semibold text-primary">
                    {invoice.amount.toLocaleString()} ر.ي
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={getStatusColor(invoice.status)}>{invoice.status}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                        <FileText className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-secondary/10">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
