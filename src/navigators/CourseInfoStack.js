import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import CourseList from "../screens/Courses/CourseDetail/CourseList";

import CourseLesson from "../screens/Courses/CourseDetail/CourseInfo/CourseLesson";
import CourseProgress from "../screens/Courses/CourseDetail/CourseInfo/CourseProgress";
import CourseInfo from "../screens/Courses/CourseDetail/CourseInfo/CourseInfo";

const Stack = createStackNavigator()

function CourseInfoStack() {
    return (
        <Stack.Navigator initialRouteName="CourseInfo">
            <Stack.Screen name="CourseList" component={CourseList}/>

            <Stack.Screen name="CourseInfo" component={CourseInfo}/>
            <Stack.Screen name="CourseLesson" component={CourseLesson}/>
            <Stack.Screen name="CourseProgress" component={CourseProgress}/>
        </Stack.Navigator>
    );
}

export default CourseInfoStack;
