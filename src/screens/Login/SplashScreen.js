import React, {Component, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import images from '../../assets/Images';
import colors from '../../assets/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/actions/loginAction';
import {loading} from '../../redux/actions/loadingAction';

function SplashScreen({navigation}) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(loading());
    }, 1000);
  });
  return (
    <View
      style={{
        backgroundColor: colors.activeButton,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{
          width: 250,
          height: 150,
        }}
        source={images.logoRect}
      />
    </View>
  );
}

export default SplashScreen;
