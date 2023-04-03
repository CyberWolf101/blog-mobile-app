import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import About from './screens/About'
import IntroScreen from './screens/IntroScreen';
import Home from './screens/Home';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from './Routes/HomeStack';
import Favourites from './screens/Favorites';
import Cart from './screens/Cart';

//NOTE!! the reason we don't invoke functions in a onchange event or in an event listener is becuase we don't want the function to run immediately. we want it to run under a condition. if we want to do it, then we use an anonnymous function ()=>
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'teal', tabBarInactiveBackgroundColor: 'white', //active bg color is set here  
          tabBarStyle: {
            height: 85,
            display: 'flex'
          },
          tabBarIconStyle: {
            padding: 4,
          },
          headerShown: false,
          
        }}
      >
     
        <Tab.Screen name='Home' component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            headerShown:false,
            tabBarIcon: ({ color }) => {
              return <Ionicons name="home" size={29} color={color} />
            }
          }}
        />
           <Tab.Screen name='Intro' component={IntroScreen} options={{
          headerShown: false, tabBarStyle: { display: 'none' },
          tabBarIcon: ({ color }) => {
            return <Ionicons name="fast-food-sharp" size={29} color={color} />
          }
        }} />
        <Tab.Screen name='Search' component={About}
          options={{
            tabBarLabel: 'cart',
            tabBarLabelStyle: { display: 'none' },
            tabBarActiveBackgroundColor: 'white',
            tabBarIcon: () => (                            //we don't need curly braces or else we have to return
              <View style={{ height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderColor: 'teal', borderWidth: 2, top: -20, elevation: 80, borderRadius: 30, backgroundColor: 'white', }}>
                <Ionicons name="search" size={29} color='teal' />
              </View>
            )
          }}
        />
        <Tab.Screen name='Favorites' component={Favourites}
          options={{
            tabBarLabel: 'Favourites',
            headerShown:true,
            tabBarIcon: ({ color }) => {
              return <Ionicons name="heart" size={31} color={color} />
            }
          }}
        />
        <Tab.Screen name='Cart' component={Cart}
          options={{
            tabBarLabel: 'Cart',
            headerShown:true,
            tabBarIcon: ({ color }) => {
              return <Ionicons name="ios-cart" size={31} color={color} />
            }
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

