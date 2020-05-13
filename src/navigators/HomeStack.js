import React, {Component, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import SplashScreen from "../screens/Login/SplashScreen";
import Login from "../screens/Login/Login";
import SignUp from "../screens/Login/SignUp";
import BottomTabNavigator from "./BottomTabNavigator";
const Stack = createStackNavigator()
function HomeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="Signup" component={SignUp} options={{headerShown: false}}/>
                <Stack.Screen name="BottomTab" component={BottomTabNavigator} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HomeStack;
