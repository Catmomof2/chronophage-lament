/* Neo-Surrealist Digital Expressionism
   Share button with social media integration */

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Share2, Link2, Twitter, Facebook, Mail, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ShareButtonProps {
  chapterId: number;
  chapterTitle: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export default function ShareButton({ 
  chapterId, 
  chapterTitle, 
  variant = "outline",
  size = "default" 
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = `${window.location.origin}/chapter/${chapterId}`;
  const shareText = `Check out "${chapterTitle}" from The Chronophage's Lament by Amanda Hines`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  const shareViaEmail = () => {
    const subject = encodeURIComponent(`The Chronophage's Lament - ${chapterTitle}`);
    const body = encodeURIComponent(`${shareText}\n\n${shareUrl}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `The Chronophage's Lament - ${chapterTitle}`,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or error occurred
        console.log('Share cancelled');
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant={variant} 
          size={size}
          className="font-accent"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-[oklch(0.99_0.003_240)]">
        <DropdownMenuLabel className="font-display text-[oklch(0.25_0.02_240)]">
          Share Chapter
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          onClick={copyToClipboard}
          className="cursor-pointer font-accent"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2 text-green-600" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Link2 className="w-4 h-4 mr-2" />
              <span>Copy Link</span>
            </>
          )}
        </DropdownMenuItem>

        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={nativeShare}
              className="cursor-pointer font-accent"
            >
              <Share2 className="w-4 h-4 mr-2" />
              <span>Share...</span>
            </DropdownMenuItem>
          </>
        )}

        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          onClick={shareToTwitter}
          className="cursor-pointer font-accent"
        >
          <Twitter className="w-4 h-4 mr-2" />
          <span>Share on Twitter</span>
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={shareToFacebook}
          className="cursor-pointer font-accent"
        >
          <Facebook className="w-4 h-4 mr-2" />
          <span>Share on Facebook</span>
        </DropdownMenuItem>

        <DropdownMenuItem 
          onClick={shareViaEmail}
          className="cursor-pointer font-accent"
        >
          <Mail className="w-4 h-4 mr-2" />
          <span>Share via Email</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
