import React, {Component, useEffect, useState} from 'react';
import {View, Text, Image, Touchable, StyleSheet} from 'react-native';

// import assets for design view
import colors from '../../assets/Colors';
import * as Fonts from '../../assets/Fonts';
import metrics from '../../assets/Metrics';
import images from '../../assets/Images';

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('BottomTab')}>Login</Text>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});
