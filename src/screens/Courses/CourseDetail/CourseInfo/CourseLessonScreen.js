import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function CourseLessonScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('CourseProgress')}>
        Go to CourseProgress
      </Text>
    </View>
  );
}

export default CourseLessonScreen;

const styles = StyleSheet.create({});
