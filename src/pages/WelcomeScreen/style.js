import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { customFont, colors } from '../../utils';

const Styles = StyleSheet.create({
  ItemRenderWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.colorVariables.white,
  },
  imageLogo: {
    width: responsiveWidth(80),
    height: responsiveHeight(35),
  },
  wrapperText: {
    paddingHorizontal: 30,
  },
  textTitle: {
    marginTop: responsiveHeight(-13),
    fontSize: responsiveFontSize(2.5),
    color: colors.colorVariables.black1,
    fontFamily: customFont.secondary[800],
    textAlign:'center',
    marginBottom: responsiveHeight(2)
  },
  textDesc: {
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(2),
    color: colors.colorVariables.black1,
    fontFamily: customFont.primary[400],
    textAlign: 'center'
  }
});

export default Styles;
