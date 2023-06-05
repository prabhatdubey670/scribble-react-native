import { React, useCallback } from 'react';
import { ActivityIndicator, View } from 'react-native-web';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginState from './src/utils/LoginState';
import 'react-native-gesture-handler';
import Context from './src/Context/context';

let customFonts = {
  LibreBaskerville: require('./assets/fonts/LibreBaskerville-Regular.ttf'),
  LibreBaskervilleBold: require('./assets/fonts/LibreBaskerville-Bold.ttf'),
  LibreBaskervilleItalic: require('./assets/fonts/LibreBaskerville-Italic.ttf'),
};

export default function App() {
  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    return console.log('error');
  }

  return (
    <Context>
      <LoginState />
      {/* <LoginState /> */}
    </Context>
  );
}
