import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { customFont, colors } from '../../utils';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.colorVariables.greenLightDark1
  },
  formLogin: {
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(10),
    backgroundColor: colors.colorVariables.white,
    // paddingTop: responsiveHeight(3),
    // paddingBottom: responsiveHeight(6),
    paddingVertical: responsiveHeight(4),
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  wrapperImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {
    width: responsiveHeight(110),
    height: responsiveWidth(40),
  },
  textWrapper: {
    // marginLeft: 15
  },
  textLogo: {
    marginTop: responsiveHeight(3),
    fontSize: responsiveFontSize(3.2),
    color: colors.colorVariables.black1,
    fontFamily: customFont.secondary[800],
  },
  textDesc: {
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(1.8),
    color: colors.colorVariables.black1,
    fontFamily: customFont.primary[400],
  },
});

export default Style;
