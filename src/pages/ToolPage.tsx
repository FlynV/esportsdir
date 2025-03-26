
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ToolDetail } from "@/components/ToolDetail";
import { Tool, getToolById } from "@/lib/data";
import { Loader2 } from "lucide-react";

const ToolPage = () => {
  const { id } = useParams<{ id: string }>();
  const [tool, setTool] = useState<Tool | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulate loading
    setLoading(true);
    
    setTimeout(() => {
      if (id) {
        const foundTool = getToolById(id);
        
        if (foundTool) {
          setTool(foundTool);
        } else {
          // Tool not found, redirect to tools page
          navigate("/tools", { replace: true });
        }
      }
      
      setLoading(false);
    }, 500);
  }, [id, navigate]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-20">
        {loading ? (
          <div className="container mx-auto px-4 py-12 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
              <p className="text-muted-foreground">Loading tool details...</p>
            </div>
          </div>
        ) : tool ? (
          <ToolDetail tool={tool} />
        ) : null}
      </main>
      
      <Footer />
    </div>
  );
};

export default ToolPage;
