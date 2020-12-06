import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { customFont, colors } from '../../../utils';

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveWidth(3),
    borderBottomWidth: 1,
    borderColor: colors.colorVariables.whiteSmoke2,
  },
  kmDisplay: {
    alignItems: 'flex-end',
  },
  numberKm: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(2)
  },
  textKm: {
    fontFamily: customFont.primary[500],
    fontSize: responsiveFontSize(1.5)
  },
  parkSection: {
    minWidth: responsiveWidth(54),
    minHeight: responsiveWidth(12),
  },
  parkingName: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(1.85)
  },
  wrapperParkDesc: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(0.7),
    height: responsiveHeight(2)
  },
  pricePark: {
    fontFamily: customFont.secondary[400],
    fontSize: responsiveFontSize(1.8)
  },
  slots: {
    fontFamily: customFont.secondary[600],
    color: colors.colorVariables.greenLightDark1,
    fontSize: responsiveFontSize(1.8)
  }
});

export default Styles;
