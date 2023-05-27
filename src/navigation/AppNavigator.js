import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewsDetails from '../screens/NewsDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Card from '../components/Card';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Card" component={Card} options={{ title: 'Card' }} />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{ title: 'News Details' }}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Card">
        <Drawer.Screen name="Card" component={Card} />
        <Drawer.Screen name="PressBuzz" component={HomeNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
