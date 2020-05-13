import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function ExamProgressScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('ExamResult')}>
        ExamProgress
      </Text>
    </View>
  );
}

export default ExamProgressScreen;

const styles = StyleSheet.create({});
