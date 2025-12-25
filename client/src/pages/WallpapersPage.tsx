import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { wallpapers } from "@/lib/wallpaperData";
import { Download, ArrowLeft, Sparkles, Cat } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

export default function WallpapersPage() {
  const handleDownload = (wallpaper: typeof wallpapers[0]) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = wallpaper.imagePath;
    link.download = `${wallpaper.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success(`Downloading ${wallpaper.title}!`, {
      description: "Thank you for supporting Amanda's work."
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50">
      {/* Header */}
      <header className="border-b border-slate-200/50 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Home
            </Button>
          </Link>
          <h1 className="text-xl font-serif font-bold text-slate-800">
            Exclusive Wallpapers
          </h1>
          <div className="w-24" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Subscriber Exclusive Content
            </div>
            <h1 className="text-5xl font-serif font-bold text-slate-900">
              Meet Luna, Kafka & Dali
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Amanda's three feline muses, immortalized in surrealist digital art. 
              Download these exclusive wallpapers as a thank you for supporting her work.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-500">
              <Cat className="w-5 h-5" />
              <Cat className="w-5 h-5" />
              <Cat className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Wallpapers Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12 max-w-5xl mx-auto">
            {wallpapers.map((wallpaper, index) => (
              <Card 
                key={wallpaper.id}
                className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Image */}
                  <div className="relative overflow-hidden bg-slate-100">
                    <img
                      src={wallpaper.imagePath}
                      alt={wallpaper.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700">
                      {wallpaper.resolution}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center space-y-4">
                    <div>
                      <div className="text-sm font-medium text-blue-600 mb-2">
                        {wallpaper.cat}
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-slate-900 mb-3">
                        {wallpaper.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {wallpaper.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-500 pt-2 border-t border-slate-200">
                      <span>Resolution: {wallpaper.resolution}</span>
                      <span>•</span>
                      <span>Size: {wallpaper.fileSize}</span>
                    </div>

                    <Button
                      onClick={() => handleDownload(wallpaper)}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md"
                      size="lg"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Wallpaper
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-amber-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-serif font-bold text-slate-900">
              Thank You for Your Support
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              These wallpapers are created exclusively for newsletter subscribers and supporters. 
              Your contributions help keep Luna, Kafka, and Dali fed, and support the tools Amanda 
              needs to continue creating surrealist literature that challenges and inspires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/newsletter">
                <Button variant="outline" size="lg">
                  Subscribe to Newsletter
                </Button>
              </Link>
              <Link href="/donate">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800">
                  Support Amanda's Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 bg-white">
        <div className="container text-center text-slate-500 text-sm">
          <p>© 2026 Amanda Hines. All wallpapers are exclusive content for supporters.</p>
        </div>
      </footer>
    </div>
  );
}
