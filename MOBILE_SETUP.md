# 📱 HerbaScan Mobile App Setup Guide

Your HerbaScan app is now configured for native mobile deployment with Capacitor!

## ✅ What's Already Done

- ✅ Capacitor dependencies installed
- ✅ Native camera integration with `useCamera` hook
- ✅ Haptic feedback for better UX
- ✅ Mobile-optimized UI (works on both web and native)
- ✅ Permission handling for camera and gallery
- ✅ Configuration file (`capacitor.config.ts`) created

## 🚀 Running on Mobile Device/Emulator

### Prerequisites

- **For iOS**: Mac with Xcode installed
- **For Android**: Android Studio installed
- **Node.js**: Version 16 or higher

### Step-by-Step Instructions

#### 1. Export to GitHub
Click the **"Export to GitHub"** button in Lovable (top right)

#### 2. Clone Your Repository
```bash
git clone <your-github-repo-url>
cd herb-sketch-build
```

#### 3. Install Dependencies
```bash
npm install
```

#### 4. Build the Web App
```bash
npm run build
```

#### 5. Initialize Capacitor (First Time Only)
```bash
npx cap init
```
When prompted, use these values:
- **App ID**: `app.lovable.cfe6147b09464545be3c63ab74b7f183`
- **App Name**: `HerbaScan`

#### 6. Add iOS and/or Android Platforms

**For iOS:**
```bash
npx cap add ios
npx cap update ios
```

**For Android:**
```bash
npx cap add android
npx cap update android
```

#### 7. Sync Your Code to Native Projects
```bash
npx cap sync
```

Run this command every time you pull new changes from GitHub!

#### 8. Run on Device/Emulator

**For iOS:**
```bash
npx cap run ios
```
Or open in Xcode:
```bash
npx cap open ios
```

**For Android:**
```bash
npx cap run android
```
Or open in Android Studio:
```bash
npx cap open android
```

## 🔄 Development Workflow

### Testing in Browser (Fast Iteration)
Your app works in the browser too! The camera will use web file inputs instead of native camera.
```bash
npm run dev
```

### Testing on Mobile with Live Reload
The app is configured to hot-reload from the Lovable sandbox URL. When you make changes in Lovable:
1. Changes appear instantly in browser
2. For mobile, just refresh the app or restart it

### After Git Pull
Every time you pull changes from GitHub:
```bash
npm install          # Install any new dependencies
npm run build        # Build the latest code
npx cap sync         # Sync to native platforms
```

## 📸 Native Features

### Camera Integration
- **Native Platform**: Uses device camera with native UI
- **Web Browser**: Falls back to file input
- Automatic detection with `isNative` flag
- Permission handling built-in

### Haptic Feedback
- Button presses provide tactile feedback
- Only activates on native platforms
- Enhances user experience

### Permissions
The app automatically requests:
- **Camera Permission**: To take photos
- **Photo Library Permission**: To choose existing photos

## 🎨 Mobile Optimizations

- ✅ Touch-friendly button sizes (minimum 44pt)
- ✅ Responsive layout for all screen sizes
- ✅ Safe area padding for notched devices
- ✅ Native-feeling interactions
- ✅ Optimized images and code splitting

## 📦 Building for Production

### iOS (App Store)

1. Open project in Xcode:
```bash
npx cap open ios
```

2. Configure signing & capabilities
3. Set bundle identifier
4. Archive and upload to App Store Connect

### Android (Google Play)

1. Open project in Android Studio:
```bash
npx cap open android
```

2. Configure signing config
3. Build signed APK/AAB
4. Upload to Google Play Console

## 🛠 Troubleshooting

### Camera Not Working
- Check permissions in device settings
- Verify `capacitor.config.ts` is correct
- Run `npx cap sync` after changes

### Build Errors
```bash
# Clean and rebuild
rm -rf dist node_modules
npm install
npm run build
npx cap sync
```

### iOS Signing Issues
- Open Xcode and configure signing team
- Enable automatic signing in project settings

### Android SDK Issues
- Open Android Studio
- Install required SDK versions (API 22+)
- Update Gradle if prompted

## 📚 Additional Resources

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Capacitor Camera Plugin](https://capacitorjs.com/docs/apis/camera)
- [iOS App Store Guidelines](https://developer.apple.com/app-store/guidelines/)
- [Google Play Guidelines](https://play.google.com/about/developer-content-policy/)

## 🎯 Next Steps

1. **Test on Real Device**: Run on your phone to test camera features
2. **Add App Icons**: Create icons for all required sizes
3. **Customize Splash Screen**: Design branded splash screen
4. **Add Offline Support**: Cache plant data locally
5. **Implement Analytics**: Track usage and improve UX

---

**Need Help?** Check the [Lovable documentation](https://docs.lovable.dev/features/cloud) or join the [Discord community](https://discord.com/channels/1119885301872070706/1280461670979993613)!
