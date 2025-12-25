/* Neo-Surrealist Digital Expressionism
   Newsletter archive and subscription page */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Home, Mail, Sparkles, BookOpen, Coffee, Cat } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { toast } from "sonner";

interface Newsletter {
  id: string;
  month: string;
  year: number;
  title: string;
  excerpt: string;
  date: string;
}

// Sample newsletter archive
const newsletters: Newsletter[] = [
  {
    id: "2026-01",
    month: "January",
    year: 2026,
    title: "New Beginnings and Temporal Reflections",
    excerpt: "As we step into the new year, I find myself reflecting on the nature of time itself—a theme that has woven through every page of The Chronophage's Lament...",
    date: "2026-01-01",
  },
];

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);
    
    // Simulate subscription
    setTimeout(() => {
      toast.success("Welcome to the newsletter!", {
        description: "You'll receive monthly updates from Amanda Hines.",
      });
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[oklch(0.98_0.005_240)] to-[oklch(0.94_0.008_240)]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[oklch(0.98_0.005_240)]/80 border-b border-[oklch(0.88_0.01_240)] shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            <Link href="/">
              <Button 
                variant="ghost" 
                className="font-accent text-[oklch(0.45_0.15_240)] hover:text-[oklch(0.50_0.14_240)] hover:bg-[oklch(0.92_0.01_240)]"
              >
                <Home className="mr-2 w-5 h-5" />
                Home
              </Button>
            </Link>
            
            <div className="font-accent text-sm text-[oklch(0.50_0.03_240)] tracking-wider">
              Monthly Newsletter
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[oklch(0.95_0.02_240)] to-[oklch(0.92_0.03_60)] rounded-full shadow-lg">
              <Mail className="w-6 h-6 text-[oklch(0.45_0.15_240)]" />
              <span className="font-accent text-sm tracking-wider text-[oklch(0.45_0.15_240)] uppercase">
                Monthly Newsletter
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-[oklch(0.25_0.02_240)] liquid-text">
              Stay Connected
            </h1>

            <p className="text-xl text-[oklch(0.40_0.03_240)] leading-relaxed max-w-2xl mx-auto">
              Join Amanda's monthly newsletter for exclusive writing updates, behind-the-scenes insights, 
              and early previews of upcoming work.
            </p>
          </div>

          {/* Subscription Card */}
          <Card className="p-8 md:p-12 bg-[oklch(0.99_0.003_240)] border-[oklch(0.88_0.01_240)] shadow-2xl mb-16">
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <h2 className="font-display text-3xl font-bold text-[oklch(0.25_0.02_240)]">
                  Subscribe to the Newsletter
                </h2>
                <p className="text-[oklch(0.50_0.03_240)]">
                  Receive monthly updates directly in your inbox
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-14 text-lg border-[oklch(0.88_0.01_240)] focus:border-[oklch(0.45_0.15_240)]"
                    disabled={isSubscribing}
                  />
                  <Button
                    type="submit"
                    disabled={isSubscribing}
                    className="h-14 px-8 font-accent font-semibold bg-gradient-to-r from-[oklch(0.45_0.15_240)] to-[oklch(0.50_0.14_240)] hover:from-[oklch(0.50_0.14_240)] hover:to-[oklch(0.55_0.13_240)] text-white shadow-lg"
                  >
                    {isSubscribing ? "Subscribing..." : "Subscribe"}
                  </Button>
                </div>
              </form>

              {/* What to Expect */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3 p-6 rounded-xl bg-gradient-to-br from-[oklch(0.96_0.01_240)] to-[oklch(0.94_0.01_240)]">
                  <BookOpen className="w-12 h-12 mx-auto text-[oklch(0.45_0.15_240)]" />
                  <h3 className="font-accent font-semibold text-[oklch(0.30_0.02_240)]">
                    Writing Updates
                  </h3>
                  <p className="text-sm text-[oklch(0.50_0.03_240)]">
                    Progress on new projects and creative reflections
                  </p>
                </div>

                <div className="text-center space-y-3 p-6 rounded-xl bg-gradient-to-br from-[oklch(0.96_0.01_240)] to-[oklch(0.94_0.01_240)]">
                  <Coffee className="w-12 h-12 mx-auto text-[oklch(0.45_0.15_240)]" />
                  <h3 className="font-accent font-semibold text-[oklch(0.30_0.02_240)]">
                    Behind the Scenes
                  </h3>
                  <p className="text-sm text-[oklch(0.50_0.03_240)]">
                    Insights into the creative process and daily routine
                  </p>
                </div>

                <div className="text-center space-y-3 p-6 rounded-xl bg-gradient-to-br from-[oklch(0.96_0.01_240)] to-[oklch(0.94_0.01_240)]">
                  <Sparkles className="w-12 h-12 mx-auto text-[oklch(0.45_0.15_240)]" />
                  <h3 className="font-accent font-semibold text-[oklch(0.30_0.02_240)]">
                    Exclusive Previews
                  </h3>
                  <p className="text-sm text-[oklch(0.50_0.03_240)]">
                    Early access to excerpts from upcoming work
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Newsletter Archive */}
          <div className="space-y-8">
            <div className="text-center space-y-3">
              <h2 className="font-display text-3xl font-bold text-[oklch(0.25_0.02_240)]">
                Newsletter Archive
              </h2>
              <p className="text-[oklch(0.50_0.03_240)]">
                Browse past editions
              </p>
            </div>

            <div className="space-y-6">
              {newsletters.map((newsletter) => (
                <Card
                  key={newsletter.id}
                  className="p-8 bg-[oklch(0.99_0.003_240)] border-[oklch(0.88_0.01_240)] hover:shadow-xl transition-shadow"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="font-accent text-sm text-[oklch(0.50_0.03_240)] uppercase tracking-wider">
                          {newsletter.month} {newsletter.year}
                        </div>
                        <h3 className="font-display text-2xl font-bold text-[oklch(0.25_0.02_240)]">
                          {newsletter.title}
                        </h3>
                        <p className="text-[oklch(0.45_0.03_240)] leading-relaxed">
                          {newsletter.excerpt}
                        </p>
                      </div>
                      <Cat className="w-12 h-12 text-[oklch(0.45_0.15_240)] opacity-30 flex-shrink-0" />
                    </div>
                    
                    <Button
                      variant="outline"
                      className="font-accent border-[oklch(0.45_0.15_240)] text-[oklch(0.45_0.15_240)] hover:bg-[oklch(0.45_0.15_240)] hover:text-white"
                      onClick={() => {
                        window.open("/NEWSLETTER_TEMPLATE.html", "_blank");
                      }}
                    >
                      Read Full Newsletter
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Exclusive Wallpapers Promotion */}
          <Card className="mt-16 p-8 md:p-12 bg-gradient-to-br from-[oklch(0.45_0.15_240)] to-[oklch(0.50_0.14_240)] border-none shadow-2xl text-white">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-3 text-5xl">
                <Cat className="w-12 h-12" />
                <Sparkles className="w-10 h-10" />
                <Cat className="w-12 h-12" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Exclusive Subscriber Wallpapers
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Meet Luna, Kafka, and Dali—Amanda's three feline muses, immortalized in stunning surrealist digital art. 
                Download exclusive desktop wallpapers as a thank you for supporting her work.
              </p>
              <Link href="/wallpapers">
                <Button
                  size="lg"
                  className="bg-white text-[oklch(0.45_0.15_240)] hover:bg-white/90 font-accent font-semibold shadow-xl"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  View Exclusive Wallpapers
                </Button>
              </Link>
            </div>
          </Card>

          {/* Footer CTA */}
          <div className="mt-16 text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-4xl">
              <Cat className="w-10 h-10 text-[oklch(0.45_0.15_240)]" />
              <Sparkles className="w-8 h-8 text-[oklch(0.60_0.15_20)]" />
              <Cat className="w-10 h-10 text-[oklch(0.45_0.15_240)]" />
            </div>
            
            <p className="text-[oklch(0.45_0.03_240)] italic max-w-2xl mx-auto">
              "Every story begins with a single word, and every journey begins with a single step. 
              Thank you for walking this path with me."
            </p>
            <p className="font-accent text-[oklch(0.50_0.03_240)]">
              — Amanda Hines
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
