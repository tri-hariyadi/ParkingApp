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
    alignItems: 'center',
    padding: responsiveWidth(5),
    backgroundColor: colors.colorVariables.white,
    justifyContent: 'space-between'
  },
  wrapperCheckSuccess: {
    alignItems: 'center'
  },
  textSuccess: {
    fontFamily: customFont.secondary[800],
    fontSize: responsiveFontSize(3.6),
    color: colors.colorVariables.indigo1
  },
  guideText: {
    fontFamily: customFont.primary[400],
    fontSize: responsiveFontSize(1.8),
    textAlign: 'center',
    lineHeight: 27
  },
  parkGuide: {
    fontFamily: customFont.primary[700]
  },
  btNavigateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveWidth(2),
    borderWidth: 1,
    borderColor: colors.colorVariables.whiteSmoke2,
    borderRadius: 10,
    width: '100%'
  },
  iconGoogleMap: {
    width: responsiveWidth(7),
    height: responsiveHeight(4),
  },
  navigateText: {
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(1.9),
  },
  bookingDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  iconDetailWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: responsiveWidth(4),
    paddingVertical: responsiveHeight(1),
  },
  descWrapper: {
    width: responsiveHeight(4.8),
    height: responsiveHeight(4.8),
    backgroundColor: colors.colorVariables.redLight1,
    borderRadius: responsiveHeight(4.8) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDetail: {
    marginLeft: responsiveWidth(2),
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(1.8),
    color: colors.colorVariables.indigo1,
    textTransform: 'capitalize',
  },
  textPlateLicense: {
    marginLeft: responsiveWidth(2),
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(1.8),
    color: colors.colorVariables.indigo1,
    textTransform: 'uppercase'
  },
  textParkAddress: {
    fontFamily: customFont.secondary[400],
    fontSize: responsiveFontSize(1),
  }
});

export default Styles;
