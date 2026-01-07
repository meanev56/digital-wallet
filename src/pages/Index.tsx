import BalanceCard from "@/components/dashboard/BalanceCard"
import QuickActions from "@/components/dashboard/QuickActions"
import RecentTransactions from "@/components/dashboard/RecentTransactions"
import AppLayout from "@/components/layout/AppLayout"
import { Bell, QrCode } from "lucide-react"

const Index = () => {
  return (
    <AppLayout>
      <div className="px-4 pt-6 space-y-6">
        {/* header */}
        <header className="flex items-center justify-between animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">
                AO
              </span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Good morning
              </p>
              <h1 className="font-bold text-lg text-foreground">
                Njoku Emeka
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-3 rounded-xl bg-card border border-border/50 hover:bg-secondary transition-colors">
              <QrCode className="w-5 h-5 text-muted-foreground"/>
            </button>
            <button className="p-3 rounded-xl bg-card border border-border/50 hover:bg-secondary transition-colors relative">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
            </button>
          </div>
        </header>

        {/* balance card */}
        <BalanceCard balance={1234567.08}  />
 
        {/* quick actions */}
        <QuickActions />
        
        {/* recent transactions */}
        <RecentTransactions />
      </div>
    </AppLayout>
  )
}

export default Index