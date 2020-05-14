import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import NavHeaderWithTitle from '../../components/NavHeaderWithTitle';

// import assets for design view
import colors from '../../assets/Colors';
import * as Fonts from '../../assets/Fonts';
import metrics from '../../assets/Metrics';
import images from '../../assets/Images';
import string from '../../assets/String';

function UserProfileScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colors.navBackground,
      },
      headerTitle: () => {
        return (
          <NavHeaderWithTitle
            navigation={navigation}
            props={{goBack: false, headerTitle: string.VNString.profile}}
          />
        );
      },
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.userAvatar} />
      <Text style={{margin: 10}}>Tên người dùng: vnpost</Text>
      <Text style={{margin: 5}}>Email: vnpost@gmail.com</Text>
      <TouchableOpacity style={styles.btnSigIn}>
        <Text style={styles.txtSigIn}>Xem lịch sử thi </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnChangePassLogOut}>
        <Text style={styles.txtLogOut}>{string.VNString.btnChangePass}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnChangePassLogOut}>
        <Text style={styles.txtLogOut}>{string.VNString.btnLogOut}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: metrics.doubleBasePadding,
  },
  userAvatar: {
    width: metrics.icons.xxl,
    height: metrics.icons.xxl,
    elevation: 4,
  },

  btnSigIn: {
    backgroundColor: colors.activeButton,
    borderRadius: metrics.borderRadiusButton,
    width: metrics.screenWidth - 40,
    marginTop: metrics.doubleBaseMargin + 20,
    paddingVertical: metrics.basePadding,
    fontWeight: '700',
  },
  btnChangePassLogOut: {
    backgroundColor: colors.background,
    borderRadius: metrics.borderRadiusButton,
    borderColor: colors.borderButton,
    borderWidth: 1,
    width: metrics.screenWidth - 40,
    marginTop: metrics.doubleBaseMargin + 10,
    paddingVertical: metrics.basePadding,
    fontWeight: '700',
  },
  txtSigIn: {
    textAlign: 'center',
    color: colors.buttonTextActive,
    fontWeight: '700',
  },
  txtLogOut: {
    textAlign: 'center',
    color: colors.activeButton,
    fontWeight: '700',
  },
});
