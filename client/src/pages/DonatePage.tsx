/* Neo-Surrealist Digital Expressionism
   Donation page supporting Amanda's writing and kitties
   Deep oceanic blues → warm golden ochres */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Home, Heart, Coffee, Cat, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { toast } from "sonner";

export default function DonatePage() {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const presetAmounts = [5, 10, 25, 50, 100];

  const handleDonate = (amount: number) => {
    // In a real implementation, this would integrate with a payment processor
    toast.success(`Thank you for your ${amount > 0 ? `$${amount}` : 'generous'} donation! 🐱💕`, {
      description: "Your support helps keep the kitties fed and the stories flowing."
    });
  };

  const handleCustomDonate = () => {
    const amount = parseFloat(customAmount);
    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    handleDonate(amount);
    setCustomAmount("");
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
              Support Amanda's Work
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
              <Heart className="w-6 h-6 text-[oklch(0.60_0.15_20)] animate-pulse" />
              <span className="font-accent text-sm tracking-wider text-[oklch(0.45_0.15_240)] uppercase">
                Support the Author
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-[oklch(0.25_0.02_240)] liquid-text">
              Help Keep the Stories Flowing
            </h1>

            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-[oklch(0.40_0.03_240)] leading-relaxed">
                Your donations help keep my kitties fed and also support the tools to publish my work.
              </p>
              <p className="text-lg text-[oklch(0.50_0.03_240)] leading-relaxed">
                Every contribution, no matter how small, makes a difference in allowing me to continue crafting stories that explore the surreal, the philosophical, and the beautifully strange.
              </p>
            </div>

            {/* Decorative cats */}
            <div className="flex items-center justify-center gap-4 text-4xl opacity-70">
              <Cat className="w-12 h-12 text-[oklch(0.45_0.15_240)] animate-bounce" style={{ animationDelay: '0s' }} />
              <Heart className="w-8 h-8 text-[oklch(0.60_0.15_20)]" />
              <Cat className="w-12 h-12 text-[oklch(0.45_0.15_240)] animate-bounce" style={{ animationDelay: '0.2s' }} />
              <Heart className="w-8 h-8 text-[oklch(0.60_0.15_20)]" />
              <Cat className="w-12 h-12 text-[oklch(0.45_0.15_240)] animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>

          {/* Donation Options */}
          <Card className="p-8 md:p-12 bg-[oklch(0.99_0.003_240)] border-[oklch(0.88_0.01_240)] shadow-2xl">
            <div className="space-y-8">
              {/* Preset Amounts */}
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-[oklch(0.25_0.02_240)] text-center mb-6">
                  Choose an Amount
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {presetAmounts.map((amount) => (
                    <Button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        handleDonate(amount);
                      }}
                      className={`h-24 text-2xl font-bold font-accent transition-all duration-300 ${
                        selectedAmount === amount
                          ? 'bg-gradient-to-br from-[oklch(0.45_0.15_240)] to-[oklch(0.50_0.14_240)] text-white scale-105 shadow-xl'
                          : 'bg-gradient-to-br from-[oklch(0.92_0.01_240)] to-[oklch(0.88_0.01_240)] text-[oklch(0.45_0.15_240)] hover:scale-105 hover:shadow-lg'
                      }`}
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 justify-center">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[oklch(0.88_0.01_240)] to-transparent" />
                  <span className="font-accent text-sm text-[oklch(0.50_0.03_240)] tracking-wider uppercase">
                    Or Enter Custom Amount
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[oklch(0.88_0.01_240)] to-transparent" />
                </div>

                <div className="flex gap-3 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[oklch(0.45_0.15_240)] font-bold text-xl">
                      $
                    </span>
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="pl-8 h-14 text-xl font-accent border-[oklch(0.88_0.01_240)] focus:border-[oklch(0.45_0.15_240)]"
                      min="0"
                      step="0.01"
                    />
                  </div>
                  <Button
                    onClick={handleCustomDonate}
                    className="h-14 px-8 font-accent font-semibold bg-gradient-to-r from-[oklch(0.45_0.15_240)] to-[oklch(0.50_0.14_240)] hover:from-[oklch(0.50_0.14_240)] hover:to-[oklch(0.55_0.13_240)] text-white shadow-lg"
                  >
                    Donate
                  </Button>
                </div>
              </div>

              {/* What Your Support Does */}
              <div className="mt-12 space-y-6">
                <h3 className="font-display text-xl font-bold text-[oklch(0.25_0.02_240)] text-center">
                  What Your Support Provides
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-3 p-6 rounded-xl bg-gradient-to-br from-[oklch(0.96_0.01_240)] to-[oklch(0.94_0.01_240)]">
                    <Cat className="w-12 h-12 mx-auto text-[oklch(0.45_0.15_240)]" />
                    <h4 className="font-accent font-semibold text-[oklch(0.30_0.02_240)]">
                      Happy Kitties
                    </h4>
                    <p className="text-sm text-[oklch(0.50_0.03_240)]">
                      Keeps my feline companions well-fed and purring
                    </p>
                  </div>

                  <div className="text-center space-y-3 p-6 rounded-xl bg-gradient-to-br from-[oklch(0.96_0.01_240)] to-[oklch(0.94_0.01_240)]">
                    <Coffee className="w-12 h-12 mx-auto text-[oklch(0.45_0.15_240)]" />
                    <h4 className="font-accent font-semibold text-[oklch(0.30_0.02_240)]">
                      Writing Fuel
                    </h4>
                    <p className="text-sm text-[oklch(0.50_0.03_240)]">
                      Coffee, tea, and quiet time to craft new stories
                    </p>
                  </div>

                  <div className="text-center space-y-3 p-6 rounded-xl bg-gradient-to-br from-[oklch(0.96_0.01_240)] to-[oklch(0.94_0.01_240)]">
                    <Sparkles className="w-12 h-12 mx-auto text-[oklch(0.45_0.15_240)]" />
                    <h4 className="font-accent font-semibold text-[oklch(0.30_0.02_240)]">
                      Publishing Tools
                    </h4>
                    <p className="text-sm text-[oklch(0.50_0.03_240)]">
                      Software, hosting, and resources to share my work
                    </p>
                  </div>
                </div>
              </div>

              {/* Thank You Message */}
              <div className="text-center pt-8 border-t border-[oklch(0.88_0.01_240)]">
                <p className="text-[oklch(0.45_0.03_240)] italic">
                  "Every story begins with a single word, and every journey begins with a single step. Thank you for walking this path with me."
                </p>
                <p className="mt-3 font-accent text-[oklch(0.50_0.03_240)]">
                  — Amanda Hines
                </p>
              </div>
            </div>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-sm text-[oklch(0.50_0.03_240)]">
              All donations are processed securely. You'll receive a confirmation email after your contribution.
            </p>
            <Link href="/">
              <Button 
                variant="outline"
                className="font-accent border-[oklch(0.45_0.15_240)] text-[oklch(0.45_0.15_240)] hover:bg-[oklch(0.45_0.15_240)] hover:text-white"
              >
                Return to The Chronophage's Lament
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
