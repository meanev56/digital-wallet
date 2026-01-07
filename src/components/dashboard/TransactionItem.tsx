import { ArrowDownLeft, ArrowUpRight, Smartphone, Zap, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

export type TransactionType = "credit" | "debit" | "airtime" | "electricity" | "card";

interface TransactionItemProps {
  type: TransactionType;
  title: string;
  description: string;
  amount: number;
  date: string;
  currency?: string;
}

const typeConfig = {
  credit: { icon: ArrowDownLeft, color: "bg-success/10 text-success" },
  debit: { icon: ArrowUpRight, color: "bg-destructive/10 text-destructive" },
  airtime: { icon: Smartphone, color: "bg-warning/10 text-warning" },
  electricity: { icon: Zap, color: "bg-accent/10 text-accent" },
  card: { icon: CreditCard, color: "bg-primary/10 text-primary" },
};

const TransactionItem = ({
  type,
  title,
  description,
  amount,
  date,
  currency = "₦",
}: TransactionItemProps) => {
  const config = typeConfig[type];
  const Icon = config.icon;
  const isCredit = type === "credit";

  const formatAmount = (value: number) => {
    return value.toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="transaction-item">
      <div className={cn("p-3 rounded-xl", config.color)}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-foreground truncate">{title}</p>
        <p className="text-sm text-muted-foreground truncate">{description}</p>
      </div>
      <div className="text-right">
        <p className={cn("font-bold", isCredit ? "text-success" : "text-foreground")}>
          {isCredit ? "+" : "-"}{currency}{formatAmount(amount)}
        </p>
        <p className="text-xs text-muted-foreground">{date}</p>
      </div>
    </div>
  );
};

export default TransactionItem;
