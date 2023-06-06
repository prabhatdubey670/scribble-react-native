import { View, Text, Image } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewsDetails from '../screens/NewsDetails';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function HomeNavigator({ navigate }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homecard"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
