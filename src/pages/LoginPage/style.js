import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { customFont, colors } from '../../utils';

const Style = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.colorVariables.greenLightDark1
  },
  formLogin: {
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(10),
    backgroundColor: colors.colorVariables.white,
    paddingVertical: responsiveHeight(4),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  wrapperImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: (display) => ({
    width: responsiveHeight(110),
    height: responsiveWidth(40),
    display: display,
  }),
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
    fontSize: responsiveFontSize(1.7),
    color: colors.colorVariables.black1,
    fontFamily: customFont.primary[400],
  },
});

export default Style;
