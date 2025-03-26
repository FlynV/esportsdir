import { Tool } from "@/lib/data";
import { ToolCard } from "@/components/ToolCard";

interface FeaturedToolsProps {
  tools: Tool[];
}

export function FeaturedTools({ tools }: FeaturedToolsProps) {
  // Filter to only include featured tools
  const featuredTools = tools.filter(tool => tool.featured);
  
  if (featuredTools.length === 0) {
    return null;
  }
  
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
            Featured Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover top esports analytics tools used by professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
} 