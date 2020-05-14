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

function ForgotPasswordScreen({navigation}) {
  const [email, setEmail] = useState('ttk@gmail.com');
  // Sent Code
  const sentCode = () => {
    // Call api get code
    // go fill CODE screen
    if (ValidateEmail(email)) {
      navigation.navigate('ForgotPasswordCodeScreen');
    }
  };
  const ValidateEmail = mail => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    Alert.alert('You have entered an invalid email address!');
    return false;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.emailMess}>{string.VNString.fillEmailMess}</Text>
      <View style={styles.Input}>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.txtInput}
          placeholder={string.VNString.placeholderFillEmail}
        />
      </View>

      <TouchableOpacity style={styles.btnSent} onPress={() => sentCode()}>
        <Text style={styles.txtSent}>{string.VNString.btnSent} </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: metrics.doubleBasePadding,
  },
  emailMess: {
    marginBottom: metrics.baseMargin * 4,
  },
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
  btnSent: {
    backgroundColor: colors.activeButton,
    borderRadius: metrics.borderRadiusButton,
    width: metrics.screenWidth - 40,
    marginTop: metrics.doubleBaseMargin + 20,
    paddingVertical: metrics.basePadding,
    fontWeight: '700',
  },
  txtSent: {textAlign: 'center', color: colors.buttonTextActive},
});
