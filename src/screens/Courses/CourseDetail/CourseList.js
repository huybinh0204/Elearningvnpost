import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function CourseList({navigation}) {
    return (
        <View>
            <Text onPress={() => navigation.navigate('CourseInfoStack')}>Go to CourseInfo</Text>
            <Text onPress={() => navigation.navigate('CourseContent')}>Go to CourseContent</Text>
            <Text onPress={() => navigation.navigate('CourseDiscussion')}>Go to CourseDiscussion</Text>
            <Text onPress={() => navigation.navigate('CourseDocument')}>Go to CourseDocument</Text>
        </View>
    );
}

export default CourseList;

const styles = StyleSheet.create({});
