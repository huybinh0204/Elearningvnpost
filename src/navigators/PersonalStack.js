import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import UserProfileScreen from '../screens/Personal/UserProfileScreen';
import ExamHistoryScreen from '../screens/Personal/ExamHistory';
import ExamHistoryDetailScreen from '../screens/Personal/ExamHistoryDetailScreen';

const Stack = createStackNavigator();

function PersonalStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
      <Stack.Screen name="ExamHistoryScreen" component={ExamHistoryScreen} />
      <Stack.Screen
        name="ExamHistoryDetail"
        component={ExamHistoryDetailScreen}
      />
    </Stack.Navigator>
  );
}
export default PersonalStack;