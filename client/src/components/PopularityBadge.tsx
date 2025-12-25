/* Neo-Surrealist Digital Expressionism
   Popularity badge for most-read chapters */

import { TrendingUp, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface PopularityBadgeProps {
  rank?: number;
  views?: number;
  className?: string;
  variant?: "compact" | "full";
}

export default function PopularityBadge({ 
  rank, 
  views, 
  className,
  variant = "compact" 
}: PopularityBadgeProps) {
  
  if (!rank && !views) return null;

  const getBadgeColor = (rank?: number) => {
    if (!rank) return "bg-[oklch(0.75_0.08_240)]";
    if (rank === 1) return "bg-gradient-to-r from-[oklch(0.75_0.15_45)] to-[oklch(0.70_0.18_35)]"; // Gold
    if (rank === 2) return "bg-gradient-to-r from-[oklch(0.75_0.05_240)] to-[oklch(0.70_0.08_240)]"; // Silver
    if (rank === 3) return "bg-gradient-to-r from-[oklch(0.65_0.10_30)] to-[oklch(0.60_0.12_25)]"; // Bronze
    return "bg-[oklch(0.75_0.08_240)]";
  };

  const getRankLabel = (rank?: number) => {
    if (!rank) return "Popular";
    if (rank === 1) return "Most Read";
    if (rank === 2) return "#2 Most Read";
    if (rank === 3) return "#3 Most Read";
    return `#${rank} Popular`;
  };

  if (variant === "compact") {
    return (
      <div 
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-accent font-semibold text-white shadow-md",
          getBadgeColor(rank),
          className
        )}
      >
        <TrendingUp className="w-3 h-3" />
        <span>{getRankLabel(rank)}</span>
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-accent font-semibold text-white shadow-lg",
        getBadgeColor(rank),
        className
      )}
    >
      <TrendingUp className="w-4 h-4" />
      <div className="flex flex-col items-start">
        <span>{getRankLabel(rank)}</span>
        {views !== undefined && views > 0 && (
          <span className="text-xs opacity-90 flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {views.toLocaleString()} {views === 1 ? 'view' : 'views'}
          </span>
        )}
      </div>
    </div>
  );
}
