import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function ExamHistoryScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('ExamHistoryDetailScreen')}>
        Go to ExamHistoryDetail
      </Text>
    </View>
  );
}

export default ExamHistoryScreen;

const styles = StyleSheet.create({});
