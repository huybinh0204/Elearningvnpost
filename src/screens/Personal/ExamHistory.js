import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function ExamHistory({navigation}) {
  return (
    <View>
      <Text onPress={() => avigation.navigate('ExamHistoryDetail')}>Go to ExamHistoryDetail</Text>
    </View>
  );
}

export default ExamHistory;

const styles = StyleSheet.create({});
