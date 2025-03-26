
import { Database, Globe, FileCode, BarChart3, Puzzle, DollarSign } from "lucide-react";
import { categories } from "@/lib/data";

export function FeatureSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Analytics Tools",
      description: "Performance tracking and insights"
    },
    {
      icon: Database,
      title: "Datasets/APIs",
      description: "Data access for developers"
    },
    {
      icon: FileCode,
      title: "Open-Source Projects",
      description: "Community-driven tools"
    },
    {
      icon: Globe,
      title: "Websites/Dashboards",
      description: "Information portals and visualizations"
    },
    {
      icon: Puzzle,
      title: "Apps & Extensions",
      description: "Enhanced gameplay experience"
    },
    {
      icon: DollarSign,
      title: "Pricing Options",
      description: "From free to subscription models"
    }
  ];

  return (
    <section className="py-8 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-6">
          <h2 className="text-xl md:text-2xl font-display font-bold mb-2">Tool Categories</h2>
          <p className="text-muted-foreground text-sm">
            Find the right tools for your esports analytics needs
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-md p-3 border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center mb-2 mx-auto">
                <feature.icon className="h-4 w-4 text-primary" />
              </div>
              
              <h3 className="text-xs font-semibold mb-1">{feature.title}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
