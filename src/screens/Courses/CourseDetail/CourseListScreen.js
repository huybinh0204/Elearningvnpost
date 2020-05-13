import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function CourseListScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('CourseInfoStack')}>
        Go to CourseInfo
      </Text>
      <Text onPress={() => navigation.navigate('CourseContent')}>
        Go to CourseContent
      </Text>
      <Text onPress={() => navigation.navigate('CourseDiscussion')}>
        Go to CourseDiscussion
      </Text>
      <Text onPress={() => navigation.navigate('CourseDocument')}>
        Go to CourseDocument
      </Text>
    </View>
  );
}

export default CourseListScreen;

const styles = StyleSheet.create({});
