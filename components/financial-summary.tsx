import { Card } from "@/components/ui/card"
import { DollarSign, TrendingUp } from "lucide-react"

export function FinancialSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Recebido</p>
            <p className="text-3xl font-bold text-foreground mt-2">R$ 12.450,00</p>
            <p className="text-sm text-muted-foreground mt-1">Este mês</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <DollarSign className="h-6 w-6 text-primary" />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total do Dia</p>
            <p className="text-3xl font-bold text-foreground mt-2">R$ 850,00</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="h-4 w-4 text-primary" />
              <p className="text-sm text-primary font-medium">+12% vs ontem</p>
            </div>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <DollarSign className="h-6 w-6 text-primary" />
          </div>
        </div>
      </Card>
    </div>
  )
}
