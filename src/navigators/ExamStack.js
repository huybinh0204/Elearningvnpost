import React, {Component} from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import ExamList from "../screens/Exam/ExamList";
import ExamDetail from "../screens/Exam/ExamDetail";
import ExamProgress from "../screens/Exam/ExamProgress";
import ExamResult from "../screens/Exam/ExamResult";

const Stack = createStackNavigator()
function ExamStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen name="ExamList" component={ExamList}/>
            <Stack.Screen name="ExamDetail" component={ExamDetail}/>
            <Stack.Screen name="ExamProgress" component={ExamProgress}/>
            <Stack.Screen name="ExamResult" component={ExamResult}/>
        </Stack.Navigator>
    )
}

export default ExamStack;
