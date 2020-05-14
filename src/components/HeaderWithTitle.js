import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Colors, Fonts} from '../assets';

function HeaderWithTitle({route}) {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text
        style={{
          textAlign: 'center',
          color: Colors.navHeaderTitleText,
          fontSize: Fonts.size.h5,
        }}>
        Khoá học
      </Text>
    </View>
  );
}

export default HeaderWithTitle;
