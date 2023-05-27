import { React, useContext } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import 'react-native-gesture-handler';
import Context, { NewsContext } from './src/Context/context';

export default function App() {
  return (
    <Context>
      <AppNavigator />
    </Context>
  );
}
