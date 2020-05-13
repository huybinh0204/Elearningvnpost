import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function CourseInfoScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('CourseLesson')}>
        Go to CourseLesson
      </Text>
    </View>
  );
}

export default CourseInfoScreen;

const styles = StyleSheet.create({});
