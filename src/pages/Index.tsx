import { Hero } from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Leaf, Target, Users, Award } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* About section: single-page scroll, same content as former About page */}
      <section id="about" className="pt-16 pb-12 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-botanical rounded-full mb-6">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About HerbaScan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Preserving traditional Philippine herbal medicine through modern
              technology
            </p>
          </div>

          <div className="space-y-6 animate-slide-up">
            {/* Mission */}
            <Card className="p-8 border border-border shadow-none">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    HerbaScan aims to make Philippine medicinal plant knowledge
                    accessible to everyone. Using AI-powered image recognition, we
                    help people identify medicinal plants accurately and learn
                    about their traditional uses, promoting both cultural
                    preservation and public health awareness.
                  </p>
                </div>
              </div>
            </Card>

            {/* Technology with integrated stats */}
            <Card className="p-8 border border-border shadow-none">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-xl shrink-0">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Technology
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our platform uses advanced machine learning models trained
                    on thousands of images of Philippine medicinal plants. The
                    system can identify over 42 species with high accuracy,
                    including all DOH-approved medicinal plants.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
                      <span className="text-2xl">42+</span> Plant Species
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
                      <span className="text-2xl">90%+</span> Accuracy
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
                      <span className="text-2xl">10+</span> DOH Approved
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* For Everyone */}
            <Card className="p-8 border border-border shadow-none">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-xl shrink-0">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    For Everyone
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Whether you&apos;re a health practitioner, student,
                    researcher, or simply curious about traditional medicine,
                    HerbaScan provides reliable information about Philippine
                    medicinal plants at your fingertips.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Quick and accurate plant identification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Comprehensive database of medicinal uses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Preparation methods and dosage information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Safety warnings and precautions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Important Disclaimer - anchored at bottom, mandatory */}
            <Card className="p-6 bg-muted/50 border-2 border-border">
              <h3 className="font-bold text-foreground mb-2 text-center">
                Important Disclaimer
              </h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                The information provided by HerbaScan is for educational
                purposes only and should not be considered medical advice.
                Always consult with qualified healthcare professionals before
                using any medicinal plants for treatment. Proper plant
                identification is crucial — when in doubt, consult an expert
                botanist or herbalist.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
