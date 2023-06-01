import { View, Text } from 'react-native';
import { React, useContext } from 'react';
import { NewsContext } from '../Context/context';
import AppNavigator from '../navigation/AppNavigator';
import Auth from '../screens/Auth';

export default function LoginState() {
  const { isLoading, userToken } = useContext(NewsContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{userToken !== null ? <AppNavigator /> : <Auth />}</>;
}
