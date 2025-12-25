/* Neo-Surrealist Digital Expressionism
   Elegant table of contents with liquid transitions */

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { novelData } from "@/lib/novelData";
import { BookOpen, Clock } from "lucide-react";
import { useLocation } from "wouter";

interface TableOfContentsProps {
  currentChapterId?: number;
}

export default function TableOfContents({ currentChapterId }: TableOfContentsProps) {
  const [, setLocation] = useLocation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline"
          size="lg"
          className="font-accent px-6 py-6 rounded-2xl border-2 border-[oklch(0.45_0.15_240)] text-[oklch(0.45_0.15_240)] hover:bg-[oklch(0.45_0.15_240)] hover:text-[oklch(0.98_0.01_90)] transition-all duration-300"
        >
          <BookOpen className="mr-2" />
          Table of Contents
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-lg bg-[oklch(0.99_0.003_240)]">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-display text-3xl text-[oklch(0.25_0.02_240)]">
            Table of Contents
          </SheetTitle>
          <div className="w-24 h-1 bg-gradient-to-r from-[oklch(0.45_0.15_240)] to-[oklch(0.65_0.10_60)] rounded-full" />
        </SheetHeader>
        
        <ScrollArea className="h-[calc(100vh-120px)] pr-4">
          <div className="space-y-3">
            {novelData.chapters.map((chapter) => {
              const isCurrent = chapter.id === currentChapterId;
              
              return (
                <button
                  key={chapter.id}
                  onClick={() => {
                    setLocation(`/chapter/${chapter.id}`);
                  }}
                  className={`
                    w-full text-left p-5 rounded-2xl transition-all duration-300
                    ${isCurrent 
                      ? 'bg-[oklch(0.45_0.15_240)] text-[oklch(0.98_0.01_90)] shadow-lg' 
                      : 'bg-[oklch(0.94_0.008_240)] hover:bg-[oklch(0.88_0.01_240)] text-[oklch(0.25_0.02_240)]'
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div className={`
                      flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-accent text-xl font-bold
                      ${isCurrent 
                        ? 'bg-[oklch(0.98_0.01_90)]/20 text-[oklch(0.98_0.01_90)]' 
                        : 'bg-[oklch(0.45_0.15_240)]/10 text-[oklch(0.45_0.15_240)]'
                      }
                    `}>
                      {chapter.id}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className={`
                        flex items-center gap-2 mb-2 text-xs tracking-wider uppercase
                        ${isCurrent ? 'text-[oklch(0.98_0.01_90)]/70' : 'text-[oklch(0.50_0.03_240)]'}
                      `}>
                        <Clock className="w-3 h-3" />
                        <span>Chapter {chapter.id}</span>
                      </div>
                      
                      <h3 className={`
                        font-display text-lg font-bold mb-2
                        ${isCurrent ? 'text-[oklch(0.98_0.01_90)]' : 'text-[oklch(0.25_0.02_240)]'}
                      `}>
                        {chapter.title}
                      </h3>
                      
                      <p className={`
                        text-sm line-clamp-2 leading-relaxed
                        ${isCurrent ? 'text-[oklch(0.98_0.01_90)]/80' : 'text-[oklch(0.50_0.03_240)]'}
                      `}>
                        {chapter.content.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
