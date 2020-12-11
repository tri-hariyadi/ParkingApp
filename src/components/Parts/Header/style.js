import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors, customFont } from '../../../utils';

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.colorVariables.greenLightDark1,
    paddingVertical: responsiveHeight(1),
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(2)
  },
  wrapper: {
    width: responsiveHeight(7),
    height: responsiveHeight(7),
    backgroundColor: colors.colorVariables.greenLightDark1,
    borderRadius: responsiveHeight(7) / 2, padding: responsiveHeight(0.5),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  title: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(2.4),
    marginLeft: responsiveWidth(3),
    color: colors.colorVariables.white
  }
});

export default Styles;
