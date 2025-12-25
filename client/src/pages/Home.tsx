/* Neo-Surrealist Digital Expressionism
   Diagonal flow architecture with liquid animations
   Deep oceanic blues → warm golden ochres */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { novelData } from "@/lib/novelData";
import { Search, Book, User, Clock } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "wouter";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return novelData.chapters;
    
    const query = searchQuery.toLowerCase();
    return novelData.chapters.filter(
      chapter =>
        chapter.title.toLowerCase().includes(query) ||
        chapter.content.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Diagonal Cut */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[oklch(0.98_0.005_240)] to-[oklch(0.92_0.01_240)]">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[oklch(0.45_0.15_240)] opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-[oklch(0.65_0.10_60)] opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Cover Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-[oklch(0.45_0.15_240)] to-[oklch(0.65_0.10_60)] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
              <img
                src={novelData.coverImage}
                alt={novelData.title}
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            
            {/* Right: Title and Description */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-display text-6xl lg:text-7xl font-bold text-[oklch(0.25_0.02_240)] leading-tight">
                  {novelData.title}
                </h1>
                <p className="font-accent text-2xl text-[oklch(0.50_0.03_240)] tracking-wide">
                  By {novelData.author}
                </p>
              </div>
              
              <p className="text-lg text-[oklch(0.40_0.02_240)] leading-relaxed max-w-xl">
                A philosophical journey through time, memory, and transformation. Follow Kai, a being of melting clockwork, as it navigates a surreal landscape to confront the Chronitect at the source of the river of time.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="font-accent text-lg px-8 py-6 rounded-2xl bg-[oklch(0.45_0.15_240)] hover:bg-[oklch(0.50_0.14_240)] text-[oklch(0.98_0.01_90)] shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => document.getElementById('chapters')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Book className="mr-2" />
                  Start Reading
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="font-accent text-lg px-8 py-6 rounded-2xl border-2 border-[oklch(0.45_0.15_240)] text-[oklch(0.45_0.15_240)] hover:bg-[oklch(0.45_0.15_240)] hover:text-[oklch(0.98_0.01_90)] transition-all duration-300"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <User className="mr-2" />
                  About Author
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Diagonal Cut */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[oklch(0.98_0.005_240)]" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
      </section>

      {/* Search Section */}
      <section className="py-20 bg-[oklch(0.98_0.005_240)]">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[oklch(0.50_0.03_240)] w-6 h-6" />
              <Input
                type="text"
                placeholder="Search chapters and content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-16 pr-6 py-7 text-lg rounded-2xl border-2 border-[oklch(0.88_0.01_240)] focus:border-[oklch(0.45_0.15_240)] transition-colors duration-300"
              />
            </div>
            {searchQuery && (
              <p className="mt-4 text-[oklch(0.50_0.03_240)] text-center">
                Found {filteredChapters.length} {filteredChapters.length === 1 ? 'chapter' : 'chapters'}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Chapters Section with Diagonal Cut */}
      <section id="chapters" className="diagonal-cut-top py-32 bg-gradient-to-b from-[oklch(0.94_0.008_240)] to-[oklch(0.98_0.005_240)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-bold text-[oklch(0.25_0.02_240)] mb-4">
              Chapters
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[oklch(0.45_0.15_240)] to-[oklch(0.65_0.10_60)] mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredChapters.map((chapter, index) => (
              <Link key={chapter.id} href={`/chapter/${chapter.id}`}>
                <Card className="group relative overflow-hidden p-8 rounded-3xl border-2 border-[oklch(0.88_0.01_240)] hover:border-[oklch(0.45_0.15_240)] bg-[oklch(0.99_0.003_240)] hover:shadow-2xl transition-all duration-500 cursor-pointer h-full">
                  {/* Decorative Number */}
                  <div className="absolute -top-4 -right-4 font-accent text-[120px] font-bold text-[oklch(0.45_0.15_240)] opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    {chapter.id}
                  </div>
                  
                  <div className="relative space-y-4">
                    <div className="flex items-center gap-3 text-[oklch(0.50_0.03_240)]">
                      <Clock className="w-5 h-5" />
                      <span className="font-accent text-sm tracking-wider">Chapter {chapter.id}</span>
                    </div>
                    
                    <h3 className="font-display text-2xl font-bold text-[oklch(0.25_0.02_240)] liquid-text">
                      {chapter.title}
                    </h3>
                    
                    <p className="text-[oklch(0.50_0.03_240)] line-clamp-3 leading-relaxed">
                      {chapter.content.substring(0, 150)}...
                    </p>
                    
                    <div className="pt-4">
                      <span className="inline-flex items-center gap-2 text-[oklch(0.45_0.15_240)] font-accent font-semibold group-hover:gap-4 transition-all duration-300">
                        Read Chapter
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          
          {filteredChapters.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[oklch(0.50_0.03_240)] text-xl">
                No chapters found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About Author Section with Background */}
      <section id="about" className="diagonal-cut-bottom py-32 relative overflow-hidden bg-gradient-to-br from-[oklch(0.92_0.01_240)] to-[oklch(0.88_0.01_240)]">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/about-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-5xl font-bold text-[oklch(0.25_0.02_240)] mb-4">
                About the Author
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[oklch(0.45_0.15_240)] to-[oklch(0.65_0.10_60)] mx-auto rounded-full" />
            </div>
            
            <Card className="p-12 rounded-3xl bg-[oklch(0.99_0.003_240)]/90 backdrop-blur-sm border-2 border-[oklch(0.88_0.01_240)] shadow-2xl">
              <div className="space-y-6">
                <h3 className="font-accent text-3xl font-bold text-[oklch(0.25_0.02_240)]">
                  {novelData.author}
                </h3>
                <p className="text-lg text-[oklch(0.40_0.02_240)] leading-relaxed">
                  {novelData.aboutAuthor}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[oklch(0.98_0.005_240)] border-t border-[oklch(0.88_0.01_240)]">
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
