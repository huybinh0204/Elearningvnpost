import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import CourseListScreen from '../screens/Courses/CourseDetail/CourseListScreen';
import CourseLessonScreen from '../screens/Courses/CourseDetail/CourseInfo/CourseLessonScreen';
import CourseProgressScreen from '../screens/Courses/CourseDetail/CourseInfo/CourseProgressScreen';
import CourseInfoScreen from '../screens/Courses/CourseDetail/CourseInfo/CourseInfoScreen';

const Stack = createStackNavigator();

function CourseInfoStack() {
  return (
    <Stack.Navigator initialRouteName="CourseInfoScreen">
      <Stack.Screen name="CourseListScreen" component={CourseListScreen} />
      <Stack.Screen name="CourseInfoScreen" component={CourseInfoScreen} />
      <Stack.Screen name="CourseLessonScreen" component={CourseLessonScreen} />
      <Stack.Screen
        name="CourseProgressScreen"
        component={CourseProgressScreen}
      />
    </Stack.Navigator>
  );
}

export default CourseInfoStack;
