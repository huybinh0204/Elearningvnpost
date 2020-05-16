import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from '../screens/Login/SplashScreen';
import SigInStack from './SigInStack';
import BottomTabNavigator from './BottomTabNavigator';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();
function HomeStack() {
  const user = useSelector(state => state);
  return (
    <NavigationContainer>
      {!user.isSignedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="SigInStack"
            component={SigInStack}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTab"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default HomeStack;
