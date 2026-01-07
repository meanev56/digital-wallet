import type { ReactNode } from "react";
import BottomNav from "./BottomNav";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

const AppLayout = ({ children, showNav = true }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <main className={cn("pb-24", showNav && "pb-24")}>
        {children}
      </main>
      {showNav && <BottomNav />}
    </div>
  );
};

export default AppLayout;
