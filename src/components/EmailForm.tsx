
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('email;')
        .insert({
          email: email.trim(),
          "date and time": new Date().toISOString(),
        });

      if (error) {
        throw error;
      }

      toast({
        title: "You're on the list. We'll reach out soon. Stand by for next-gen building tools.",
        className: "bg-green-600 border-green-600 text-white",
      });
      setEmail('');
    } catch (error) {
      console.error('Error saving email:', error);
      toast({
        title: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 opacity-0 animate-fade-in delay-300">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-white">Get Early Access</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-3 rounded-md bg-arcade-gray/50 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-arcade-purple transition-all"
          disabled={isSubmitting}
        />
        
        <button 
          type="submit" 
          className="flex items-center justify-center py-3 px-4 bg-arcade-purple hover:bg-opacity-90 text-white rounded-md transition-all duration-300 disabled:opacity-70"
          disabled={isSubmitting}
        >
          <span>Join the Waitlist</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
