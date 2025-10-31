import { Card } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

const topItems = [
  { name: "Marmita Executiva", sales: 145, percentage: 35 },
  { name: "Marmita Fitness", sales: 98, percentage: 24 },
  { name: "Marmita Tradicional", sales: 87, percentage: 21 },
  { name: "Refrigerante", sales: 56, percentage: 14 },
  { name: "Suco Natural", sales: 23, percentage: 6 },
]

export function TopItems() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold text-foreground">Itens Mais Vendidos</h2>
      </div>
      <div className="space-y-4">
        {topItems.map((item, index) => (
          <div key={item.name}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-primary">#{index + 1}</span>
                <span className="text-sm font-medium text-foreground">{item.name}</span>
              </div>
              <span className="text-sm font-semibold text-foreground">{item.sales} vendas</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${item.percentage}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
