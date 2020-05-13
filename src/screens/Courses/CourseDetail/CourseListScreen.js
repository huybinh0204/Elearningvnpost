import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function CourseListScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('CourseInfoStack')}>
        Go to CourseInfo
      </Text>
      <Text onPress={() => navigation.navigate('CourseContentScreen')}>
        Go to CourseContent
      </Text>
      <Text onPress={() => navigation.navigate('CourseDiscussionScreen')}>
        Go to CourseDiscussion
      </Text>
      <Text onPress={() => navigation.navigate('CourseDocumentScreen')}>
        Go to CourseDocument
      </Text>
    </View>
  );
}

export default CourseListScreen;

const styles = StyleSheet.create({});
