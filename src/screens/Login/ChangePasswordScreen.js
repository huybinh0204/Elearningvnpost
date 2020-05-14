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

function ChangePasswordScreen({navigation}) {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('123');

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('1234');

  const [showReNewPassword, setReNewShowPassword] = useState(false);
  const [reNewPassword, setReNewPassword] = useState('1234');

  // Change password
  // Check Call Api change new password  Or call Api change pass for forgot password
  const changePassword = () => {
    // Fake action - you need set user_info and token for redux after call api success
    if (
      currentPassword.length < 1 ||
      newPassword.length < 1 ||
      reNewPassword.length < 1
    ) {
      Alert.alert('Error', string.VNString.empty);
    } else if (newPassword !== reNewPassword) {
      Alert.alert('Error', string.VNString.notCompare);
    } else {
      navigation.replace('BottomTab');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.Input}>
        <TextInput
          value={currentPassword}
          onChangeText={text => setCurrentPassword(text)}
          style={styles.txtInput}
          secureTextEntry={!showCurrentPassword}
          placeholder={string.VNString.placeholderCurrentPass}
        />
        <TouchableOpacity
          onPress={() => {
            setShowCurrentPassword(!showCurrentPassword);
          }}>
          <Image
            style={styles.imgPassword}
            source={showCurrentPassword ? images.eyeClose : images.eyeOpen}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.Input}>
        <TextInput
          value={newPassword}
          onChangeText={text => setNewPassword(text)}
          style={styles.txtInput}
          secureTextEntry={!showNewPassword}
          placeholder={string.VNString.placeholderNewPass}
        />
        <TouchableOpacity
          onPress={() => {
            setShowNewPassword(!showNewPassword);
          }}>
          <Image
            style={styles.imgPassword}
            source={showNewPassword ? images.eyeClose : images.eyeOpen}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.Input}>
        <TextInput
          value={reNewPassword}
          onChangeText={text => setReNewPassword(text)}
          style={styles.txtInput}
          secureTextEntry={!showReNewPassword}
          placeholder={string.VNString.placeholderReNewPass}
        />
        <TouchableOpacity
          onPress={() => {
            setReNewShowPassword(!showReNewPassword);
          }}>
          <Image
            style={styles.imgPassword}
            source={showReNewPassword ? images.eyeClose : images.eyeOpen}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.btnChangePass}
        onPress={() => changePassword()}>
        <Text style={styles.txtSigIn}>{string.VNString.btnChangePass} </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ChangePasswordScreen;

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
  btnChangePass: {
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
