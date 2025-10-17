import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Plus, Search, Package, Edit, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  quantity: number;
  buyPrice: number;
  sellPrice: number;
  status: "في المخزون" | "نفذ" | "قريب من النفاد";
}

const mockProducts: Product[] = [
  {
    id: "1",
    code: "ENG-001",
    name: "محرك تويوتا كامري 2.4",
    category: "محركات",
    quantity: 5,
    buyPrice: 50000,
    sellPrice: 65000,
    status: "في المخزون",
  },
  {
    id: "2",
    code: "BRK-002",
    name: "فرامل هوندا أكورد",
    category: "فرامل",
    quantity: 15,
    buyPrice: 5000,
    sellPrice: 7500,
    status: "في المخزون",
  },
  {
    id: "3",
    code: "OIL-003",
    name: "زيت موبيل 1",
    category: "زيوت",
    quantity: 2,
    buyPrice: 8000,
    sellPrice: 12000,
    status: "قريب من النفاد",
  },
  {
    id: "4",
    code: "TIR-004",
    name: "إطار ميشلان 185/65R15",
    category: "إطارات",
    quantity: 0,
    buyPrice: 15000,
    sellPrice: 22000,
    status: "نفذ",
  },
];

export default function Inventory() {
  const [products] = useState<Product[]>(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: Product["status"]) => {
    switch (status) {
      case "في المخزون":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "قريب من النفاد":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "نفذ":
        return "bg-red-500/20 text-red-400 border-red-500/30";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            إدارة المخزون
          </h1>
          <p className="text-muted-foreground">تتبع وإدارة قطع الغيار المتوفرة</p>
        </div>
        <Button className="gradient-primary glow-primary gap-2">
          <Plus className="w-5 h-5" />
          إضافة قطعة جديدة
        </Button>
      </div>

      {/* Search & Filters */}
      <Card className="glass p-6 glow-primary">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="ابحث عن قطعة غيار..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 bg-background/50"
            />
          </div>
        </div>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass p-6 glow-primary">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">إجمالي المنتجات</p>
              <p className="text-2xl font-bold">{products.length}</p>
            </div>
          </div>
        </Card>

        <Card className="glass p-6 glow-secondary">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">في المخزون</p>
              <p className="text-2xl font-bold text-green-400">
                {products.filter((p) => p.status === "في المخزون").length}
              </p>
            </div>
          </div>
        </Card>

        <Card className="glass p-6 glow-accent">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">قريب من النفاد</p>
              <p className="text-2xl font-bold text-yellow-400">
                {products.filter((p) => p.status === "قريب من النفاد").length}
              </p>
            </div>
          </div>
        </Card>

        <Card className="glass p-6 glow-primary">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
              <Package className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">نفذ</p>
              <p className="text-2xl font-bold text-red-400">
                {products.filter((p) => p.status === "نفذ").length}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Products Table */}
      <Card className="glass glow-secondary overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-card/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-right text-sm font-semibold">الكود</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">اسم المنتج</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">الفئة</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">الكمية</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">سعر الشراء</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">سعر البيع</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">الحالة</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr
                  key={product.id}
                  className="border-b border-border hover:bg-card/30 transition-smooth"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="px-6 py-4 text-sm font-mono text-primary">{product.code}</td>
                  <td className="px-6 py-4 font-medium">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{product.category}</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold">{product.quantity}</span>
                  </td>
                  <td className="px-6 py-4 text-sm">{product.buyPrice.toLocaleString()} ر.ي</td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">
                    {product.sellPrice.toLocaleString()} ر.ي
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={getStatusColor(product.status)}>{product.status}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-destructive/10">
                        <Trash2 className="w-4 h-4" />
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
