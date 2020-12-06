import { StyleSheet, Dimensions } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { customFont, colors } from '../../utils';

const width= Dimensions.get('window').width;
const height= Dimensions.get('window').height;

const Style = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.colorVariables.greenLightDark1
  },
  formLogin: {
    paddingHorizontal: responsiveWidth(10),
    backgroundColor: colors.colorVariables.white,
    paddingVertical: responsiveHeight(2),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  wrapperImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: (display) => ({
    width: width,
    height: height * 35/100,
    position: display === 'none' ? 'relative' : 'absolute',
    zIndex: -1,
    display: display,
  }),
  textWrapper: {
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
