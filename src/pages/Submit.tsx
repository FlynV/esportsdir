import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SubmitForm } from "@/components/SubmitForm";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Submit = () => {
  const location = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if the URL has a submitted parameter
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('submitted') === 'true') {
      setIsSubmitted(true);
    }
  }, [location]);

  // Reset submission state when navigating away and back
  useEffect(() => {
    return () => setIsSubmitted(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-8">
            <h1 className="text-2xl md:text-3xl font-display font-bold">
              Submit Your Tool
            </h1>
            <p className="mt-2 text-muted-foreground">
              Share your esports analysis tool with our community
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto glass-card rounded-xl p-6 md:p-8">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 max-w-md mx-auto">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold font-display">Submission Received</h3>
                <p className="text-muted-foreground">
                  Thank you for your contribution to the Esports data analysis community. We'll review your submission and get back to you soon.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-6"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Tool
                </Button>
              </div>
            ) : (
              <SubmitForm />
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Submit;
