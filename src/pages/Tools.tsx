import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ToolGrid } from "@/components/ToolGrid";
import { tools, Game, ToolCategory } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Tools = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useState<{
    search?: string;
    game?: Game;
    category?: ToolCategory;
  }>({});
  
  // Extract search parameters when location changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    
    setSearchParams({
      search: params.get("search")?.trim() || undefined,
      game: params.get("game") as Game || undefined,
      category: params.get("category") as ToolCategory || undefined,
    });
  }, [location.search]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Background decorations */}
          <div className="fixed top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="fixed bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 mt-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold mb-1">
                Esports Analytics Directory
              </h1>
              <p className="text-sm text-muted-foreground max-w-xl">
                Discover tools that help players and teams gain competitive advantages
              </p>
            </div>
          </div>
          
          <ToolGrid 
            tools={tools} 
            initialGame={searchParams.game}
            initialCategory={searchParams.category}
            initialSearch={searchParams.search}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tools;
