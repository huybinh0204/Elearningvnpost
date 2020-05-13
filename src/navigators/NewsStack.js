import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NewsListScreen from '../screens/News/NewsListScreen';
import NewsDetailScreen from '../screens/News/NewsDetailScreen';

const Stack = createStackNavigator();
function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewsListScreen" component={NewsListScreen} />
      <Stack.Screen name="NewsDetailScreen" component={NewsDetailScreen} />
    </Stack.Navigator>
  );
}
export default NewsStack;
