import React, {Component} from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import CourseList from "../screens/Courses/CourseDetail/CourseList";
import CourseInfoStack from "./CourseInfoStack";
import CourseContent from "../screens/Courses/CourseDetail/CourseContent";
import CourseDiscussion from "../screens/Courses/CourseDetail/CourseDiscussion";
import CourseDocument from "../screens/Courses/CourseDetail/CourseDocument";
import CourseNotify from "../screens/Courses/CourseNotify/CourseNotify";
import CourseNotifyDetails from "../screens/Courses/CourseNotify/CourseNotifyDetails";

const Stack = createStackNavigator()

function CourseStack() {
    return (
        <Stack.Navigator initialRouteName="CourseList">
            <Stack.Screen name="CourseList" component={CourseList}/>
            <Stack.Screen name="CourseInfoStack" component={CourseInfoStack} options={{headerShown: false}}/>
            <Stack.Screen name="CourseContent" component={CourseContent}/>
            <Stack.Screen name="CourseDiscussion" component={CourseDiscussion}/>
            <Stack.Screen name="CourseDocument" component={CourseDocument}/>
            <Stack.Screen name="CourseNotify" component={CourseNotify}/>
            <Stack.Screen name="CourseNotifyDetail" component={CourseNotifyDetails}/>
        </Stack.Navigator>
    );
}

export default CourseStack;
