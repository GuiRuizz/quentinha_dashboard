"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { day: "Seg", vendas: 650 },
  { day: "Ter", vendas: 720 },
  { day: "Qua", vendas: 580 },
  { day: "Qui", vendas: 890 },
  { day: "Sex", vendas: 950 },
  { day: "Sáb", vendas: 680 },
  { day: "Dom", vendas: 420 },
]

export function SalesChart() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold text-foreground mb-4">Vendas da Semana</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Bar dataKey="vendas" fill="#FF7A00" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
