"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, MapPin, CreditCard, Clock, User, ShoppingBag } from "lucide-react"

const orders = [
  {
    id: 1,
    customer: "Maria Silva",
    items: ["Marmita Executiva", "Refrigerante"],
    status: "Entregue",
    value: 35.0,
    statusColor: "default" as const,
    location: "Rua das Flores, 123 - Centro",
    paymentMethod: "Cartão de Crédito",
    time: "12:30",
    phone: "(11) 98765-4321",
  },
  {
    id: 2,
    customer: "João Santos",
    items: ["Marmita Fitness", "Suco Natural"],
    status: "Em preparo",
    value: 42.0,
    statusColor: "secondary" as const,
    location: "Av. Paulista, 1000 - Bela Vista",
    paymentMethod: "PIX",
    time: "12:45",
    phone: "(11) 91234-5678",
  },
  {
    id: 3,
    customer: "Ana Costa",
    items: ["Marmita Tradicional"],
    status: "Pendente",
    value: 28.0,
    statusColor: "outline" as const,
    location: "Rua Augusta, 456 - Consolação",
    paymentMethod: "Dinheiro",
    time: "13:00",
    phone: "(11) 99876-5432",
  },
  {
    id: 4,
    customer: "Pedro Oliveira",
    items: ["Marmita Executiva", "Sobremesa"],
    status: "Entregue",
    value: 45.0,
    statusColor: "default" as const,
    location: "Rua Oscar Freire, 789 - Jardins",
    paymentMethod: "Cartão de Débito",
    time: "12:15",
    phone: "(11) 97654-3210",
  },
  {
    id: 5,
    customer: "Carla Mendes",
    items: ["Marmita Fitness", "Refrigerante"],
    status: "Em preparo",
    value: 38.0,
    statusColor: "secondary" as const,
    location: "Rua Haddock Lobo, 321 - Cerqueira César",
    paymentMethod: "PIX",
    time: "13:15",
    phone: "(11) 96543-2109",
  },
  {
    id: 6,
    customer: "Roberto Lima",
    items: ["Marmita Tradicional", "Suco Natural", "Sobremesa"],
    status: "Pendente",
    value: 52.0,
    statusColor: "outline" as const,
    location: "Av. Brigadeiro Faria Lima, 2000 - Pinheiros",
    paymentMethod: "Cartão de Crédito",
    time: "13:30",
    phone: "(11) 95432-1098",
  },
]

export default function PedidosPage() {
  const [selectedOrder, setSelectedOrder] = useState<(typeof orders)[0] | null>(null)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Pedidos</h1>
          <p className="text-muted-foreground mt-1">Gerencie todos os pedidos do dia</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Orders List */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Todos os Pedidos</h2>
              <div className="space-y-3">
                {orders.map((order) => (
                  <button
                    key={order.id}
                    onClick={() => setSelectedOrder(order)}
                    className="w-full flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-left"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{order.customer}</p>
                      <p className="text-sm text-muted-foreground mt-1">{order.items.join(", ")}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{order.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={order.statusColor} className="whitespace-nowrap">
                        {order.status}
                      </Badge>
                      <p className="font-bold text-foreground min-w-[80px] text-right">R$ {order.value.toFixed(2)}</p>
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Order Details Panel */}
          <div className="lg:col-span-1">
            {selectedOrder ? (
              <Card className="p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">Detalhes do Pedido</h2>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedOrder(null)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Customer Info */}
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <User className="h-4 w-4" />
                      <span className="text-sm font-medium">Cliente</span>
                    </div>
                    <p className="text-foreground font-semibold">{selectedOrder.customer}</p>
                    <p className="text-sm text-muted-foreground mt-1">{selectedOrder.phone}</p>
                  </div>

                  {/* Items */}
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <ShoppingBag className="h-4 w-4" />
                      <span className="text-sm font-medium">Itens</span>
                    </div>
                    <ul className="space-y-2">
                      {selectedOrder.items.map((item, index) => (
                        <li key={index} className="text-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Location */}
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-medium">Local de Entrega</span>
                    </div>
                    <p className="text-foreground">{selectedOrder.location}</p>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <CreditCard className="h-4 w-4" />
                      <span className="text-sm font-medium">Forma de Pagamento</span>
                    </div>
                    <p className="text-foreground">{selectedOrder.paymentMethod}</p>
                  </div>

                  {/* Time */}
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-medium">Horário</span>
                    </div>
                    <p className="text-foreground">{selectedOrder.time}</p>
                  </div>

                  {/* Status */}
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-2">Status</div>
                    <Badge variant={selectedOrder.statusColor} className="text-sm">
                      {selectedOrder.status}
                    </Badge>
                  </div>

                  {/* Total */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-foreground">Total</span>
                      <span className="text-2xl font-bold text-primary">R$ {selectedOrder.value.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="p-6 sticky top-24">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Selecione um pedido para ver os detalhes</p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
