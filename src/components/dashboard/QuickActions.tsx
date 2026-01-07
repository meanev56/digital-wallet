import { cn } from '@/lib/utils';
import { CreditCard, Download, Send, Smartphone, Tv, Wifi, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const actions = [
  { icon: Send, label: "Send", path: "/transfer", color: "bg-primary/10 text-primary" },
  { icon: Download, label: "Fund", path: "/fund", color: "bg-success/10 text-success" },
  { icon: CreditCard, label: "Card", path: "/card", color: "bg-accent/10 text-accent" },
  { icon: Smartphone, label: "Airtime", path: "/airtime", color: "bg-warning/10 text-warning" },
];

const billActions = [
  { icon: Zap, label: "Electricity", path: "/bills/electricity" },
  { icon: Tv, label: "TV", path: "/bills/tv" },
  { icon: Wifi, label: "Internet", path: "/bills/internet" },
];

const QuickActions = () => {
  return (
    <div className='space-y-6'>
      {/* Primary Actions */}
      <div className='grid grid-cols-4 gap-3'>
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.label}
              to={action.path}
              className='quick-action-btn animate-slide-up'
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={cn("p-3 rounded-xl", action.color)}>
                <Icon className="w-6 h-6" />
              </div>
              <span className='text-xs font-medium text-foreground'>
                {action.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Bill Payments */}
      <div className='section-card'>
        <h3 className='text-sm font-semibold text-muted-foreground mb-4'>
          Pay Bills
        </h3>
        <div className='flex gap-4 overflow-x-auto hide-scrollbar pb-2'>
          {billActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.label}
                to={action.path}
                className="flex flex-col items-center gap-2 min-w-20 p-3 rounded-xl hover:bg-secondary transition-colors"
              >
                <div className='p-3 rounded-full bg-secondary'>
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className='text-xs font-medium text-foreground'>
                  {action.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default QuickActions