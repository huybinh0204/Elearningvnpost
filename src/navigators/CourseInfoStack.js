import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import CourseListScreen from '../screens/Courses/CourseDetail/CourseListScreen';
import CourseLessonScreen from '../screens/Courses/CourseDetail/CourseInfo/CourseLessonScreen';
import CourseProgressScreen from '../screens/Courses/CourseDetail/CourseInfo/CourseProgressScreen';
import CourseInfoScreen from '../screens/Courses/CourseDetail/CourseInfo/CourseInfoScreen';

const Stack = createStackNavigator();

function CourseInfoStack() {
  return (
    <Stack.Navigator initialRouteName="CourseInfo">
      <Stack.Screen name="CourseList" component={CourseListScreen} />
      <Stack.Screen name="CourseInfo" component={CourseInfoScreen} />
      <Stack.Screen name="CourseLesson" component={CourseLessonScreen} />
      <Stack.Screen name="CourseProgress" component={CourseProgressScreen} />
    </Stack.Navigator>
  );
}

export default CourseInfoStack;
