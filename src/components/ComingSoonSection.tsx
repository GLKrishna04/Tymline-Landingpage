import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

const ComingSoonSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "You're on the list!",
      description: "We'll notify you when Tymline launches.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section id="coming-soon" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-[100px]" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 mb-8">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Something Extraordinary is{" "}
            <span className="gradient-text">On the Way</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg text-muted-foreground mb-10">
            Join us and be the first to enter the Tymline Universe.
          </p>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20"
              required
            />
            <Button 
              type="submit" 
              variant="hero" 
              size="lg"
              disabled={isSubmitting}
              className="shrink-0"
            >
              {isSubmitting ? "Joining..." : "Notify Me"}
            </Button>
          </form>

          {/* Trust text */}
          <p className="text-xs text-muted-foreground mt-6">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
