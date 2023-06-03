import { React, useCallback } from 'react';
import { ActivityIndicator, View } from 'react-native-web';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginState from './src/utils/LoginState';
import 'react-native-gesture-handler';
import Context from './src/Context/context';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    LibreBaskerville: require('./assets/fonts/LibreBaskerville-Regular.ttf'),
    LibreBaskervilleBold: require('./assets/fonts/LibreBaskerville-Bold.ttf'),
    LibreBaskervilleItalic: require('./assets/fonts/LibreBaskerville-Italic.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Context>
      <LoginState onLayout={onLayoutRootView} />
      {/* <LoginState /> */}
    </Context>
  );
}
