import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {Colors, Metrics, String} from '../assets';
import images from '../assets/Images';
import metrics from '../assets/Metrics';

function NavHeaderWithSearchBar() {
  const [text, setText] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  return (
    <View style={styles.container}>
      {isSearch ? (
        <TouchableOpacity onPress={() => setIsSearch(!isSearch)}>
          <Image source={images.back} style={styles.iconBack} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <View style={styles.searchBar}>
        <View style={{flex: 1}}>
          <Image source={images.search} style={styles.iconSearch} />
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
              <Image source={images.cancelCircle} style={styles.iconCancel} />
            </TouchableOpacity>
          </View>
        ) : (
          <View />
        )}
      </View>
      {isSearch ? (
        <View />
      ) : (
        <TouchableOpacity style={styles.notifyButton}>
          <Image source={images.notification} style={styles.iconNotification} />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default NavHeaderWithSearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  iconBack: {
    width: metrics.icons.medium,
    height: metrics.icons.medium,
    tintColor: Colors.iconOutline,
    marginRight: metrics.baseMargin / 2,
  },
  iconSearch: {
    width: 16,
    height: 16,
    marginLeft: Metrics.baseMargin,
  },
  iconCancel: {
    width: metrics.icons.tiny,
    height: metrics.icons.tiny,
  },
  searchBar: {
    flexDirection: 'row',
    width: Metrics.screenWidth - 50,
    height: 30,
    backgroundColor: Colors.background,
    borderRadius: 10,
    alignItems: 'center',
  },
  notifyButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconNotification: {
    width: metrics.icons.medium,
    height: metrics.icons.medium,
    tintColor: Colors.iconOutline,
  },
});
