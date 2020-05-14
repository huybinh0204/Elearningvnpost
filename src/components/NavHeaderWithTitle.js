import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

// import assets for design view
import colors from '../assets/Colors';
import Fonts from '../assets/Fonts';
import metrics from '../assets/Metrics';
import images from '../assets/Images';
import string from '../assets/String';

function NavHeaderWithTitle({navigation, props}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => {
          if (props.goBack) navigation.goBack();
        }}>
        {props.goBack && <Image style={styles.navIcon} source={images.back} />}
      </TouchableOpacity>

      <Text style={styles.txtHeader}>{props.headerTitle}</Text>
      {/* Add some icon, text here */}
      <View style={{flex: 1}} />
    </View>
  );
}

export default NavHeaderWithTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: metrics.screenWidth,
  },
  txtHeader: {
    flex: 8,
    fontWeight: '700',
    color: colors.textNavHeader,
    textAlign: 'center',
    fontSize: Fonts.size.navHeader,
  },
  navIcon: {
    tintColor: colors.textNavHeader,
    height: metrics.icons.medium,
    width: metrics.icons.medium,
  },
});
