import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Leaf, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { plantsData } from "@/data/plantsData";
import plantLibrary from "@/assets/plant-library.jpg";

export default function Library() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredPlants = plantsData.filter((plant) =>
    plant.commonNameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plant.commonNameFil.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Plant Library
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our database of Philippine medicinal plants
          </p>

          {/* Hero Image */}
          <div 
            className="relative h-64 rounded-2xl overflow-hidden mb-8 shadow-botanical"
            style={{
              backgroundImage: `url(${plantLibrary})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-3xl font-bold">{plantsData.length}+ Plants</p>
              <p className="text-sm">DOH-approved medicinal plants included</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by common name, Filipino name, or scientific name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 rounded-full border-2 text-base"
            />
          </div>
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map((plant, index) => (
            <Card
              key={plant.id}
              onClick={() => navigate(`/plant/${plant.id}`)}
              className="p-6 hover:shadow-botanical transition-all cursor-pointer hover:scale-105 border-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-botanical p-3 rounded-xl">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                {plant.isDohApproved && (
                  <Badge className="bg-accent text-white">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    DOH Approved
                  </Badge>
                )}
              </div>

              <h3 className="font-bold text-lg text-foreground mb-1">
                {plant.commonNameEn}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {plant.commonNameFil}
              </p>
              <p className="text-xs italic text-muted-foreground mb-3">
                {plant.scientificName}
              </p>

              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="text-xs">
                  {plant.family}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">
                {plant.medicinalUses}
              </p>
            </Card>
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <div className="text-center py-12">
            <Leaf className="w-16 h-16 text-muted mx-auto mb-4 opacity-50" />
            <p className="text-lg text-muted-foreground">
              No plants found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
