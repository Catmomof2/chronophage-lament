/* Neo-Surrealist Digital Expressionism
   Immersive reading experience with liquid transitions
   Deep oceanic blues → warm golden ochres */

import { Button } from "@/components/ui/button";
import { novelData } from "@/lib/novelData";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import TableOfContents from "@/components/TableOfContents";
import ShareButton from "@/components/ShareButton";
import MetaTags from "@/components/MetaTags";
import PopularityBadge from "@/components/PopularityBadge";
import ViewCounter from "@/components/ViewCounter";
import { useParams, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { trackChapterView, getChapterStats, getChapterRank } from "@/lib/analytics";

export default function ChapterPage() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const [viewCount, setViewCount] = useState(0);
  const [rank, setRank] = useState<number | null>(null);
  
  const chapterId = parseInt(id || "1");
  const chapter = novelData.chapters.find(c => c.id === chapterId);
  const currentIndex = novelData.chapters.findIndex(c => c.id === chapterId);
  const prevChapter = currentIndex > 0 ? novelData.chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < novelData.chapters.length - 1 ? novelData.chapters[currentIndex + 1] : null;

  // Track view and update analytics
  useEffect(() => {
    if (chapterId) {
      // Track the view
      trackChapterView(chapterId);
      
      // Update local state
      const stats = getChapterStats(chapterId);
      setViewCount(stats.views);
      setRank(getChapterRank(chapterId));
    }
  }, [chapterId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [chapterId]);

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[oklch(0.98_0.005_240)]">
        <div className="text-center space-y-6">
          <h1 className="font-display text-4xl font-bold text-[oklch(0.25_0.02_240)]">
            Chapter Not Found
          </h1>
          <Button 
            onClick={() => setLocation("/")}
            className="font-accent bg-[oklch(0.45_0.15_240)] hover:bg-[oklch(0.50_0.14_240)] text-[oklch(0.98_0.01_90)]"
          >
            <Home className="mr-2" />
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[oklch(0.98_0.005_240)] to-[oklch(0.94_0.008_240)]">
      <MetaTags
        title={`${chapter.title} - The Chronophage's Lament`}
        description={chapter.content.substring(0, 200) + '...'}
        url={`${window.location.origin}/chapter/${chapterId}`}
      />
      
      {/* Header with Navigation */}
      <header className="sticky top-0 z-50 bg-[oklch(0.99_0.003_240)]/80 backdrop-blur-lg border-b border-[oklch(0.88_0.01_240)] shadow-sm">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => setLocation("/")}
              className="font-accent text-[oklch(0.45_0.15_240)] hover:text-[oklch(0.50_0.14_240)] hover:bg-[oklch(0.94_0.008_240)]"
            >
              <Home className="mr-2" />
              Home
            </Button>
            
            <div className="font-accent text-sm text-[oklch(0.50_0.03_240)] tracking-wider">
              Chapter {chapter.id} of {novelData.chapters.length}
            </div>
            
            <div className="flex items-center gap-2">
              <ShareButton 
                chapterId={chapterId} 
                chapterTitle={chapter.title}
                variant="ghost"
              />
              <TableOfContents currentChapterId={chapterId} />
            </div>
          </div>
        </div>
      </header>

      {/* Chapter Content */}
      <article className="py-16">
        <div className="container max-w-4xl">
          {/* Chapter Header */}
          <div className="mb-16 text-center space-y-6">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="font-accent text-sm text-[oklch(0.50_0.03_240)] tracking-[0.3em] uppercase">
                  Chapter {chapter.id}
                </div>
                {rank && rank <= 3 && (
                  <PopularityBadge rank={rank} views={viewCount} />
                )}
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-[oklch(0.25_0.02_240)] mb-4 liquid-text">
                {chapter.title}
              </h1>
              {viewCount > 0 && (
                <ViewCounter views={viewCount} className="justify-center mb-6" />
              )}
              <div className="w-24 h-1 bg-gradient-to-r from-[oklch(0.45_0.15_240)] to-[oklch(0.65_0.10_60)] mx-auto rounded-full" />
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="mb-12 flex justify-center">
            <img 
              src="/images/chapter-divider.png" 
              alt="" 
              className="w-full max-w-2xl opacity-60"
            />
          </div>

          {/* Chapter Text */}
          <div className="prose prose-lg max-w-none">
            {chapter.content.split('\n\n').map((paragraph, index) => (
              <p 
                key={index} 
                className="mb-8 text-[oklch(0.30_0.02_240)] leading-relaxed text-lg first-letter:font-display first-letter:text-7xl first-letter:font-bold first-letter:text-[oklch(0.45_0.15_240)] first-letter:float-left first-letter:mr-3 first-letter:leading-[0.8]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Decorative Divider */}
          <div className="my-16 flex justify-center">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663262892493/4dPsFenJ89qK3sxRBC443S/chapter-divider_caa2d817.png" 
              alt="" 
              className="w-full max-w-2xl opacity-60 transform rotate-180"
            />
          </div>

          {/* Share Section */}
          <div className="mt-16 pt-12 border-t border-[oklch(0.88_0.01_240)]">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[oklch(0.94_0.008_240)]">
                <span className="font-accent text-[oklch(0.50_0.03_240)]">Enjoyed this chapter?</span>
                <ShareButton 
                  chapterId={chapterId} 
                  chapterTitle={chapter.title}
                  variant="default"
                  size="sm"
                />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8">
            <div className="flex justify-between items-center gap-4">
              {prevChapter ? (
                <Button
                  onClick={() => setLocation(`/chapter/${prevChapter.id}`)}
                  size="lg"
                  variant="outline"
                  className="font-accent flex-1 md:flex-none px-8 py-6 rounded-2xl border-2 border-[oklch(0.45_0.15_240)] text-[oklch(0.45_0.15_240)] hover:bg-[oklch(0.45_0.15_240)] hover:text-[oklch(0.98_0.01_90)] transition-all duration-300"
                >
                  <ArrowLeft className="mr-2" />
                  <span className="hidden md:inline">Previous: </span>
                  <span className="md:hidden">Prev</span>
                  <span className="hidden md:inline ml-1">{prevChapter.title}</span>
                </Button>
              ) : (
                <div className="flex-1 md:flex-none" />
              )}

              <Button
                onClick={() => setLocation("/")}
                size="lg"
                className="font-accent px-8 py-6 rounded-2xl bg-[oklch(0.45_0.15_240)] hover:bg-[oklch(0.50_0.14_240)] text-[oklch(0.98_0.01_90)] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Home className="mr-2" />
                All Chapters
              </Button>

              {nextChapter ? (
                <Button
                  onClick={() => setLocation(`/chapter/${nextChapter.id}`)}
                  size="lg"
                  variant="outline"
                  className="font-accent flex-1 md:flex-none px-8 py-6 rounded-2xl border-2 border-[oklch(0.45_0.15_240)] text-[oklch(0.45_0.15_240)] hover:bg-[oklch(0.45_0.15_240)] hover:text-[oklch(0.98_0.01_90)] transition-all duration-300"
                >
                  <span className="hidden md:inline mr-1">Next: </span>
                  <span className="md:hidden">Next</span>
                  <span className="hidden md:inline">{nextChapter.title}</span>
                  <ArrowRight className="ml-2" />
                </Button>
              ) : (
                <div className="flex-1 md:flex-none" />
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-12 bg-[oklch(0.98_0.005_240)] border-t border-[oklch(0.88_0.01_240)] mt-16">
        <div className="container">
          <div className="text-center space-y-4">
            <p className="font-display text-2xl font-bold text-[oklch(0.25_0.02_240)]">
              {novelData.title}
            </p>
            <p className="text-[oklch(0.50_0.03_240)]">
              © 2024 {novelData.author}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
