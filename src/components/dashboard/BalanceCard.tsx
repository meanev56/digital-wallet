import { Eye, EyeOff, TrendingUp } from "lucide-react";
import { useState } from "react";
interface BalanceCardProps {
  balance: number;
  currency?: string;
}

const BalanceCard = ({ balance, currency = "₦" }: BalanceCardProps) => {
  const [showBalance, setShowBalance] = useState(true);

  const formatBalance = (amount: number) => {
    return amount.toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="balance-card rounded-3xl p-6 text-primary-foreground animate-scale-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm opacity-90 font-medium">Total Balance</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl font-bold">{currency}</span>
            <span className="text-3xl font-bold tracking-tight">
              {showBalance ? formatBalance(balance) : "••••••"}
            </span>
          </div>
        </div>
        <button
          onClick={() => setShowBalance(!showBalance)}
          className="p-3 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors"
        >
          {showBalance ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>
      
      <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-xl px-4 py-3">
        <TrendingUp className="w-4 h-4" />
        <span className="text-sm font-medium">+12.5% this month</span>
      </div>
    </div>
  );
};

export default BalanceCard;
