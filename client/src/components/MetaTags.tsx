/* Dynamic meta tags for social media sharing */

import { useEffect } from "react";

interface MetaTagsProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: string;
}

export default function MetaTags({ 
  title, 
  description, 
  image = "/images/cover.jpg",
  url,
  type = "article" 
}: MetaTagsProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (property: string, content: string, isName = false) => {
      const attribute = isName ? 'name' : 'property';
      let element = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.content = content;
    };

    // Open Graph tags
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:image', `${window.location.origin}${image}`);
    setMetaTag('og:url', url);
    setMetaTag('og:type', type);
    setMetaTag('og:site_name', "The Chronophage's Lament");

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:title', title, true);
    setMetaTag('twitter:description', description, true);
    setMetaTag('twitter:image', `${window.location.origin}${image}`, true);

    // Standard meta tags
    setMetaTag('description', description, true);

    // Cleanup function to reset to default on unmount
    return () => {
      document.title = "The Chronophage's Lament";
    };
  }, [title, description, image, url, type]);

  return null; // This component doesn't render anything
}
