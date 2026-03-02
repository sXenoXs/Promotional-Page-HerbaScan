import { Camera, Leaf, Search } from "lucide-react";
import heroImage from "@/assets/hero-plants.jpg";
import scanFeature from "@/assets/scan-feature.jpg";
import { GooglePlayBadge } from "./GooglePlayBadge";

export const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with strong dark overlay for contrast */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90" />
          <div className="absolute inset-0 bg-black/40" aria-hidden />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            {/* Left: headline + CTA */}
            <div className="animate-fade-in text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Leaf className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">
                  Philippine Medicinal Plant Identifier
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Discover Nature&apos;s
                <br />
                <span className="text-white drop-shadow-md">Healing Power</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-xl mx-auto lg:mx-0">
                Identify Philippine medicinal plants instantly with AI-powered
                recognition. Learn traditional uses and preparation methods.
              </p>

              <div className="flex justify-center lg:justify-start">
                <GooglePlayBadge height={60} />
              </div>
            </div>

            {/* Right: phone mockup */}
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div
                className="relative w-[280px] sm:w-[320px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-900 shadow-2xl overflow-hidden"
                style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
              >
                <div className="aspect-[9/19] w-full overflow-hidden bg-muted">
                  <img
                    src={scanFeature}
                    alt="HerbaScan app preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Notch placeholder for realism */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards: static informational blocks (no button-like styling) */}
      <section id="features" className="relative z-10 -mt-8 pb-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Camera className="w-8 h-8 text-primary" />,
                title: "Instant Recognition",
                description:
                  "Take a photo and identify plants in seconds",
              },
              {
                icon: <Leaf className="w-8 h-8 text-primary" />,
                title: "42+ Plants",
                description:
                  "Comprehensive database of Philippine medicinal plants",
              },
              {
                icon: <Search className="w-8 h-8 text-primary" />,
                title: "Traditional Knowledge",
                description:
                  "Learn preparation methods and medicinal uses",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center text-foreground"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
