import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ExamListScreen from '../screens/Exam/ExamListScreen';
import ExamDetailScreen from '../screens/Exam/ExamDetailScreen';
import ExamProgressScreen from '../screens/Exam/ExamProgressScreen';
import ExamResultScreen from '../screens/Exam/ExamResultScreen';

const Stack = createStackNavigator();
function ExamStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ExamListScreen" component={ExamListScreen} />
      <Stack.Screen name="ExamDetailScreen" component={ExamDetailScreen} />
      <Stack.Screen name="ExamProgressScreen" component={ExamProgressScreen} />
      <Stack.Screen name="ExamResultScreen" component={ExamResultScreen} />
    </Stack.Navigator>
  );
}

export default ExamStack;
