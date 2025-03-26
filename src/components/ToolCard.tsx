import { useState } from "react";
import { Tool, Game } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/lib/data";
import { ExternalLink } from "lucide-react";

interface ToolCardProps {
  tool: Tool;
}

// Map games to specific theme colors
const gameColorMap: Record<Game, string> = {
  'Valorant': 'bg-[#FF4654]/10 hover:bg-[#FF4654]/15 border-[#FF4654]/20',
  'CSGO/2': 'bg-amber-600/10 hover:bg-amber-600/15 border-amber-600/20',
  'Dota': 'bg-red-600/10 hover:bg-red-600/15 border-red-600/20',
  'League Of Legends': 'bg-indigo-900/10 hover:bg-indigo-900/15 border-indigo-900/20',
  'APEX Legends': 'bg-red-600/10 hover:bg-red-600/15 border-red-600/20',
  'Overwatch': 'bg-orange-400/10 hover:bg-orange-400/15 border-orange-400/20',
  'Rainbow Six': 'bg-amber-400/10 hover:bg-amber-400/15 border-amber-400/20',
  'Deadlock': 'bg-amber-50/10 hover:bg-amber-50/15 border-amber-50/20',
  'Rocket League': 'bg-blue-500/10 hover:bg-blue-500/15 border-blue-500/20',
  'All': 'bg-gray-500/10 hover:bg-gray-500/15 border-gray-500/20',
};

export function ToolCard({ tool }: ToolCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const categoryIcon = categories.find(c => c.name === tool.category)?.icon;
  const CategoryIcon = categoryIcon;

  // Determine the appropriate button text based on tool category
  const getButtonText = () => {
    switch (tool.category) {
      case 'Datasets/APIs':
        return 'View Dataset';
      case 'Open-Source Projects':
        return 'View Project';
      default:
        return 'Visit';
    }
  };

  // Get the background color based on the first game in the tool's games array
  const getGameBackground = () => {
    if (tool.games.length === 0) return '';
    
    const primaryGame = tool.games[0];
    return gameColorMap[primaryGame] || '';
  };

  // Get the text color for the game badge based on the game
  const getGameTextColor = (game: Game) => {
    switch(game) {
      case 'Valorant': return 'text-[#FF4654]';
      case 'CSGO/2': return 'text-amber-600';
      case 'Dota': return 'text-red-600';
      case 'League Of Legends': return 'text-indigo-900';
      case 'APEX Legends': return 'text-red-600';
      case 'Overwatch': return 'text-orange-400';
      case 'Rainbow Six': return 'text-amber-400';
      case 'Deadlock': return 'text-amber-700';
      case 'Rocket League': return 'text-blue-500';
      default: return 'text-gray-600';
    }
  };

  // Get up to 2 games to display
  const getDisplayGames = () => {
    return tool.games.slice(0, 2);
  };

  // Get avatar background color based on game
  const getAvatarStyle = () => {
    if (tool.games.length === 0) return 'bg-primary/10 text-primary';
    
    const primaryGame = tool.games[0];
    switch(primaryGame) {
      case 'Valorant': return 'bg-[#FF4654]/10 text-[#FF4654]';
      case 'CSGO/2': return 'bg-amber-600/10 text-amber-600';
      case 'Dota': return 'bg-red-600/10 text-red-600';
      case 'League Of Legends': return 'bg-indigo-900/10 text-indigo-900';
      case 'APEX Legends': return 'bg-red-600/10 text-red-600';
      case 'Overwatch': return 'bg-orange-400/10 text-orange-400';
      case 'Rainbow Six': return 'bg-amber-400/10 text-amber-400';
      case 'Deadlock': return 'bg-amber-50/10 text-amber-700';
      case 'Rocket League': return 'bg-blue-500/10 text-blue-500';
      default: return 'bg-primary/10 text-primary';
    }
  };

  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={tool.url}
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className={`relative h-full glass-card rounded-md overflow-hidden transition-all duration-300 hover:shadow-md p-5 hover:-translate-y-1 ${getGameBackground()}`}>
          {/* Game indicator - subtle top border */}
          {tool.games.length > 0 && (
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-30"></div>
          )}
          
          <div className="flex items-start gap-4">
            {/* Tool avatar with first letter */}
            <div className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 ${getAvatarStyle()} transition-colors duration-300 shadow-sm font-semibold text-xl uppercase`}>
              {tool.name.charAt(0)}
            </div>

            <div className="flex-1">
              {/* Tool name and badges */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-base leading-tight mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                    {tool.description}
                  </p>
                  
                  {/* Developer information */}
                  <div className="text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <span>by</span>
                      <span className="font-medium text-foreground/80 hover:text-primary transition-colors">
                        {tool.developer.name}
                      </span>
                    </span>
                  </div>
                  
                  {/* Game badges - show up to 2 games */}
                  {tool.games.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {getDisplayGames().map((game) => (
                        <Badge 
                          key={game}
                          variant="outline" 
                          className={`text-xs px-2 py-0.5 bg-background/50 ${getGameTextColor(game)}`}
                        >
                          {game}
                        </Badge>
                      ))}
                      {tool.games.length > 2 && (
                        <span className="text-xs text-muted-foreground">
                          +{tool.games.length - 2} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Featured badge */}
                {tool.featured && (
                  <Badge className="bg-primary/20 text-primary border-primary/30 font-medium text-xs">
                    Featured
                  </Badge>
                )}
              </div>
              
              {/* Bottom row with category and pricing */}
              <div className="flex items-center justify-between mt-3">
                <Badge variant="outline" className="bg-secondary/50 text-xs px-2 py-0.5">
                  {tool.category}
                </Badge>
                
                <Badge 
                  variant={tool.pricing === 'Free' || tool.pricing === 'Open Source' ? 'secondary' : 'outline'}
                  className={`text-xs px-2 py-0.5 ${
                    tool.pricing === 'Free' || tool.pricing === 'Open Source' 
                      ? 'bg-green-500/20 text-green-500 border-green-500/30' 
                      : 'bg-amber-500/20 text-amber-500 border-amber-500/30'
                  }`}
                >
                  {tool.pricing}
                </Badge>
              </div>
              
              {/* External link indicator - visible on hover */}
              <div className={`absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity`}>
                <ExternalLink className="h-4 w-4 text-primary/70" />
              </div>
            </div>
          </div>
          
          {/* Recently added badge - displayed conditionally */}
          {tool.id.includes('recently') && (
            <div className="absolute top-0 right-0 bg-accent/80 text-white text-xs py-1 px-2 rounded-bl-md">
              Recently Added
            </div>
          )}
        </div>
      </a>
    </div>
  );
}
