
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";
import { categories } from "@/lib/data";

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tools?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="pt-32 pb-10 md:pt-36 md:pb-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 animate-fade-in">
            Discover the <span className="text-primary">tools</span> behind winning esports trophies
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
            Explore data analysis tools for various titles like Valorant, CS2, Dota 2, and League of Legends 
            that help players and teams gain competitive advantages.
          </p>
          
          <form 
            onSubmit={handleSearch}
            className="mt-6 flex items-center max-w-md mx-auto animate-fade-in-delayed"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search tools..."
                className="pl-10 rounded-r-none border-r-0 h-12 bg-background/70"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit" className="rounded-l-none h-12 px-6 shadow-md">
              Search
            </Button>
          </form>
          
          <div className="mt-10 animate-fade-in-delayed">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.slice(0, 5).map((category) => (
                <Button 
                  key={category.name}
                  variant="outline" 
                  className="text-sm gap-2 hover-scale bg-background/50 backdrop-blur-sm border-primary/10"
                  onClick={() => navigate(`/tools?category=${encodeURIComponent(category.name)}`)}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="mt-8 animate-fade-in-delayed">
            <Button 
              variant="ghost" 
              className="text-primary hover:text-primary/90 group space-x-1"
              onClick={() => navigate("/tools")}
            >
              <span>View all tools</span>
              <ArrowRight className="h-4 w-4 inline-block transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
