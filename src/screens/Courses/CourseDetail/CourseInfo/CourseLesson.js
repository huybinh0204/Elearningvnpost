import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function CourseLesson({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('CourseProgress')}>Go to CourseProgress</Text>
    </View>
  );
}

export default CourseLesson;

const styles = StyleSheet.create({});
