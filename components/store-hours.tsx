import { Card } from "@/components/ui/card"
import { Clock } from "lucide-react"

const schedule = [
  { day: "Segunda", hours: "11:00 - 15:00" },
  { day: "Terça", hours: "11:00 - 15:00" },
  { day: "Quarta", hours: "11:00 - 15:00" },
  { day: "Quinta", hours: "11:00 - 15:00" },
  { day: "Sexta", hours: "11:00 - 15:00" },
  { day: "Sábado", hours: "11:00 - 14:00" },
  { day: "Domingo", hours: "Fechado" },
]

export function StoreHours() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold text-foreground">Horário de Funcionamento</h2>
      </div>
      <div className="space-y-3">
        {schedule.map((item) => (
          <div key={item.day} className="flex items-center justify-between py-2 border-b border-border last:border-0">
            <span className="text-sm font-medium text-foreground">{item.day}</span>
            <span
              className={`text-sm font-semibold ${item.hours === "Fechado" ? "text-muted-foreground" : "text-primary"}`}
            >
              {item.hours}
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}
