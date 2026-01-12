import { useState } from "react";
import { ArrowLeft, Search, Filter, Download } from "lucide-react";
import { Link } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import type { TransactionType } from "@/components/dashboard/TransactionItem";
import TransactionItem from "@/components/dashboard/TransactionItem";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  type: TransactionType;
  title: string;
  description: string;
  amount: number;
  date: string;
}

const allTransactions: Transaction[] = [
  { id: "1", type: "credit", title: "Funds Received", description: "From Adebayo Johnson", amount: 50000, date: "Today, 2:30 PM" },
  { id: "2", type: "debit", title: "Transfer", description: "To Chioma Okafor", amount: 15000, date: "Today, 11:45 AM" },
  { id: "3", type: "airtime", title: "MTN Airtime", description: "08012345678", amount: 2000, date: "Yesterday" },
  { id: "4", type: "electricity", title: "EKEDC Prepaid", description: "Meter: 123456789", amount: 10000, date: "Jan 3, 2026" },
  { id: "5", type: "credit", title: "Salary Payment", description: "From TechCorp Ltd", amount: 350000, date: "Jan 1, 2026" },
  { id: "6", type: "debit", title: "Transfer", description: "To Emeka Nwosu", amount: 25000, date: "Dec 30, 2025" },
  { id: "7", type: "card", title: "Card Payment", description: "Amazon.com", amount: 8500, date: "Dec 28, 2025" },
  { id: "8", type: "airtime", title: "Glo Data", description: "5GB Monthly", amount: 3500, date: "Dec 25, 2025" },
];

const filters = ["All", "Credit", "Debit", "Bills"];

const Transactions = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTransactions = allTransactions.filter((tx) => {
    const matchesFilter =
      activeFilter === "All" ||
      (activeFilter === "Credit" && tx.type === "credit") ||
      (activeFilter === "Debit" && tx.type === "debit") ||
      (activeFilter === "Bills" && (tx.type === "airtime" || tx.type === "electricity"));

    const matchesSearch =
      tx.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <AppLayout>
      <div className="px-4 pt-6 space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between animate-fade-in">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="p-3 rounded-xl bg-card border border-border/50 hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
            <h1 className="text-xl font-bold text-foreground">Transactions</h1>
          </div>
          <button className="p-3 rounded-xl bg-card border border-border/50 hover:bg-secondary transition-colors">
            <Download className="w-5 h-5 text-muted-foreground" />
          </button>
        </header>

        {/* Search */}
        <div className="relative animate-slide-up">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-12 pr-12"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-secondary hover:bg-muted transition-colors">
            <Filter className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar animate-slide-up" style={{ animationDelay: "50ms" }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200",
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-muted"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Transactions List */}
        <div className="space-y-3">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction, index) => (
              <div
                key={transaction.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <TransactionItem {...transaction} />
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No transactions found</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Transactions;
