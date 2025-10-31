import { DashboardLayout } from "@/components/dashboard-layout"
import { FinancialSummary } from "@/components/financial-summary"
import { OrdersList } from "@/components/orders-list"
import { TopItems } from "@/components/top-items"
import { StoreHours } from "@/components/store-hours"
import { SalesChart } from "@/components/sales-chart"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Bem-vindo ao painel Quentinha</p>
        </div>

        <FinancialSummary />

        <div className="grid gap-6 lg:grid-cols-2">
          <SalesChart />
          <TopItems />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <OrdersList />
          </div>
          <div>
            <StoreHours />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
