import React, {Component} from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import UserProfile from "../screens/Personal/UserProfile";
import ExamHistory from "../screens/Personal/ExamHistory";
import ExamHistoryDetail from "../screens/Personal/ExamHistoryDetail";

const Stack = createStackNavigator()

function PersonalStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="UserProfile" component={UserProfile}/>
            <Stack.Screen name="ExamHistory" component={ExamHistory}/>
            <Stack.Screen name="ExamHistoryDetail" component={ExamHistoryDetail}/>
        </Stack.Navigator>
    )
}
export default PersonalStack;
