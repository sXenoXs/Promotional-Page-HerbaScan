import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Upload, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import scanFeature from "@/assets/scan-feature.jpg";
import { useCamera } from "@/hooks/useCamera";
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { useToast } from "@/hooks/use-toast";

export default function Scan() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const navigate = useNavigate();
  const { takePicture, checkPermissions, isNative } = useCamera();
  const { toast } = useToast();

  const handleNativeCamera = async (source: 'camera' | 'gallery') => {
    const hasPermission = await checkPermissions();
    if (!hasPermission) {
      toast({
        title: "Permission Denied",
        description: "Please enable camera permissions in your device settings.",
        variant: "destructive",
      });
      return;
    }

    const imageData = await takePicture(source);
    if (imageData) {
      setSelectedImage(imageData);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScan = async () => {
    setIsScanning(true);
    
    // Haptic feedback on native platforms
    if (isNative) {
      await Haptics.impact({ style: ImpactStyle.Medium });
    }
    
    // Simulate scanning process
    setTimeout(() => {
      navigate('/result');
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Identify Your Plant
          </h1>
          <p className="text-lg text-muted-foreground">
            Take a photo or upload an image of a medicinal plant leaf
          </p>
        </div>

        <Card className="p-8 shadow-card border-2">
          {!selectedImage ? (
            <div className="space-y-6">
              {/* Preview Area */}
              <div 
                className="relative h-96 rounded-2xl overflow-hidden bg-muted flex items-center justify-center"
                style={{
                  backgroundImage: `url(${scanFeature})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="relative z-10 text-center text-white">
                  <Camera className="w-16 h-16 mx-auto mb-4 animate-pulse-gentle" />
                  <p className="text-xl font-semibold">Ready to Scan</p>
                </div>
              </div>

              {/* Upload Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {isNative ? (
                  <>
                    <Button 
                      type="button"
                      size="lg" 
                      onClick={() => handleNativeCamera('camera')}
                      className="w-full bg-gradient-botanical text-white hover:opacity-90 rounded-xl h-14 text-lg"
                    >
                      <Camera className="w-5 h-5 mr-2" />
                      Take Photo
                    </Button>

                    <Button 
                      type="button"
                      size="lg" 
                      variant="outline"
                      onClick={() => handleNativeCamera('gallery')}
                      className="w-full border-2 border-primary text-primary hover:bg-primary/10 rounded-xl h-14 text-lg"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      Choose from Gallery
                    </Button>
                  </>
                ) : (
                  <>
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <Button 
                        type="button"
                        size="lg" 
                        className="w-full bg-gradient-botanical text-white hover:opacity-90 rounded-xl h-14 text-lg"
                      >
                        <Camera className="w-5 h-5 mr-2" />
                        Take Photo
                      </Button>
                    </label>

                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <Button 
                        type="button"
                        size="lg" 
                        variant="outline"
                        className="w-full border-2 border-primary text-primary hover:bg-primary/10 rounded-xl h-14 text-lg"
                      >
                        <Upload className="w-5 h-5 mr-2" />
                        Upload Image
                      </Button>
                    </label>
                  </>
                )}
              </div>

              {/* Tips */}
              <div className="bg-muted/50 p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground mb-1">Tips for best results:</p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Use good lighting</li>
                      <li>Capture the whole leaf clearly</li>
                      <li>Avoid blurry or dark photos</li>
                      <li>Focus on leaf patterns and edges</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-slide-up">
              {/* Image Preview */}
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img 
                  src={selectedImage} 
                  alt="Selected plant" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setSelectedImage(null)}
                  disabled={isScanning}
                  className="rounded-xl h-14"
                >
                  Retake
                </Button>
                <Button
                  size="lg"
                  onClick={handleScan}
                  disabled={isScanning}
                  className="bg-gradient-botanical text-white hover:opacity-90 rounded-xl h-14"
                >
                  {isScanning ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Identifying...
                    </>
                  ) : (
                    'Identify Plant'
                  )}
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
