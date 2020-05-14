import React, {Component, useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import {Colors, Metrics, String} from '../assets';
import images from '../assets/Images';

function NavHeaderWithSearchBar() {
  const [text, setText] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10}}>
      {isSearch ? (
        <TouchableOpacity onPress={() => setIsSearch(!isSearch)}>
          <Image
            source={images.back}
            style={{width: 16, height: 16, tintColor: Colors.iconOutline}}
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <View
        style={{
          flexDirection: 'row',
          width: Metrics.screenWidth - 50,
          height: 30,
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
        <View
          style={{flex: 8}}
          onStartShouldSetResponder={() => setIsSearch(true)}>
          {isSearch ? (
            <TextInput
              placeholder={String.VNString.placeholderSearchByCourseName}
              style={{height: 30, paddingVertical: 0}}
              autoFocus={true}
              onChangeText={text => setText(text)}
              value={text}
            />
          ) : (
            <Text>{String.VNString.placeholderSearchByCourseName}</Text>
          )}
        </View>
        {text.length > 0 ? (
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => setText('')}>
              <Image
                source={images.cancelCircle}
                style={{width: 16, height: 16}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View />
        )}
      </View>
      {isSearch ? (
        <View />
      ) : (
        <TouchableOpacity
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
        </TouchableOpacity>
      )}
    </View>
  );
}

export default NavHeaderWithSearchBar;
