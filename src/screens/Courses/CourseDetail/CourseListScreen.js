import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colors from '../../../assets/Colors';
import NavHeaderWithTitle from '../../../components/NavHeaderWithTitle';
import string from '../../../assets/String';
import NavHeaderWithSearchBar from '../../../components/NavHeaderWithSearchBar';

function CourseListScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colors.navBackground,
      },
      headerTitle: () => {
        return (
          <NavHeaderWithSearchBar
            navigation={navigation}
            props={{
              goBack: false,
              headerTitle: string.VNString.placeholderSearchByCourseName,
            }}
          />
        );
      },
    });
  }, [navigation]);
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
