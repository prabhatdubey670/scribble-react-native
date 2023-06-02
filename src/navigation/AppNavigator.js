import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NewsDetails from '../screens/NewsDetails';
import Explore from '../screens/Explore';
import Saved from '../screens/Saved';
import Profile from '../screens/Profile';
import HomeNavigator from './HomeNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  const NewsdetailsNav = ({ navigation }) => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="NewsDetails" component={NewsDetails} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          // headerShown: false,
          // tabBarLabel: false,
          tabBarStyle: {
            backgroundColor: '#ffffff',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            title: 'Scribble',
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Image
                style={styles.image}
                source={require('../../assets/components/navigation-bottom/Home.png')}
              />
            ),
            headerTitleStyle: {
              position: 'absolute',
              left: 18,
            },
            headerStyle: {
              backgroundColor: 'transparent',
              elevation: 0,
            },
          }}
        />
        <Tab.Screen component={Explore} name="Explore" />
        <Tab.Screen component={Saved} name="Saved" />
        <Tab.Screen component={Profile} name="Profile" />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
  container: {
    backgroundColor: '#ffffff',
  },
});
