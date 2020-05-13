import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import SplashScreen from "../screens/Login/SplashScreen";
import Login from "../screens/Login/Login";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import NewsStack from "./NewsStack";
import PersonalStack from "./PersonalStack";
import CourseStack from "./CourseStack";
import ExamStack from "./ExamStack";

const Tab = createBottomTabNavigator()

function BottomTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Course" component={CourseStack}/>
            <Tab.Screen name="Exam" component={ExamStack}/>
            <Tab.Screen name="News" component={NewsStack}/>
            <Tab.Screen name="Personal" component={PersonalStack}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
