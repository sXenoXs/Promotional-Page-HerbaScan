import { Button } from "@/components/ui/button";
import { Camera, Leaf, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-plants.jpg";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Leaf className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Philippine Medicinal Plant Identifier</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Nature's
            <br />
            <span className="text-accent">Healing Power</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Identify Philippine medicinal plants instantly with AI-powered recognition. 
            Learn traditional uses and preparation methods.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => navigate('/scan')}
              className="bg-white text-primary hover:bg-white/90 shadow-botanical text-lg px-8 py-6 rounded-full font-semibold"
            >
              <Camera className="w-5 h-5 mr-2" />
              Scan Plant Now
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/library')}
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 rounded-full font-semibold"
            >
              <Search className="w-5 h-5 mr-2" />
              Browse Plants
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
          {[
            {
              icon: <Camera className="w-8 h-8" />,
              title: "Instant Recognition",
              description: "Take a photo and identify plants in seconds"
            },
            {
              icon: <Leaf className="w-8 h-8" />,
              title: "40+ Plants",
              description: "Comprehensive database of Philippine medicinal plants"
            },
            {
              icon: <Search className="w-8 h-8" />,
              title: "Traditional Knowledge",
              description: "Learn preparation methods and medicinal uses"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-white mb-4">{feature.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
