import { useState } from "react";
import { ArrowLeft, CreditCard, Eye, EyeOff, Snowflake, Copy, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const Card = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);

  const cardNumber = "5399 1234 5678 9012";
  const cvv = "123";
  const expiry = "09/28";

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text.replace(/\s/g, ""));
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
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
          <h1 className="text-xl font-bold text-foreground">Virtual Card</h1>
        </header>

        {/* Card Display */}
        <div
          className={cn(
            "relative rounded-3xl p-6 text-primary-foreground animate-scale-in overflow-hidden",
            isFrozen ? "bg-muted" : "balance-card"
          )}
        >
          {isFrozen && (
            <div className="absolute inset-0 bg-muted/90 backdrop-blur-sm flex flex-col items-center justify-center z-10">
              <Snowflake className="w-12 h-12 mb-2 text-muted-foreground" />
              <p className="font-semibold text-muted-foreground">Card Frozen</p>
            </div>
          )}

          <div className="flex items-center justify-between mb-8">
            <div className="w-12 h-8 bg-linear-to-br from-yellow-300 to-yellow-500 rounded" />
            <CreditCard className="w-8 h-8 opacity-80" />
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2">
              <p className="text-xl font-mono tracking-widest">
                {showDetails ? cardNumber : "•••• •••• •••• 9012"}
              </p>
              <button
                onClick={() => copyToClipboard(cardNumber, "Card number")}
                className="p-1 rounded hover:bg-primary-foreground/20 transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs opacity-70 mb-1">Card Holder</p>
              <p className="font-semibold">Njoku Emeka</p>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-70 mb-1">Expiry</p>
              <p className="font-semibold">{showDetails ? expiry : "••/••"}</p>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-70 mb-1">CVV</p>
              <p className="font-semibold">{showDetails ? cvv : "•••"}</p>
            </div>
          </div>
        </div>

        {/* Card Actions */}
        <div className="grid grid-cols-2 gap-4 animate-slide-up">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border/50 font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            {showDetails ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            {showDetails ? "Hide" : "Show"} Details
          </button>
          <button
            onClick={() => setIsFrozen(!isFrozen)}
            className={cn(
              "flex items-center justify-center gap-3 p-4 rounded-xl font-semibold transition-colors",
              isFrozen
                ? "bg-success/10 text-success border border-success/30"
                : "bg-destructive/10 text-destructive border border-destructive/30"
            )}
          >
            <Snowflake className="w-5 h-5" />
            {isFrozen ? "Unfreeze" : "Freeze"}
          </button>
        </div>

        {/* Card Info */}
        <div className="section-card space-y-4 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <h3 className="font-semibold text-foreground">Card Details</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b border-border/50">
              <span className="text-muted-foreground">Card Type</span>
              <span className="font-semibold text-foreground">Virtual Mastercard</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border/50">
              <span className="text-muted-foreground">Status</span>
              <span className={cn("font-semibold", isFrozen ? "text-destructive" : "text-success")}>
                {isFrozen ? "Frozen" : "Active"}
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border/50">
              <span className="text-muted-foreground">Spending Limit</span>
              <span className="font-semibold text-foreground">₦500,000/day</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-muted-foreground">Currency</span>
              <span className="font-semibold text-foreground">NGN</span>
            </div>
          </div>
        </div>

        {/* Add Card */}
        <Button variant="outline" className="w-full" size="lg">
          <Plus className="w-5 h-5 mr-2" />
          Create New Card
        </Button>
      </div>
    </AppLayout>
  );
};

export default Card;
