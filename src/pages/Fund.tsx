import { useState } from "react";
import { ArrowLeft, Building2, CreditCard, Copy, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

type FundMethod = "bank" | "card";

const Fund = () => {
  const [fundMethod, setFundMethod] = useState<FundMethod>("bank");
  const [amount, setAmount] = useState("");
  const [copied, setCopied] = useState(false);

  const accountNumber = "0123456789";
  const bankName = "Wema Bank";
  const accountName = "PayFlow/Adunni Oyelaran";

  const copyAccountNumber = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Account number copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

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
          <h1 className="text-xl font-bold text-foreground">Fund Wallet</h1>
        </header>

        {/* Method Toggle */}
        <div className="flex p-1 bg-secondary rounded-xl animate-slide-up">
          <button
            onClick={() => setFundMethod("bank")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all duration-200",
              fundMethod === "bank"
                ? "bg-card text-foreground shadow-soft"
                : "text-muted-foreground"
            )}
          >
            <Building2 className="w-4 h-4" />
            Bank Transfer
          </button>
          <button
            onClick={() => setFundMethod("card")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all duration-200",
              fundMethod === "card"
                ? "bg-card text-foreground shadow-soft"
                : "text-muted-foreground"
            )}
          >
            <CreditCard className="w-4 h-4" />
            Card
          </button>
        </div>

        {fundMethod === "bank" ? (
          <>
            {/* Bank Details */}
            <div className="section-card space-y-4 animate-slide-up" style={{ animationDelay: "50ms" }}>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Your dedicated account</p>
                  <p className="font-semibold text-foreground">{bankName}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Account Number</p>
                    <p className="text-xl font-bold font-mono text-foreground">{accountNumber}</p>
                  </div>
                  <button
                    onClick={copyAccountNumber}
                    className={cn(
                      "p-3 rounded-xl transition-all duration-200",
                      copied ? "bg-success/10 text-success" : "bg-card text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-secondary">
                  <p className="text-sm text-muted-foreground mb-1">Account Name</p>
                  <p className="font-semibold text-foreground">{accountName}</p>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="section-card animate-slide-up" style={{ animationDelay: "100ms" }}>
              <h3 className="font-semibold text-foreground mb-3">How it works</h3>
              <div className="space-y-3">
                {[
                  "Copy the account number above",
                  "Open your bank app and transfer any amount",
                  "Your wallet will be credited instantly",
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Card Funding */}
            <div className="section-card space-y-4 animate-slide-up" style={{ animationDelay: "50ms" }}>
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
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="input-field pl-10 text-lg font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  className="input-field font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="input-field font-mono"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    CVV
                  </label>
                  <input
                    type="password"
                    placeholder="•••"
                    className="input-field font-mono"
                  />
                </div>
              </div>

              <Button className="w-full mt-2" size="lg">
                Fund Wallet
              </Button>
            </div>

            {/* Saved Cards */}
            <div className="section-card animate-slide-up" style={{ animationDelay: "100ms" }}>
              <h3 className="font-semibold text-foreground mb-3">Saved Cards</h3>
              <button className="w-full flex items-center gap-3 p-4 rounded-xl border border-border/50 hover:bg-secondary transition-colors">
                <div className="p-2 rounded-lg bg-secondary">
                  <CreditCard className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-foreground">•••• 4532</p>
                  <p className="text-sm text-muted-foreground">Expires 12/26</p>
                </div>
              </button>
            </div>
          </>
        )}
      </div>
    </AppLayout>
  );
};

export default Fund;
