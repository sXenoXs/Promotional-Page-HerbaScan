import { Card } from "@/components/ui/card";
import { Leaf, Target, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-botanical rounded-full mb-6">
            <Leaf className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About HerbaScan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preserving traditional Philippine herbal medicine through modern technology
          </p>
        </div>

        <div className="space-y-6 animate-slide-up">
          {/* Mission */}
          <Card className="p-8 border-2">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  HerbaScan aims to make Philippine medicinal plant knowledge accessible to everyone. 
                  Using AI-powered image recognition, we help people identify medicinal plants accurately 
                  and learn about their traditional uses, promoting both cultural preservation and 
                  public health awareness.
                </p>
              </div>
            </div>
          </Card>

          {/* Technology */}
          <Card className="p-8 border-2">
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-3 rounded-xl">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Technology</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our platform uses advanced machine learning models trained on thousands of images 
                  of Philippine medicinal plants. The system can identify over 40 species with high 
                  accuracy, including all DOH-approved medicinal plants.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-muted/50 p-3 rounded-lg text-center">
                    <div className="font-bold text-2xl text-primary">40+</div>
                    <div className="text-xs text-muted-foreground">Plant Species</div>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg text-center">
                    <div className="font-bold text-2xl text-primary">90%+</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg text-center">
                    <div className="font-bold text-2xl text-primary">10+</div>
                    <div className="text-xs text-muted-foreground">DOH Approved</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* For Everyone */}
          <Card className="p-8 border-2">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-xl">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">For Everyone</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Whether you're a health practitioner, student, researcher, or simply curious about 
                  traditional medicine, HerbaScan provides reliable information about Philippine 
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

          {/* Disclaimer */}
          <Card className="p-6 bg-muted/50 border-2">
            <h3 className="font-bold text-foreground mb-2 text-center">Important Disclaimer</h3>
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              The information provided by HerbaScan is for educational purposes only and should not 
              be considered medical advice. Always consult with qualified healthcare professionals 
              before using any medicinal plants for treatment. Proper plant identification is crucial 
              - when in doubt, consult an expert botanist or herbalist.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
