import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function ExamList({navigation}) {
    return (
        <View>
            <Text onPress={() => navigation.navigate('ExamDetail')}>ExamList</Text>
        </View>
    );
}

export default ExamList;

const styles = StyleSheet.create({});
