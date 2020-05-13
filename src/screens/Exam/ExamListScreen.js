import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function ExamListScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('ExamDetail')}>ExamList</Text>
    </View>
  );
}

export default ExamListScreen;

const styles = StyleSheet.create({});
