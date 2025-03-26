import { Link } from "react-router-dom";
import { Twitter, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center py-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Made with <Heart className="h-3.5 w-3.5 text-[#FF4654] fill-[#FF4654]" /> by 
            <a 
              href="https://x.com/FlynVAL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline"
            >
              Flynn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
