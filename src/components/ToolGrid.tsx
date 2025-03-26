import { useState, useEffect } from "react";
import { Tool, Game, ToolCategory, PricingModel, categories } from "@/lib/data";
import { ToolCard } from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter, X, SlidersHorizontal, DollarSign, SortAsc } from "lucide-react";
import { Card } from "@/components/ui/card";

type SortOption = 'newest' | 'alphabetical';

interface ToolGridProps {
  tools: Tool[];
  initialGame?: Game;
  initialCategory?: ToolCategory;
  initialSearch?: string;
}

export function ToolGrid({ 
  tools, 
  initialGame,
  initialCategory,
  initialSearch = "" 
}: ToolGridProps) {
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedGame, setSelectedGame] = useState<Game | "All">(initialGame || "All");
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | "All">(initialCategory || "All");
  const [selectedPricing, setSelectedPricing] = useState<PricingModel | "All">("All");
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // List of available games
  const games: Array<Game | "All"> = ["All", "Valorant", "CSGO/2", "Dota", "League Of Legends", "APEX Legends", "Overwatch", "Rainbow Six", "Deadlock", "Rocket League"];
  
  // List of available pricing models
  const pricingModels: Array<PricingModel | "All"> = ["All", "Free", "Free Options",  "One-Time Purchase", "Subscription-Based","Open Source"];

  // Apply filters when dependencies change
  useEffect(() => {
    applyFilters();
    
    // Check if any filter is active
    setIsFilterActive(
      searchQuery !== "" || 
      selectedGame !== "All" || 
      selectedCategory !== "All" ||
      selectedPricing !== "All"
    );
  }, [searchQuery, selectedGame, selectedCategory, selectedPricing, sortOption, tools]);

  const applyFilters = () => {
    let results = [...tools];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(tool => 
        tool.name.toLowerCase().includes(query) || 
        tool.description.toLowerCase().includes(query) ||
        tool.shortDescription.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query) ||
        tool.games.some(game => game.toLowerCase().includes(query)) ||
        tool.pricing.toLowerCase().includes(query) ||
        tool.developer.name.toLowerCase().includes(query)
      );
    }
    
    // Filter by game
    if (selectedGame !== "All") {
      results = results.filter(tool => 
        tool.games.includes(selectedGame as Game)
      );
    }
    
    // Filter by category
    if (selectedCategory !== "All") {
      results = results.filter(tool => 
        tool.category === selectedCategory
      );
    }
    
    // Filter by pricing
    if (selectedPricing !== "All") {
      results = results.filter(tool => 
        tool.pricing === selectedPricing
      );
    }
    
    // Sort results
    if (sortOption === 'alphabetical') {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'newest') {
      // The array is already sorted by newest if we assume tools[0] is the newest
      // No additional sorting needed as we're starting with a copy of the original array
    }
    
    // Sort by priority:
    // 1. Featured first
    // 2. Open Source
    // 3. Analytics Tools
    // 4. Datasets/APIs
    // 5. Others
    results.sort((a, b) => {
      // First priority: Featured
      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }

      // Second priority: Tool category & pricing
      const getPriorityScore = (tool: Tool): number => {
        if (tool.pricing === 'Open Source') return 1;
        if (tool.category === 'Analytics Tools') return 2;
        if (tool.category === 'Datasets/APIs') return 3;
        return 4;
      };

      const priorityA = getPriorityScore(a);
      const priorityB = getPriorityScore(b);

      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }

      // If priorities are equal, maintain existing order
      return 0;
    });
    
    setFilteredTools(results);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedGame("All");
    setSelectedCategory("All");
    setSelectedPricing("All");
    setSortOption('newest');
  };

  return (
    <div className="w-full">
      {/* Filter section */}
      <Card className="mb-5 shadow-sm border-primary/10 overflow-hidden">
        <div className="p-4">
          {/* Mobile filter toggle */}
          <div className="flex md:hidden items-center justify-between mb-4">
            <div className="text-sm font-medium flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="h-8 gap-1.5"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              {showMobileFilters ? 'Hide' : 'Show'}
            </Button>
          </div>
          
          {/* Top row with search always visible */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search tools..."
              className="pl-10 w-full border-primary/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Filter controls - hidden on mobile unless toggled */}
          <div className={`${showMobileFilters ? 'block' : 'hidden'} md:block`}>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {/* Game filter */}
              <Select 
                value={selectedGame} 
                onValueChange={(value) => setSelectedGame(value as Game | "All")}
              >
                <SelectTrigger className="w-full border-primary/20">
                  <SelectValue placeholder="Game" />
                </SelectTrigger>
                <SelectContent>
                  {games.map((game) => (
                    <SelectItem key={game} value={game}>
                      {game}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Category filter */}
              <Select 
                value={selectedCategory} 
                onValueChange={(value) => setSelectedCategory(value as ToolCategory | "All")}
              >
                <SelectTrigger className="w-full border-primary/20">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.name} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Pricing filter */}
              <Select 
                value={selectedPricing} 
                onValueChange={(value) => setSelectedPricing(value as PricingModel | "All")}
              >
                <SelectTrigger className="w-full border-primary/20">
                  <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent>
                  {pricingModels.map((pricing) => (
                    <SelectItem key={pricing} value={pricing}>
                      {pricing}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Sort options */}
              <Select 
                value={sortOption} 
                onValueChange={(value) => setSortOption(value as SortOption)}
              >
                <SelectTrigger className="w-full border-primary/20">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="alphabetical">Alphabetical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Active filters indicator */}
          {isFilterActive && (
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-primary/10">
              <div className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{filteredTools.length}</span> {filteredTools.length === 1 ? 'tool' : 'tools'}
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={resetFilters}
                className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3 mr-1" />
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </Card>
      
      {/* Grid of tools */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 glass-card rounded-md border border-primary/10 p-8">
          <Filter className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold">No tools found</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Try adjusting your filters or search query
          </p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={resetFilters}
          >
            Reset filters
          </Button>
        </div>
      )}
    </div>
  );
}
