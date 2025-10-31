"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, TrendingUp, ShoppingBag, Package } from "lucide-react"
import { useState } from "react"

// Mock data for reports
const financialData = {
  totalRevenue: 15420.5,
  operationalCosts: 4230.0,
  netProfit: 11190.5,
  month: "Janeiro 2025",
}

const ordersData = [
  {
    id: "001",
    customer: "Maria Silva",
    date: "15/01/2025",
    items: "Marmita Executiva, Refrigerante",
    payment: "PIX",
    status: "Entregue",
    value: 35.0,
  },
  {
    id: "002",
    customer: "João Santos",
    date: "15/01/2025",
    items: "Marmita Fitness",
    payment: "Cartão de Crédito",
    status: "Entregue",
    value: 28.0,
  },
  {
    id: "003",
    customer: "Ana Costa",
    date: "14/01/2025",
    items: "Marmita Executiva, Suco Natural",
    payment: "Dinheiro",
    status: "Entregue",
    value: 38.0,
  },
  {
    id: "004",
    customer: "Pedro Lima",
    date: "14/01/2025",
    items: "Marmita Fitness, Refrigerante",
    payment: "PIX",
    status: "Cancelado",
    value: 33.0,
  },
  {
    id: "005",
    customer: "Carla Mendes",
    date: "13/01/2025",
    items: "Marmita Executiva",
    payment: "Cartão de Débito",
    status: "Entregue",
    value: 30.0,
  },
]

const itemsData = [
  { name: "Marmita Executiva", quantity: 145, revenue: 4350.0, rank: 1 },
  { name: "Marmita Fitness", quantity: 98, revenue: 2744.0, rank: 2 },
  { name: "Refrigerante", quantity: 87, revenue: 435.0, rank: 3 },
  { name: "Suco Natural", quantity: 65, revenue: 520.0, rank: 4 },
  { name: "Sobremesa", quantity: 42, revenue: 336.0, rank: 5 },
]

export default function RelatoriosPage() {
  const [selectedMonth, setSelectedMonth] = useState("janeiro-2025")
  const [activeReport, setActiveReport] = useState<"financial" | "orders" | "items">("financial")

  const handleDownload = (format: "pdf" | "csv" | "excel") => {
    // Simulate download
    console.log(`[v0] Downloading ${activeReport} report as ${format}`)
    alert(`Baixando relatório em formato ${format.toUpperCase()}...`)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Relatórios</h1>
            <p className="text-muted-foreground mt-1">Gere e baixe relatórios mensais de desempenho do negócio</p>
          </div>
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Selecione o mês" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="janeiro-2025">Janeiro 2025</SelectItem>
              <SelectItem value="dezembro-2024">Dezembro 2024</SelectItem>
              <SelectItem value="novembro-2024">Novembro 2024</SelectItem>
              <SelectItem value="outubro-2024">Outubro 2024</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Report Type Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card
            className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
              activeReport === "financial" ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setActiveReport("financial")}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Relatório Financeiro</h3>
                <p className="text-sm text-muted-foreground">Faturamento e lucro</p>
              </div>
            </div>
          </Card>

          <Card
            className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
              activeReport === "orders" ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setActiveReport("orders")}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Relatório de Pedidos</h3>
                <p className="text-sm text-muted-foreground">Todos os pedidos</p>
              </div>
            </div>
          </Card>

          <Card
            className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
              activeReport === "items" ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setActiveReport("items")}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Relatório de Itens</h3>
                <p className="text-sm text-muted-foreground">Desempenho do cardápio</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Report Content */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">
                {activeReport === "financial" && "Relatório Financeiro"}
                {activeReport === "orders" && "Relatório de Pedidos"}
                {activeReport === "items" && "Relatório de Itens Vendidos"}
              </h2>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => handleDownload("pdf")}>
                <Download className="h-4 w-4 mr-2" />
                PDF
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleDownload("csv")}>
                <Download className="h-4 w-4 mr-2" />
                CSV
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleDownload("excel")}>
                <Download className="h-4 w-4 mr-2" />
                Excel
              </Button>
            </div>
          </div>

          {/* Financial Report */}
          {activeReport === "financial" && (
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground mb-1">Faturamento Total</p>
                  <p className="text-2xl font-bold text-foreground">R$ {financialData.totalRevenue.toFixed(2)}</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground mb-1">Custos Operacionais</p>
                  <p className="text-2xl font-bold text-foreground">R$ {financialData.operationalCosts.toFixed(2)}</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/10">
                  <p className="text-sm text-muted-foreground mb-1">Lucro Líquido</p>
                  <p className="text-2xl font-bold text-primary">R$ {financialData.netProfit.toFixed(2)}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Relatório gerado para o período de {financialData.month}. Os valores apresentados são ideais para
                  controle contábil e acompanhamento do crescimento do negócio.
                </p>
              </div>
            </div>
          )}

          {/* Orders Report */}
          {activeReport === "orders" && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">ID</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Cliente</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Data</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Itens</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Pagamento</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Status</th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-foreground">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordersData.map((order) => (
                      <tr key={order.id} className="border-b border-border hover:bg-secondary/50">
                        <td className="py-3 px-4 text-sm text-foreground">#{order.id}</td>
                        <td className="py-3 px-4 text-sm text-foreground">{order.customer}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{order.date}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{order.items}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{order.payment}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              order.status === "Entregue"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Cancelado"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm font-medium text-foreground text-right">
                          R$ {order.value.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Total de {ordersData.length} pedidos registrados no período selecionado.
                </p>
              </div>
            </div>
          )}

          {/* Items Report */}
          {activeReport === "items" && (
            <div className="space-y-4">
              <div className="space-y-3">
                {itemsData.map((item) => (
                  <div key={item.name} className="p-4 rounded-lg bg-secondary">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-sm font-bold text-primary-foreground">{item.rank}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.quantity} unidades vendidas</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">R$ {item.revenue.toFixed(2)}</p>
                        <p className="text-xs text-muted-foreground">Receita total</p>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${(item.quantity / 145) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Ranking dos itens mais vendidos no período. Use esses dados para otimizar seu cardápio e estoque.
                </p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </DashboardLayout>
  )
}
