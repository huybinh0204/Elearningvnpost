import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function UserProfileScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('ExamHistory')}>
        UserProfile
      </Text>
    </View>
  );
}

export default UserProfileScreen;

const styles = StyleSheet.create({});
