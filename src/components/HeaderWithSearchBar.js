import React, {Component, useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {Colors, Metrics} from '../assets';
import images from '../assets/Images';

function HeaderWithSearchBar() {
  const [text, setText] = useState('');
  const [isFocused, setFocused] = useState(false);
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          width: Metrics.screenWidth - 50,
          height: 40,
          backgroundColor: Colors.background,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Image
            source={images.search}
            style={{
              width: 16,
              height: 16,
              marginLeft: Metrics.baseMargin,
            }}
          />
        </View>
        <TextInput
          placeholder="Tìm kiếm cuộc trò chuyện"
          style={{flex: 8}}
          onChangeText={text => setText(text)}
          value={text}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => setText('')}>
            <Image
              source={images.cancelCircle}
              style={{width: 16, height: 16}}
            />
          </TouchableOpacity>
        </View>
      </View>
      {isFocused ? (
        <View />
      ) : (
        <View
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={images.notification}
            style={{width: 32, height: 32, tintColor: Colors.iconOutline}}
          />
        </View>
      )}
    </View>
  );
}

export default HeaderWithSearchBar;
