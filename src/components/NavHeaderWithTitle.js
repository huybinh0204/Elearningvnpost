import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

// import assets for design view
import colors from '../assets/Colors';
import Fonts from '../assets/Fonts';
import metrics from '../assets/Metrics';
import images from '../assets/Images';
import string from '../assets/String';

// Check action goBack() with params props.goBack from parent
function NavHeaderWithTitle({navigation, props}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => {
          if (props.goBack) {
            navigation.goBack();
          }
        }}>
        {props.goBack && <Image style={styles.navIcon} source={images.back} />}
      </TouchableOpacity>
      <Text style={styles.txtHeader}>{props.headerTitle}</Text>
      <View style={{flex: 1}}>{/* add more button */}</View>
    </View>
  );
}

export default NavHeaderWithTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0,
    flex: 1,
  },
  txtHeader: {
    fontWeight: '700',
    color: colors.textNavHeader,
    textAlign: 'center',
    flex: 8,
    fontSize: Fonts.size.navHeader,
  },
  navIcon: {
    tintColor: colors.textNavHeader,
    height: metrics.icons.medium,
    width: metrics.icons.medium,
    borderRadius: metrics.icons.medium,
  },
});
