import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
// import assets for design view
import colors from '../../assets/Colors';
import * as Fonts from '../../assets/Fonts';
import metrics from '../../assets/Metrics';
import images from '../../assets/Images';
import string from '../../assets/String';

const CELL_COUNT = 6;

function ForgotPasswordCodeScreen({navigation}) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  // Verify code
  const VerifyCode = () => {
    // Compare code input and api
    if (value === '123456') {
      navigation.navigate('ChangePasswordScreen', {forgot: true});
    } else Alert.alert('Wrong code!');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.codeMess}>{string.VNString.fillCodeMess}</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        renderCell={({index, symbol, isFocused}) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.btnSent} onPress={() => VerifyCode()}>
        <Text style={styles.txtSent}>{string.VNString.btnVerify} </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgotPasswordCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: metrics.doubleBasePadding,
  },
  codeMess: {
    marginBottom: metrics.baseMargin * 4,
    textAlign: 'center',
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
  // code input
  root: {padding: 20, minHeight: 300},
  codeFiledRoot: {
    marginTop: 20,
  },
  cellRoot: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginLeft: 10,
  },
  cellText: {
    color: '#FCB71E',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 2,
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 1,
  },
});
