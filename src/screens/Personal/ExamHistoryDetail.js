import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function ExamHistoryDetail({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('ExamHistory')}>Back to ExamHistory</Text>
    </View>
  );
}

export default ExamHistoryDetail;

const styles = StyleSheet.create({});
