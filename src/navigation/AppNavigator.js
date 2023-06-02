import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Card from '../components/Card';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsDetails from '../screens/NewsDetails';
import Explore from '../screens/Explore';
import Saved from '../screens/Saved';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Card"
          component={Card}
          options={{
            title: 'Scribble',
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Image
                style={styles.navHome}
                source={require('../../assets/components/navigation-bottom/Home.png')}
              />
            ),
          }}
        />
        <Tab.Screen component={Explore} name="Explore" />
        <Tab.Screen component={Saved} name="Saved" />
        <Tab.Screen component={Profile} name="Profile" />
      </Tab.Navigator>
      {/* <NewsDetails name="NewsDetails" /> */}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  navHome: {
    width: 30,
    height: 30,
  },
});
