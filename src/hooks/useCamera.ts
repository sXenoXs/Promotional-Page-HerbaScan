import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

export const useCamera = () => {
  const [isNative] = useState(Capacitor.isNativePlatform());

  const takePicture = async (source: 'camera' | 'gallery' = 'camera'): Promise<string | null> => {
    try {
      // Haptic feedback on native platforms
      if (isNative) {
        await Haptics.impact({ style: ImpactStyle.Light });
      }

      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: source === 'camera' ? CameraSource.Camera : CameraSource.Photos,
      });

      return image.dataUrl || null;
    } catch (error) {
      console.error('Camera error:', error);
      return null;
    }
  };

  const checkPermissions = async (): Promise<boolean> => {
    try {
      const permissions = await Camera.checkPermissions();
      if (permissions.camera === 'granted' && permissions.photos === 'granted') {
        return true;
      }

      const requestResult = await Camera.requestPermissions();
      return requestResult.camera === 'granted' && requestResult.photos === 'granted';
    } catch (error) {
      console.error('Permission error:', error);
      return false;
    }
  };

  return {
    takePicture,
    checkPermissions,
    isNative,
  };
};
