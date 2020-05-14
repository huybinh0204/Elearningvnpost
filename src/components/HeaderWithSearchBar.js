import React, {Component, useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {Colors, Metrics} from '../assets';
import images from '../assets/Images';

function HeaderWithSearchBar() {
  const [text, setText] = useState('');
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          flexDirection: 'row',
          width: 250,
          height: 40,
          backgroundColor: Colors.background,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <Image
          source={images.search}
          style={{
            width: 16,
            height: 16,
            marginLeft: Metrics.baseMargin,
          }}
        />
        <TextInput
          placeholder="Tìm kiếm cuộc trò chuyện"
          style={{width: 200}}
          onChangeText={text => setText(text)}
        />
        <Image source={images.cancelCircle} style={{width: 16, height: 16}} />
      </View>
      <View
        style={{
          width: 40,
          height: 40,
          marginLeft: Metrics.doubleBaseMargin,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={images.notification}
          style={{width: 32, height: 32, tintColor: Colors.iconOutline}}
        />
      </View>
    </View>
  );
}

export default HeaderWithSearchBar;
