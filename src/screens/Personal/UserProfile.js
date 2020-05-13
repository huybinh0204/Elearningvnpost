import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function UserProfile({navigation}) {
    return (
        <View>
            <Text onPress={() => navigation.navigate('ExamHistory')}>UserProfile</Text>
        </View>
    );
}

export default UserProfile;

const styles = StyleSheet.create({});
