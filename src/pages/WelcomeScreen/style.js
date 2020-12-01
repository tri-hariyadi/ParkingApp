import { StyleSheet, Dimensions } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { customFont, colors } from '../../utils';

const DEVICE_HEIGHT = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  ItemRenderWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.colorVariables.whiteSmoke,
  },
  imageLogo: {
    width: responsiveWidth(80),
    height: responsiveHeight(35),
  },
  wrapperText: {
    paddingHorizontal: 30,
  },
  textTitle: {
    marginTop: responsiveHeight(-21),
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
  },
  arrowStyle: {
    backgroundColor: colors.colorVariables.greenLighten, 
    padding: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10, 
    top: DEVICE_HEIGHT * 33 / 100,
    fontFamily: customFont.primary[500]
  },
  rightArrowStyle: {
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(2),
    color: colors.colorVariables.whiteSmoke
  }
});

export default Styles;
