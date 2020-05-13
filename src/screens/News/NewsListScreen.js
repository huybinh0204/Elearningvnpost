import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function NewsListScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('NewsDetailScreen')}>
        Go to NewsDetail
      </Text>
    </View>
  );
}

export default NewsListScreen;

const styles = StyleSheet.create({});
