import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from '../screens/Login/SplashScreen';
import SigInStack from './SigInStack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();
function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SigInStack">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SigInStack"
          component={SigInStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
