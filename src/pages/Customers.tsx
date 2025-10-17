import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Phone, Mail, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  totalPurchases: number;
  debt: number;
  type: "VIP" | "عادي" | "جديد";
}

const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "أحمد محمد الحميري",
    phone: "+967 777 123 456",
    email: "ahmed@example.com",
    totalPurchases: 125000,
    debt: 15000,
    type: "VIP",
  },
  {
    id: "2",
    name: "محمد علي القاضي",
    phone: "+967 733 234 567",
    email: "mohammed@example.com",
    totalPurchases: 45000,
    debt: 0,
    type: "عادي",
  },
  {
    id: "3",
    name: "سالم أحمد الشامي",
    phone: "+967 711 345 678",
    email: "salem@example.com",
    totalPurchases: 5000,
    debt: 2500,
    type: "جديد",
  },
];

export default function Customers() {
  const [customers] = useState<Customer[]>(mockCustomers);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTypeColor = (type: Customer["type"]) => {
    switch (type) {
      case "VIP":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "عادي":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "جديد":
        return "bg-green-500/20 text-green-400 border-green-500/30";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            إدارة العملاء
          </h1>
          <p className="text-muted-foreground">تتبع وإدارة معلومات عملائك</p>
        </div>
        <Button className="gradient-secondary glow-secondary gap-2">
          <Plus className="w-5 h-5" />
          إضافة عميل جديد
        </Button>
      </div>

      {/* Search */}
      <Card className="glass p-6 glow-primary">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="ابحث عن عميل..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pr-10 bg-background/50"
          />
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass p-6 glow-primary">
          <p className="text-sm text-muted-foreground mb-2">إجمالي العملاء</p>
          <p className="text-3xl font-bold">{customers.length}</p>
        </Card>
        <Card className="glass p-6 glow-secondary">
          <p className="text-sm text-muted-foreground mb-2">عملاء VIP</p>
          <p className="text-3xl font-bold text-yellow-400">
            {customers.filter((c) => c.type === "VIP").length}
          </p>
        </Card>
        <Card className="glass p-6 glow-accent">
          <p className="text-sm text-muted-foreground mb-2">إجمالي المديونيات</p>
          <p className="text-3xl font-bold text-red-400">
            {customers.reduce((sum, c) => sum + c.debt, 0).toLocaleString()} ر.ي
          </p>
        </Card>
      </div>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCustomers.map((customer, index) => (
          <Card
            key={customer.id}
            className="glass p-6 glow-primary hover:scale-105 transition-smooth"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-xl font-bold">
                  {customer.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{customer.name}</h3>
                  <Badge className={getTypeColor(customer.type)}>{customer.type}</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{customer.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-muted-foreground">{customer.email}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-card/50 p-3 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">إجمالي المشتريات</p>
                <p className="font-bold text-primary">{customer.totalPurchases.toLocaleString()} ر.ي</p>
              </div>
              <div className="bg-card/50 p-3 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">المديونية</p>
                <p className={`font-bold ${customer.debt > 0 ? "text-red-400" : "text-green-400"}`}>
                  {customer.debt.toLocaleString()} ر.ي
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 gap-2">
                <MessageCircle className="w-4 h-4" />
                واتساب
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                عرض التفاصيل
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
