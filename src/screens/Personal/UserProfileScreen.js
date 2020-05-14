import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
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
    <View>
      <Text onPress={() => navigation.navigate('ExamHistoryScreen')}>
        UserProfile hello
      </Text>
    </View>
  );
}

export default UserProfileScreen;

const styles = StyleSheet.create({});
