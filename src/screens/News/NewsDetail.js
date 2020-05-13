import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function NewsDetail({navigation}) {
    return (
        <View>
            <Text onPress={() => navigation.navigate('NewsList')}>Back to NewList</Text>
        </View>
    );
}

export default NewsDetail;

const styles = StyleSheet.create({});
