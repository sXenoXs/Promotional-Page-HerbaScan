import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Leaf, CheckCircle2, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { plantsData } from "@/data/plantsData";

export default function Result() {
  const navigate = useNavigate();
  
  // Mock result - in real app, this would come from ML model
  const topResult = plantsData[0];
  const alternativeResults = [plantsData[1], plantsData[2]];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/scan')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Scan Another
        </Button>

        <div className="animate-slide-up space-y-6">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-botanical rounded-full mb-4">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Plant Identified!
            </h1>
            <p className="text-muted-foreground">
              Here's what we found
            </p>
          </div>

          {/* Top Result */}
          <Card className="p-6 shadow-botanical border-2 border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-gradient-botanical text-white">
                Best Match
              </Badge>
              <Badge className="bg-accent text-white">
                {topResult.confidence}% Confidence
              </Badge>
              {topResult.isDohApproved && (
                <Badge variant="outline">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  DOH Approved
                </Badge>
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-gradient-botanical p-8 rounded-2xl flex items-center justify-center md:w-32 md:h-32">
                <Leaf className="w-16 h-16 text-white" />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {topResult.commonNameEn}
                </h2>
                <p className="text-lg text-primary font-semibold mb-1">
                  {topResult.commonNameFil}
                </p>
                <p className="text-sm italic text-muted-foreground mb-4">
                  {topResult.scientificName}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Confidence Score</span>
                    <span className="font-semibold">{topResult.confidence}%</span>
                  </div>
                  <Progress value={topResult.confidence} className="h-2" />
                </div>

                <Button
                  onClick={() => navigate(`/plant/${topResult.id}`)}
                  className="bg-gradient-botanical text-white hover:opacity-90 rounded-xl w-full md:w-auto"
                >
                  View Full Details
                </Button>
              </div>
            </div>
          </Card>

          {/* Alternative Results */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              Other Possible Matches
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {alternativeResults.map((plant) => (
                <Card
                  key={plant.id}
                  onClick={() => navigate(`/plant/${plant.id}`)}
                  className="p-4 hover:shadow-card transition-all cursor-pointer hover:scale-105 border-2"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-botanical p-4 rounded-xl">
                      <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground">
                        {plant.commonNameEn}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {plant.commonNameFil}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Info Card */}
          <Card className="p-4 bg-muted/50 border">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Note:</strong> Results are based on AI analysis and should be verified. 
              Always consult an expert before using any medicinal plant.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
