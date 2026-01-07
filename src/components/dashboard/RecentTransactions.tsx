import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { TransactionType } from "./TransactionItem";
import TransactionItem from "./TransactionItem";

interface Transaction {
  id: string;
  type: TransactionType;
  title: string;
  description: string;
  amount: number;
  date: string;
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "credit",
    title: "Funds Received",
    description: "From Adebayo Johnson",
    amount: 50000,
    date: "Today, 2:30 PM",
  },
  {
    id: "2",
    type: "debit",
    title: "Transfer",
    description: "To Chioma Okafor",
    amount: 15000,
    date: "Today, 11:45 AM",
  },
  {
    id: "3",
    type: "airtime",
    title: "MTN Airtime",
    description: "08012345678",
    amount: 2000,
    date: "Yesterday",
  },
  {
    id: "4",
    type: "electricity",
    title: "EKEDC Prepaid",
    description: "Meter: 123456789",
    amount: 10000,
    date: "Jan 3, 2026",
  },
];

const RecentTransactions = () => {
  return (
    <div className="section-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Recent Transactions</h3>
        <Link
          to="/transactions"
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          See all
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="space-y-3">
        {mockTransactions.map((transaction, index) => (
          <div
            key={transaction.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <TransactionItem {...transaction} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
