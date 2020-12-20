import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { customFont, colors } from '../../utils';

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.colorVariables.white,
    paddingHorizontal: responsiveWidth(4)
  },
  wrapperCheckSuccess: {
    alignItems: 'center'
  },
  textSuccess: {
    fontFamily: customFont.secondary[800],
    fontSize: responsiveFontSize(3.6),
    color: colors.colorVariables.indigo1
  },
  textAttention: {
    fontFamily: customFont.primary[400],
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8),
    lineHeight: 27
  },
  textSection: {
    fontFamily: customFont.secondary[800],
    fontSize: responsiveFontSize(2),
    color: colors.colorVariables.indigo1
  },
  wrapperUploadImage: {
    height: responsiveHeight(25),
    marginHorizontal: responsiveWidth(4),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    backgroundColor: colors.colorVariables.whiteSmoke,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: colors.colorVariables.indigo1
  },
  uploadImage: {
    width: '100%',
    height: '100%',
  }
});

export default Styles;
