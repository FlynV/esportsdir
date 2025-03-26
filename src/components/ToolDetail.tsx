import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tool, getRelatedTools, categories } from "@/lib/data";
import { ToolCard } from "@/components/ToolCard";
import { 
  ChevronRight, 
  Globe, 
  Check,
  ExternalLink
} from "lucide-react";

interface ToolDetailProps {
  tool: Tool;
}

export function ToolDetail({ tool }: ToolDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const relatedTools = getRelatedTools(tool);
  
  const categoryInfo = categories.find(c => c.name === tool.category);
  const CategoryIcon = categoryInfo?.icon;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/tools">Tools</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={`/tools?category=${encodeURIComponent(tool.category)}`}>
                {tool.category}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="font-medium">{tool.name}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  {CategoryIcon && <CategoryIcon className="h-5 w-5 text-primary" />}
                  <Badge variant="outline">{tool.category}</Badge>
                  {tool.featured && (
                    <Badge className="bg-primary text-white">Featured</Badge>
                  )}
                </div>
                
                <h1 className="text-3xl font-display font-bold mt-2">
                  {tool.name}
                </h1>
                
                <p className="text-muted-foreground mt-1 text-base">
                  by{" "}
                  <a 
                    href={tool.developer.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {tool.developer.name}
                  </a>
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button asChild className="gap-2">
                  <a href={tool.url} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden mb-6 bg-secondary/50 h-[300px] sm:h-[400px]">
              <img 
                src={tool.images[currentImageIndex]} 
                alt={tool.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {tool.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {tool.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative rounded-md overflow-hidden flex-shrink-0 w-20 h-20 border-2 transition-all ${
                      currentImageIndex === index 
                        ? "border-primary" 
                        : "border-transparent hover:border-muted"
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${tool.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold font-display">About this tool</h2>
            <p className="text-muted-foreground leading-relaxed">
              {tool.description}
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold font-display">Key Features</h2>
            <ul className="space-y-2">
              {tool.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="glass-card rounded-xl p-6 space-y-5">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Pricing</h3>
              <p className="mt-1 font-medium">{tool.pricing}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Supported Games</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {tool.games.map(game => (
                  <Badge key={game} variant="secondary">
                    {game}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Links</h3>
              <div className="mt-2 space-y-2">
                <a 
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  Official Website
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
                
                <a 
                  href={tool.developer.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <CategoryIcon className="h-4 w-4" />
                  Developer's Website
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
              </div>
            </div>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 gap-2"
                    asChild
                  >
                    <Link to="/submit">
                      Submit a similar tool
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Have a similar tool? Let us know!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          {relatedTools.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold font-display">Related Tools</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary text-sm gap-1 hover:text-primary/90"
                  asChild
                >
                  <Link to="/tools">
                    View all
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="space-y-3">
                {relatedTools.map((relatedTool) => (
                  <ToolCard key={relatedTool.id} tool={relatedTool} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
