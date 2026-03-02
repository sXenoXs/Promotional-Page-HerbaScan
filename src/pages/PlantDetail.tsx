import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Leaf, AlertTriangle, CheckCircle2, Droplets } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { plantsData } from "@/data/plantsData";

export default function PlantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const plant = plantsData.find((p) => p.id === Number(id));

  if (!plant) {
    return (
      <div className="min-h-screen pt-20 pb-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <Leaf className="w-16 h-16 text-muted mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">Plant not found</p>
          <Button onClick={() => navigate('/library')} className="mt-4">
            Back to Library
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="animate-fade-in space-y-6">
          {/* Header Card */}
          <Card className="p-8 shadow-botanical border-2">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-gradient-botanical p-8 rounded-2xl flex items-center justify-center md:w-48 md:h-48">
                <Leaf className="w-24 h-24 text-white" />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {plant.commonNameEn}
                    </h1>
                    <p className="text-xl text-primary font-semibold mb-1">
                      {plant.commonNameFil}
                    </p>
                    <p className="text-sm italic text-muted-foreground">
                      {plant.scientificName}
                    </p>
                  </div>
                  {plant.isDohApproved && (
                    <Badge className="bg-accent text-white">
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      DOH Approved
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-sm">
                    Family: {plant.family}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Medicinal Uses */}
          <Card className="p-6 border-2">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Medicinal Uses
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {plant.medicinalUses}
                </p>
              </div>
            </div>
          </Card>

          {/* Preparation Method */}
          <Card className="p-6 border-2">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-secondary/10 p-2 rounded-lg">
                <Droplets className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Preparation & Dosage
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {plant.preparation}
                </p>
              </div>
            </div>
          </Card>

          {/* Safety Warnings */}
          {plant.safetyWarnings && (
            <Card className="p-6 border-2 border-accent bg-accent/5">
              <div className="flex items-start gap-3">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    Safety & Precautions
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {plant.safetyWarnings}
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Disclaimer */}
          <Card className="p-4 bg-muted/50 border">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Disclaimer:</strong> This information is for educational purposes only. 
              Always consult a healthcare professional before using medicinal plants for treatment.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
