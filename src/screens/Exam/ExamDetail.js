import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function ExamDetail({navigation}) {
    return (
        <View>
            <Text onPress={() => navigation.navigate('ExamProgress')}>ExamDetail</Text>
        </View>
    );
}

export default ExamDetail;

const styles = StyleSheet.create({});
