import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Game, ToolCategory, PricingModel, categories } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export function SubmitForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const games: Game[] = ["Valorant", "CSGO/2", "Dota", "League Of Legends", "APEX Legends", "Overwatch", "Rainbow Six", "Deadlock", "Rocket League"];
  const pricingModels: PricingModel[] = ["Free", "Free Options", "One-Time Purchase", "Subscription-Based", "Open Source"];
  
  const [formData, setFormData] = useState({
    toolName: "",
    description: "",
    websiteUrl: "",
    developerName: "",
    developerUrl: "",
    category: "",
    games: [] as Game[],
    pricing: "",
    email: "",
    additionalInfo: ""
  });
  
  const updateFormData = (field: string, value: string | Game[]) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleSelectGame = (game: Game) => {
    const currentGames = [...formData.games];
    
    if (currentGames.includes(game)) {
      updateFormData("games", currentGames.filter(g => g !== game));
    } else {
      updateFormData("games", [...currentGames, game]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent duplicate submissions
    if (isSubmitting) return;
    
    if (!formData.toolName || !formData.description || !formData.websiteUrl || 
        !formData.developerName || !formData.category || formData.games.length === 0 || 
        !formData.pricing || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Prepare form data for AJAX submission
    const form = e.target as HTMLFormElement;
    const formDataToSubmit = new FormData(form);
    
    // Send form data using fetch API
    fetch(form.action, {
      method: 'POST',
      body: formDataToSubmit,
      headers: {
        'Accept': 'application/json'
      },
    })
      .then(response => {
        if (response.ok) {
          // Show a toast notification
          toast({
            title: "Success",
            description: "Your submission has been received. Thank you!",
          });
          
          // Redirect to success page without leaving the site
          window.location.href = `${window.location.origin}${window.location.pathname}?submitted=true`;
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        setIsSubmitting(false);
        toast({
          title: "Error",
          description: "There was a problem submitting your form. Please try again.",
          variant: "destructive"
        });
        console.error('Error submitting form:', error);
      });
  };
  
  return (
    <form 
      action="https://formsubmit.co/ajax/flynvlr@gmail.com" 
      method="POST" 
      className="space-y-8"
      onSubmit={handleSubmit}
    >
      {/* Hidden fields for FormSubmit configuration */}
      <input type="hidden" name="_subject" value="New Tool Submission on Esports Dir" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Tool Information</h3>
        
        <div className="space-y-3">
          <div>
            <label htmlFor="toolName" className="block text-sm font-medium mb-1">
              Tool Name <span className="text-destructive">*</span>
            </label>
            <Input 
              id="toolName" 
              name="Tool Name"
              placeholder="Enter the name of the tool" 
              value={formData.toolName}
              onChange={(e) => updateFormData("toolName", e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Description <span className="text-destructive">*</span>
            </label>
            <Textarea 
              id="description" 
              name="Description"
              placeholder="Brief description of what the tool does" 
              className="resize-none min-h-[120px]"
              value={formData.description}
              onChange={(e) => updateFormData("description", e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="websiteUrl" className="block text-sm font-medium mb-1">
              Website URL <span className="text-destructive">*</span>
            </label>
            <Input 
              id="websiteUrl" 
              name="Website URL"
              type="url" 
              placeholder="https://example.com" 
              value={formData.websiteUrl}
              onChange={(e) => updateFormData("websiteUrl", e.target.value)}
              required
            />
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium mb-1">
                Category <span className="text-destructive">*</span>
              </label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => updateFormData("category", value)}
                name="Category"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.name} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {/* Hidden input to ensure category is sent with form */}
              <input type="hidden" name="Category" value={formData.category} />
            </div>
            
            <div>
              <label htmlFor="pricing" className="block text-sm font-medium mb-1">
                Pricing Model <span className="text-destructive">*</span>
              </label>
              <Select 
                value={formData.pricing} 
                onValueChange={(value) => updateFormData("pricing", value)}
                name="Pricing"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select pricing" />
                </SelectTrigger>
                <SelectContent>
                  {pricingModels.map((pricing) => (
                    <SelectItem key={pricing} value={pricing}>
                      {pricing}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {/* Hidden input to ensure pricing is sent with form */}
              <input type="hidden" name="Pricing" value={formData.pricing} />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Supported Games <span className="text-destructive">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {games.map((game) => (
                <Button
                  key={game}
                  type="button"
                  variant={formData.games.includes(game) ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleSelectGame(game)}
                  className="rounded-full"
                >
                  {game}
                </Button>
              ))}
            </div>
            {/* Hidden input to ensure games are sent with form */}
            <input type="hidden" name="Supported Games" value={formData.games.join(', ')} />
            {formData.games.length === 0 && (
              <p className="text-xs text-muted-foreground mt-1">
                Please select at least one game
              </p>
            )}
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Developer Information</h3>
        
        <div className="space-y-3">
          <div>
            <label htmlFor="developerName" className="block text-sm font-medium mb-1">
              Developer/Company Name <span className="text-destructive">*</span>
            </label>
            <Input 
              id="developerName" 
              name="Developer Name"
              placeholder="Name of the developer or company" 
              value={formData.developerName}
              onChange={(e) => updateFormData("developerName", e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="developerUrl" className="block text-sm font-medium mb-1">
              Developer Website (optional)
            </label>
            <Input 
              id="developerUrl" 
              name="Developer Website"
              type="url" 
              placeholder="https://example.com"
              value={formData.developerUrl}
              onChange={(e) => updateFormData("developerUrl", e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        
        <div className="space-y-3">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Your Email <span className="text-destructive">*</span>
            </label>
            <Input 
              id="email" 
              name="Email"
              type="email" 
              placeholder="your@email.com" 
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              We'll contact you regarding your submission if needed
            </p>
          </div>
          
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium mb-1">
              Additional Information (optional)
            </label>
            <Textarea 
              id="additionalInfo" 
              name="Additional Information"
              placeholder="Any other details you'd like to share about this tool" 
              className="resize-none min-h-[100px]"
              value={formData.additionalInfo}
              onChange={(e) => updateFormData("additionalInfo", e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Tool"}
      </Button>
    </form>
  );
}
