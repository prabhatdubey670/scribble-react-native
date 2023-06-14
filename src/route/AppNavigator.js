import * as React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
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

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#ffffff',
            height: 55,
          },
          tabBarActiveTintColor: '#FECE2F',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            title: 'Scribble',
            tabBarLabel: 'Home',
            tabBarIcon: () => <Feather name="home" size={24} color="black" />,
            headerTitleStyle: {
              position: 'absolute',
              left: 5,
              top: 16,
              fontFamily: 'LibreBaskerville',
            },
            headerStyle: {
              backgroundColor: 'transparent',
              elevation: 0,
            },
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => console.log('press')}>
                  <Image
                    style={{
                      width: 40,
                      height: 30,
                      position: 'relative',
                      left: 10,
                    }}
                    source={require('../../assets/components/logo-main.png')}
                  />
                </TouchableOpacity>
              );
            },
            headerRight: () => {
              return (
                <Image
                  style={{
                    width: 20,
                    height: 25,
                    position: 'relative',
                    right: 14,
                    top: 4.5,
                  }}
                  source={require('../../assets/components/screens/home-screen/Notification.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          component={Explore}
          name="Explore"
          options={{
            tabBarIcon: () => (
              <Image
                style={styles.image}
                source={require('../../assets/components/screens/home-screen/Search.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          component={Saved}
          name="Saved"
          options={{
            tabBarIcon: () => (
              <Image
                style={styles.image}
                source={require('../../assets/components/screens/home-screen/Bookmark-empty.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          component={Profile}
          name="Profile"
          options={{
            tabBarIcon: () => (
              <View style={{ borderRadius: 50, width: 30, height: 30 }}></View>
            ),
          }}
        />
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
