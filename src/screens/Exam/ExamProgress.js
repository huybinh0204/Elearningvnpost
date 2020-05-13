import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function ExamProgress({navigation}) {
    return (
        <View>
            <Text onPress={() => navigation.navigate('ExamResult')}>ExamProgress</Text>
        </View>
    );
}

export default ExamProgress;

const styles = StyleSheet.create({});
