import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import BottomTabNavigator from "../../navigators/BottomTabNavigator";

function Login({navigation}) {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text onPress={() => navigation.navigate('BottomTab')}>Login</Text>
        </View>
    );
}

export default Login;
