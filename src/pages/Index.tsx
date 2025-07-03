
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Terminal from '@/components/Terminal';
import EmailForm from '@/components/EmailForm';
import FeatureCard from '@/components/FeatureCard';
import { MessageSquare, Code, Play } from 'lucide-react';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Add small delay before starting animations
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-arcade-dark">
      <div className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <Header />
        
        <div className={`mt-8 mb-12 text-center transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Builders creative OS for founders and builders. Turn raw ideas into MVP, automate the boring, streamline the building, and stay in flow from first thought to final product with our unified workspace and also 100+ AI agent integrated library,
          </p>
        </div>
        
        <Terminal />
        
        {/* Hero Image Section */}
        <div className={`mt-16 mb-12 text-center transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-5xl mx-auto">
            <img 
              src="/lovable-uploads/d89eacc9-647c-4934-8cbe-5dc3e510a06d.png" 
              alt="Builder's OS Product Interface" 
              className="w-full h-auto rounded-lg shadow-2xl border border-gray-700"
            />
          </div>
        </div>
        
        <EmailForm />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 mb-16">
          <FeatureCard 
            icon={<MessageSquare size={28} />}
            title="Chat to Create"
            description="Simply describe your idea in natural language and watch it come to life"
            delay="delay-100"
          />
          
          <FeatureCard 
            icon={<Code size={28} />}
            title="No Coding Required"
            description="Create complex solutions without writing a single line of code"
            delay="delay-300"
          />
          
          <FeatureCard 
            icon={<Play size={28} />}
            title="Instantly Buildable"
            description="Get working prototypes in seconds that you can iterate and share immediately"
            delay="delay-500"
          />
        </div>
      </div>
      
      <footer className="py-6 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>© 2025 Builder's OS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
