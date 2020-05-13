import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function ExamHistoryDetailScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('ExamHistory')}>
        Back to ExamHistory
      </Text>
    </View>
  );
}

export default ExamHistoryDetailScreen;

const styles = StyleSheet.create({});
