import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeatureSection } from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { FeaturedTools } from "@/components/FeaturedTools";
import { tools } from "@/lib/data";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="fixed top-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="fixed bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Tools Section */}
        <FeaturedTools tools={tools} />
        
        {/* Feature Cards Section */}
        <FeatureSection />
        
        {/* CTA Section */}
        <section className="py-12 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="glass-card rounded-xl border border-primary/20 p-6 md:p-8 shadow-lg backdrop-blur-md">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="md:flex-1">
                  <h2 className="text-xl md:text-2xl font-display font-bold leading-tight mb-2">
                    Have an Esports Analysis Tool?
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Submit your tool to our directory and reach the community.
                  </p>
                </div>
                
                <div>
                  <Button size="lg" className="px-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all group" asChild>
                    <Link to="/submit">
                      Submit Your Tool
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
