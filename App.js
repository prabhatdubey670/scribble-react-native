import { React, useContext } from 'react';
import { ActivityIndicator, View } from 'react-native-web';
import LoginState from './src/utils/LoginState';
import 'react-native-gesture-handler';
import Context, { NewsContext } from './src/Context/context';

export default function App() {
  return (
    <Context style={{ backgroundColor: '#ffffff' }}>
      <LoginState />
    </Context>
  );
}
