import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { colors, customFont } from '../../../utils';

const Styles = StyleSheet.create({
  wrapper: {
    borderRadius: responsiveHeight(16),
    overflow: 'hidden',
    alignSelf: 'stretch'
  },
  container: (background, type) => ({
    backgroundColor: background ? background : type === 'primary' ? colors.colorVariables.greenLightDark1 : colors.colorVariables.greenLighten,
    paddingVertical: responsiveHeight(2.3),
  }),
  text: (color) => ({
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8),
    color: color ? color : 'white',
    fontFamily: customFont.secondary[400]
  })
});

export default Styles;
