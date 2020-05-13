import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function NewsList({navigation}) {
    return (
        <View>
            <Text onPress={() => navigation.navigate('NewsDetail')}>Go to NewsDetail</Text>
        </View>
    );
}

export default NewsList;

const styles = StyleSheet.create({});
