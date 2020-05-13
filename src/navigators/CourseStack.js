import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CourseListScreen from '../screens/Courses/CourseDetail/CourseListScreen';
import CourseInfoStack from './CourseInfoStack';
import CourseContentScreen from '../screens/Courses/CourseDetail/CourseContentScreen';
import CourseDiscussionScreen from '../screens/Courses/CourseDetail/CourseDiscussionScreen';
import CourseDocumentScreen from '../screens/Courses/CourseDetail/CourseDocumentScreen';
import CourseNotifyScreen from '../screens/Courses/CourseNotify/CourseNotifyScreen';
import CourseNotifyDetailsScreen from '../screens/Courses/CourseNotify/CourseNotifyDetailsScreen';

const Stack = createStackNavigator();

function CourseStack() {
  return (
    <Stack.Navigator initialRouteName="CourseListScreen">
      <Stack.Screen
        name="CourseInfoStack"
        component={CourseInfoStack}
        options={{headerShown: false}}
      />
      <Stack.Screen name="CourseListScreen" component={CourseListScreen} />
      <Stack.Screen
        name="CourseContentScreen"
        component={CourseContentScreen}
      />
      <Stack.Screen
        name="CourseDiscussionScreen"
        component={CourseDiscussionScreen}
      />
      <Stack.Screen
        name="CourseDocumentScreen"
        component={CourseDocumentScreen}
      />
      <Stack.Screen name="CourseNotifyScreen" component={CourseNotifyScreen} />
      <Stack.Screen
        name="CourseNotifyDetailScreen"
        component={CourseNotifyDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default CourseStack;
