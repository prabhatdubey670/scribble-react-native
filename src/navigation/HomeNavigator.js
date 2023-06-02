import { View, Text, Image } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from '../components/Card';
import NewsDetails from '../screens/NewsDetails';
const Stack = createNativeStackNavigator();
export default function HomeNavigator({ navigate }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Card"
        component={Card}
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
