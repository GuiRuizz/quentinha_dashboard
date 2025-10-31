import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const orders = [
  {
    id: 1,
    customer: "Maria Silva",
    items: "Marmita Executiva, Refrigerante",
    status: "Entregue",
    value: "R$ 35,00",
    statusColor: "default" as const,
  },
  {
    id: 2,
    customer: "João Santos",
    items: "Marmita Fitness, Suco Natural",
    status: "Em preparo",
    value: "R$ 42,00",
    statusColor: "secondary" as const,
  },
  {
    id: 3,
    customer: "Ana Costa",
    items: "Marmita Tradicional",
    status: "Pendente",
    value: "R$ 28,00",
    statusColor: "outline" as const,
  },
  {
    id: 4,
    customer: "Pedro Oliveira",
    items: "Marmita Executiva, Sobremesa",
    status: "Entregue",
    value: "R$ 45,00",
    statusColor: "default" as const,
  },
  {
    id: 5,
    customer: "Carla Mendes",
    items: "Marmita Fitness, Refrigerante",
    status: "Em preparo",
    value: "R$ 38,00",
    statusColor: "secondary" as const,
  },
]

export function OrdersList() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold text-foreground mb-4">Pedidos Recentes</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <div className="flex-1">
              <p className="font-semibold text-foreground">{order.customer}</p>
              <p className="text-sm text-muted-foreground mt-1">{order.items}</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant={order.statusColor} className="whitespace-nowrap">
                {order.status}
              </Badge>
              <p className="font-bold text-foreground min-w-[80px] text-right">{order.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
