import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import UserProfileScreen from '../screens/Personal/UserProfileScreen';
import ExamHistoryScreen from '../screens/Personal/ExamHistoryScreen';
import ExamHistoryDetailScreen from '../screens/Personal/ExamHistoryDetailScreen';
import {Colors} from '../assets';

const Stack = createStackNavigator();

function PersonalStack() {
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
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
      <Stack.Screen name="ExamHistoryScreen" component={ExamHistoryScreen} />
      <Stack.Screen
        name="ExamHistoryDetailScreen"
        component={ExamHistoryDetailScreen}
      />
    </Stack.Navigator>
  );
}
export default PersonalStack;
