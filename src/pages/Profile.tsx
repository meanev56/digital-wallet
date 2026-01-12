import { ChevronRight, User, Shield, Bell, HelpCircle, LogOut, Lock, CreditCard, FileText, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { cn } from "@/lib/utils";

const menuSections = [
  {
    title: "Account",
    items: [
      { icon: User, label: "Personal Information", path: "/profile/personal", badge: null },
      { icon: Shield, label: "KYC Verification", path: "/profile/kyc", badge: "Verified", badgeColor: "bg-success/10 text-success" },
      { icon: CreditCard, label: "My Cards", path: "/card", badge: null },
    ],
  },
  {
    title: "Security",
    items: [
      { icon: Lock, label: "Change PIN", path: "/profile/pin", badge: null },
      { icon: Shield, label: "Security Settings", path: "/profile/security", badge: null },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: Bell, label: "Notifications", path: "/profile/notifications", badge: null },
      { icon: Settings, label: "App Settings", path: "/profile/settings", badge: null },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: HelpCircle, label: "Help Center", path: "/help", badge: null },
      { icon: FileText, label: "Terms & Privacy", path: "/terms", badge: null },
    ],
  },
];

const Profile = () => {
  return (
    <AppLayout>
      <div className="px-4 pt-6 space-y-6 pb-8">
        {/* Profile Header */}
        <div className="section-card flex items-center gap-4 animate-scale-in">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">AO</span>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-foreground">Njoku Emeka</h1>
            <p className="text-muted-foreground">emekanjoku86@gmail.com</p>
            <p className="text-sm text-muted-foreground">+234 801 234 5678</p>
          </div>
          <Link
            to="/profile/edit"
            className="p-3 rounded-xl bg-secondary hover:bg-muted transition-colors"
          >
            <Settings className="w-5 h-5 text-muted-foreground" />
          </Link>
        </div>

        {/* Account Tier */}
        <div className="section-card bg-linear-to-r from-primary/5 to-accent/5 animate-slide-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Account Tier</p>
              <p className="font-bold text-foreground">Tier 3 - Unlimited</p>
            </div>
            <div className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
              Verified
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Daily Transfer Limit</span>
              <span className="font-semibold text-foreground">₦5,000,000</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-primary rounded-full" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">₦1,250,000 used today</p>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-6">
          {menuSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="animate-slide-up"
              style={{ animationDelay: `${sectionIndex * 100}ms` }}
            >
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 px-1">
                {section.title}
              </h3>
              <div className="section-card space-y-1 p-2">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-secondary">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <span className="flex-1 font-medium text-foreground">{item.label}</span>
                      {item.badge && (
                        <span className={cn("px-2 py-1 rounded-full text-xs font-medium", item.badgeColor)}>
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-3 p-4 rounded-xl bg-destructive/10 text-destructive font-semibold hover:bg-destructive/20 transition-colors animate-slide-up">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </AppLayout>
  );
};

export default Profile;
