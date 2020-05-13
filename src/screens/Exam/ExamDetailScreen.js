import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function ExamDetailScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('ExamProgress')}>
        ExamDetail
      </Text>
    </View>
  );
}

export default ExamDetailScreen;

const styles = StyleSheet.create({});
