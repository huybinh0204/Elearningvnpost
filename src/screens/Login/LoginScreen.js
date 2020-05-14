import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';

// import assets for design view
import colors from '../../assets/Colors';
import * as Fonts from '../../assets/Fonts';
import metrics from '../../assets/Metrics';
import images from '../../assets/Images';
import string from '../../assets/String';

function LoginScreen({navigation}) {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('admin123');
  const [password, setPassword] = useState('123');
  // Check sigIn here
  const SigIn = () => {
    if (userName.length < 1 || password.length < 1) {
      Alert.alert('Enter your info');
    } else if (userName === 'admin123' && password === '123') {
      setPassword('');
      setUserName('');
      navigation.navigate('BottomTab');
    } else {
      Alert.alert('Your info not valid');
    }
  };
  // forgot pass
  const forgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen');
  };
  return (
    <View style={styles.container}>
      <Image source={images.logoRect} style={styles.logo} />
      <View style={styles.Input}>
        <TextInput
          value={userName}
          onChangeText={text => setUserName(text)}
          style={styles.txtInput}
          placeholder={string.VNString.placeholderUserName}
        />
      </View>

      <View style={styles.Input}>
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.txtInput}
          secureTextEntry={!showPassword}
          placeholder={string.VNString.placeholderPassword}
        />
        <TouchableOpacity
          onPress={() => {
            setShowPassword(!showPassword);
          }}>
          <Image
            style={styles.imgPassword}
            source={showPassword ? images.eyeClose : images.eyeOpen}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnSigIn} onPress={() => SigIn()}>
        <Text style={styles.txtSigIn}>{string.VNString.btnSigIn} </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => forgotPassword()}>
        <Text style={styles.forgotPassword}>
          {string.VNString.forgotPassword}
        </Text>
      </TouchableOpacity>
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
    paddingHorizontal: metrics.doubleBasePadding,
  },
  logo: {},
  txtInput: {flex: 7, borderRadius: metrics.borderRadiusButton},
  Input: {
    flexDirection: 'row',
    backgroundColor: colors.backgroundTextInput,
    borderRadius: metrics.borderRadiusButton,
    alignItems: 'center',
    width: metrics.screenWidth - 40,
    marginTop: metrics.doubleBaseMargin,
    paddingHorizontal: metrics.basePadding,
  },
  imgPassword: {height: metrics.icons.small, width: metrics.icons.small},
  btnSigIn: {
    backgroundColor: colors.activeButton,
    borderRadius: metrics.borderRadiusButton,
    width: metrics.screenWidth - 40,
    marginTop: metrics.doubleBaseMargin + 20,
    paddingVertical: metrics.basePadding,
    fontWeight: '700',
  },
  txtSigIn: {textAlign: 'center', color: colors.buttonTextActive},
  forgotPassword: {color: colors.link, marginTop: metrics.baseMargin + 20},
});
