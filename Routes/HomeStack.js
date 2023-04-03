import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import IntroScreen from '../screens/IntroScreen';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator()

function HomeStack() {

    return (
        <Stack.Navigator screenOptions={{ statusBarColor: 'teal', headerShown: false }}>
            <Stack.Group screenOptions={{
                headerStyle: { backgroundColor: "orange" },
                headerTintColor: 'white',
                headerTitle: 'Brought to you by Cyber-wolf',

            }}>
                <Stack.Screen name='Intro' component={IntroScreen} />
            </Stack.Group>
            <Stack.Screen name='HomeScreen' component={Home} options={{ headerBackTitleVisible: false }} />
            <Stack.Screen name='Details' component={Details} options={{ headerBackTitleVisible: true, headerShown: true }} />
        </Stack.Navigator>
    );
}

export default HomeStack;


