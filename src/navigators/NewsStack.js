import React, {Component} from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import NewsList from "../screens/News/NewsList";
import NewsDetail from "../screens/News/NewsDetail";

const Stack = createStackNavigator()
function NewsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="NewsList" component={NewsList}/>
            <Stack.Screen name="NewsDetail" component={NewsDetail}/>
        </Stack.Navigator>
    )
}
export default NewsStack;
