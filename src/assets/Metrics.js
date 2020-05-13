import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  borderRadiusButton: 30,
  borderRadiusCard: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  basePadding: 10,
  doubleBasePadding: 20,
  smallMargin: 5,
  smallPadding: 5,
  borderWeight: 0.5,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    listItem: 100,
    logo: 150,
    full: {width: width, height: (height * 9) / 16},
    margin: {
      width: width - 40,
      height: ((height - 40) * 9) / 16,
    },
  },
};

export default metrics;
