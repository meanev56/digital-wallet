import { useState } from "react";
import { ArrowLeft, Phone, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PurchaseType = "airtime" | "data";

const networks = [
  { id: "mtn", name: "MTN", color: "bg-yellow-400" },
  { id: "glo", name: "Glo", color: "bg-green-500" },
  { id: "airtel", name: "Airtel", color: "bg-red-500" },
  { id: "9mobile", name: "9mobile", color: "bg-green-700" },
];

const quickAmounts = [100, 200, 500, 1000, 2000, 5000];

const dataPlans = [
  { id: "1", name: "1GB", validity: "1 Day", price: 350 },
  { id: "2", name: "2GB", validity: "7 Days", price: 700 },
  { id: "3", name: "5GB", validity: "30 Days", price: 1500 },
  { id: "4", name: "10GB", validity: "30 Days", price: 2500 },
  { id: "5", name: "20GB", validity: "30 Days", price: 4500 },
  { id: "6", name: "50GB", validity: "30 Days", price: 10000 },
];

const Airtime = () => {
  const [purchaseType, setPurchaseType] = useState<PurchaseType>("airtime");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

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
          <h1 className="text-xl font-bold text-foreground">Airtime & Data</h1>
        </header>

        {/* Type Toggle */}
        <div className="flex p-1 bg-secondary rounded-xl animate-slide-up">
          <button
            onClick={() => setPurchaseType("airtime")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all duration-200",
              purchaseType === "airtime"
                ? "bg-card text-foreground shadow-soft"
                : "text-muted-foreground"
            )}
          >
            <Phone className="w-4 h-4" />
            Airtime
          </button>
          <button
            onClick={() => setPurchaseType("data")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all duration-200",
              purchaseType === "data"
                ? "bg-card text-foreground shadow-soft"
                : "text-muted-foreground"
            )}
          >
            <Smartphone className="w-4 h-4" />
            Data
          </button>
        </div>

        {/* Network Selection */}
        <div className="section-card animate-slide-up" style={{ animationDelay: "50ms" }}>
          <label className="text-sm font-medium text-muted-foreground mb-3 block">
            Select Network
          </label>
          <div className="grid grid-cols-4 gap-3">
            {networks.map((network) => (
              <button
                key={network.id}
                onClick={() => setSelectedNetwork(network.id)}
                className={cn(
                  "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200",
                  selectedNetwork === network.id
                    ? "border-primary bg-primary/5"
                    : "border-border/50 hover:border-primary/30"
                )}
              >
                <div className={cn("w-10 h-10 rounded-full", network.color)} />
                <span className="text-xs font-semibold text-foreground">{network.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Phone Number */}
        <div className="section-card animate-slide-up" style={{ animationDelay: "100ms" }}>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="e.g. 08012345678"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input-field"
          />
        </div>

        {/* Airtime Amount or Data Plans */}
        {purchaseType === "airtime" ? (
          <div className="section-card animate-slide-up" style={{ animationDelay: "150ms" }}>
            <label className="text-sm font-medium text-muted-foreground mb-3 block">
              Amount
            </label>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {quickAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt.toString())}
                  className={cn(
                    "py-3 rounded-xl font-semibold transition-all duration-200",
                    amount === amt.toString()
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-muted"
                  )}
                >
                  ₦{amt.toLocaleString()}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-muted-foreground">
                ₦
              </span>
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="input-field pl-10 text-lg font-semibold"
              />
            </div>
          </div>
        ) : (
          <div className="section-card animate-slide-up" style={{ animationDelay: "150ms" }}>
            <label className="text-sm font-medium text-muted-foreground mb-3 block">
              Select Data Plan
            </label>
            <div className="space-y-3">
              {dataPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={cn(
                    "w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200",
                    selectedPlan === plan.id
                      ? "border-primary bg-primary/5"
                      : "border-border/50 hover:border-primary/30"
                  )}
                >
                  <div>
                    <p className="font-bold text-foreground">{plan.name}</p>
                    <p className="text-sm text-muted-foreground">{plan.validity}</p>
                  </div>
                  <p className="font-bold text-primary">₦{plan.price.toLocaleString()}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        <Button className="w-full" size="lg">
          {purchaseType === "airtime" ? "Buy Airtime" : "Buy Data"}
        </Button>
      </div>
    </AppLayout>
  );
};

export default Airtime;
