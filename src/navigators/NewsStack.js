import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NewsListScreen from '../screens/News/NewsListScreen';
import NewsDetailScreen from '../screens/News/NewsDetailScreen';
import {Colors} from '../assets';

const Stack = createStackNavigator();
function NewsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.navBackground,
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'white',
        },
        style: {
          elevation: 0,
        },
      }}>
      <Stack.Screen name="NewsListScreen" component={NewsListScreen} />
      <Stack.Screen name="NewsDetailScreen" component={NewsDetailScreen} />
    </Stack.Navigator>
  );
}
export default NewsStack;
