import { useState } from "react";
import { Eye, EyeOff, ArrowRight, Phone, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

type AuthMode = "login" | "signup";

const Auth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="pt-12 pb-8 px-6 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary flex items-center justify-center animate-bounce-in">
          <span className="text-2xl font-bold text-primary-foreground">PF</span>
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2 animate-fade-in">
          {mode === "login" ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
          {mode === "login"
            ? "Sign in to access your account"
            : "Start your financial journey today"}
        </p>
      </div>

      {/* Form */}
      <div className="flex-1 px-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div className="animate-slide-up">
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
          )}

          <div className="animate-slide-up" style={{ animationDelay: mode === "signup" ? "50ms" : "0ms" }}>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="tel"
                placeholder="+234 801 234 5678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-field pl-12"
              />
            </div>
          </div>

          {mode === "signup" && (
            <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-12"
                />
              </div>
            </div>
          )}

          <div className="animate-slide-up" style={{ animationDelay: mode === "signup" ? "150ms" : "50ms" }}>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              {mode === "login" ? "PIN" : "Create PIN"}
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder={mode === "login" ? "Enter your PIN" : "Create a 6-digit PIN"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field pl-12 pr-12"
                maxLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {mode === "login" && (
            <button
              type="button"
              className="text-sm font-medium text-primary hover:underline animate-fade-in"
            >
              Forgot PIN?
            </button>
          )}

          <Button type="submit" className="w-full mt-6" size="lg">
            {mode === "login" ? "Sign In" : "Create Account"}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </form>

        {/* Toggle Mode */}
        <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
          <p className="text-muted-foreground">
            {mode === "login" ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="font-semibold text-primary hover:underline mt-1"
          >
            {mode === "login" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 text-center">
        <p className="text-xs text-muted-foreground">
          By continuing, you agree to our{" "}
          <button className="text-primary hover:underline">Terms</button> and{" "}
          <button className="text-primary hover:underline">Privacy Policy</button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
