import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function NewsDetailScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('NewsListScreen')}>
        Back to NewList
      </Text>
    </View>
  );
}

export default NewsDetailScreen;

const styles = StyleSheet.create({});
