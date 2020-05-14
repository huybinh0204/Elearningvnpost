import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/Login/LoginScreen';
import ForgotPasswordCodeScreen from '../screens/Login/ForgotPasswordCodeScreen';
import ForgotPasswordScreen from '../screens/Login/ForgotPasswordScreen';
import SignUpScreen from '../screens/Login/SignUpScreen';
import ChangePasswordScreen from '../screens/Login/ChangePasswordScreen';

const Stack = createStackNavigator();

function SigInStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPasswordCodeScreen"
        component={ForgotPasswordCodeScreen}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
    </Stack.Navigator>
  );
}
export default SigInStack;
