/* Reading Analytics System
   Tracks chapter views and calculates popularity */

export interface ChapterStats {
  chapterId: number;
  views: number;
  lastViewed?: Date;
}

const STORAGE_KEY = 'chronophage_analytics';

// Get all chapter statistics from localStorage
export function getAllChapterStats(): ChapterStats[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading analytics:', error);
    return [];
  }
}

// Get statistics for a specific chapter
export function getChapterStats(chapterId: number): ChapterStats {
  const allStats = getAllChapterStats();
  const stats = allStats.find(s => s.chapterId === chapterId);
  return stats || { chapterId, views: 0 };
}

// Track a chapter view
export function trackChapterView(chapterId: number): void {
  try {
    const allStats = getAllChapterStats();
    const existingIndex = allStats.findIndex(s => s.chapterId === chapterId);
    
    if (existingIndex >= 0) {
      allStats[existingIndex].views += 1;
      allStats[existingIndex].lastViewed = new Date();
    } else {
      allStats.push({
        chapterId,
        views: 1,
        lastViewed: new Date()
      });
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allStats));
  } catch (error) {
    console.error('Error tracking view:', error);
  }
}

// Get the most popular chapters (sorted by views)
export function getMostPopularChapters(limit: number = 3): ChapterStats[] {
  const allStats = getAllChapterStats();
  return allStats
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

// Check if a chapter is in the top N most popular
export function isPopularChapter(chapterId: number, topN: number = 3): boolean {
  const popular = getMostPopularChapters(topN);
  return popular.some(s => s.chapterId === chapterId);
}

// Get total views across all chapters
export function getTotalViews(): number {
  const allStats = getAllChapterStats();
  return allStats.reduce((sum, stat) => sum + stat.views, 0);
}

// Get popularity rank for a chapter (1 = most popular)
export function getChapterRank(chapterId: number): number | null {
  const allStats = getAllChapterStats();
  if (allStats.length === 0) return null;
  
  const sorted = [...allStats].sort((a, b) => b.views - a.views);
  const rank = sorted.findIndex(s => s.chapterId === chapterId);
  return rank >= 0 ? rank + 1 : null;
}

// Get percentage of total views for a chapter
export function getChapterViewPercentage(chapterId: number): number {
  const total = getTotalViews();
  if (total === 0) return 0;
  
  const stats = getChapterStats(chapterId);
  return Math.round((stats.views / total) * 100);
}
