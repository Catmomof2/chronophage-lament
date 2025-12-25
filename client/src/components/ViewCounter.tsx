/* Neo-Surrealist Digital Expressionism
   View counter display component */

import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface ViewCounterProps {
  views: number;
  className?: string;
  showIcon?: boolean;
}

export default function ViewCounter({ 
  views, 
  className,
  showIcon = true 
}: ViewCounterProps) {
  
  if (views === 0) return null;

  return (
    <div 
      className={cn(
        "inline-flex items-center gap-1.5 text-[oklch(0.50_0.03_240)] font-accent text-sm",
        className
      )}
    >
      {showIcon && <Eye className="w-4 h-4" />}
      <span>{views.toLocaleString()} {views === 1 ? 'view' : 'views'}</span>
    </div>
  );
}
