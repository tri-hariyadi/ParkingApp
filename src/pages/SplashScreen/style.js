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
    justifyContent: 'center',
    resizeMode: 'stretch',
  },
  imageLogo: {
    width: responsiveHeight(110),
    height: responsiveWidth(28),
    resizeMode: 'contain'
  },
  textLogo: {
    marginTop: responsiveHeight(3),
    fontSize: responsiveFontSize(3.2),
    color: colors.colorVariables.whiteSmoke,
    fontFamily: customFont.secondary[800]
  }
});

export default Style;
