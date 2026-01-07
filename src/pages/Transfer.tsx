import { useState } from "react";
import { ArrowLeft, Search, User, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TransferType = "user" | "bank" | "beneficiary";

const transferTypes = [
  { id: "user" as TransferType, icon: User, label: "To User", description: "Send to app user" },
  { id: "bank" as TransferType, icon: Building2, label: "To Bank", description: "Bank transfer" },
  { id: "beneficiary" as TransferType, icon: Users, label: "Beneficiary", description: "Saved accounts" },
];

const beneficiaries = [
  { id: "1", name: "Chidi Nwankwo", bank: "GTBank", initial: "CN" },
  { id: "2", name: "Amaka Eze", bank: "Access Bank", initial: "AE" },
  { id: "3", name: "Tunde Balogun", bank: "First Bank", initial: "TB" },
  { id: "4", name: "Ngozi Obi", bank: "UBA", initial: "NO" },
];

const Transfer = () => {
  const [selectedType, setSelectedType] = useState<TransferType>("user");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <AppLayout>
      <div className="px-4 pt-6 space-y-6">
        {/* Header */}
        <header className="flex items-center gap-4 animate-fade-in">
          <Link
            to="/"
            className="p-3 rounded-xl bg-card border border-border/50 hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <h1 className="text-xl font-bold text-foreground">Transfer Money</h1>
        </header>

        {/* Transfer Type Selection */}
        <div className="grid grid-cols-3 gap-3 animate-slide-up">
          {transferTypes.map((type) => {
            const Icon = type.icon;
            const isActive = selectedType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={cn(
                  "flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200",
                  isActive
                    ? "bg-primary/10 border-primary"
                    : "bg-card border-border/50 hover:border-primary/30"
                )}
              >
                <div className={cn("p-3 rounded-xl", isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground")}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={cn("text-sm font-semibold", isActive ? "text-primary" : "text-foreground")}>
                  {type.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Transfer Form */}
        <div className="section-card space-y-4 animate-slide-up" style={{ animationDelay: "100ms" }}>
          {selectedType === "bank" && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Bank
                </label>
                <select className="input-field">
                  <option value="">Select bank</option>
                  <option value="gtbank">GTBank</option>
                  <option value="access">Access Bank</option>
                  <option value="firstbank">First Bank</option>
                  <option value="uba">UBA</option>
                  <option value="zenith">Zenith Bank</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              {selectedType === "user" ? "Phone or Username" : "Account Number"}
            </label>
            <div className="relative">
              <input
                type={selectedType === "user" ? "text" : "number"}
                placeholder={selectedType === "user" ? "Enter phone or @username" : "Enter account number"}
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="input-field pr-12"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-secondary hover:bg-muted transition-colors">
                <Search className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-muted-foreground">
                ₦
              </span>
              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="input-field pl-10 text-lg font-semibold"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Note (Optional)
            </label>
            <input
              type="text"
              placeholder="What's this for?"
              className="input-field"
            />
          </div>

          <Button className="w-full mt-4" size="lg">
            Continue
          </Button>
        </div>

        {/* Beneficiaries */}
        {selectedType === "beneficiary" && (
          <div className="section-card animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h3 className="font-semibold text-foreground mb-4">Saved Beneficiaries</h3>
            <div className="space-y-3">
              {beneficiaries.map((person) => (
                <button
                  key={person.id}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">{person.initial}</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{person.name}</p>
                    <p className="text-sm text-muted-foreground">{person.bank}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Transfer;
