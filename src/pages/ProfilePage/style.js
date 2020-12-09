import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { customFont, colors } from '../../utils';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.colorVariables.indigo1,
  },
  content: {
    flex: 1,
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.colorVariables.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(26),
    backgroundColor: colors.colorVariables.greenLightDark1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: responsiveWidth(5),
    justifyContent: 'space-between',
  },
  imageProfile: {
    width: responsiveWidth(25),
    borderRadius: responsiveWidth(25) / 2,
    height: responsiveHeight(15),
  },
  textProfileWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: responsiveWidth(5),
    justifyContent: 'flex-start',
  },
  textProfile: {
    alignItems: 'flex-end',
    fontFamily: customFont.secondary[800],
    fontSize: responsiveFontSize(2.7),
    color: colors.colorVariables.white,
    textTransform: 'capitalize',
  },
  moneyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: responsiveWidth(4)
  },
  iconMoneyWrapper: {
    width: responsiveHeight(4.8),
    height: responsiveHeight(4.8),
    backgroundColor: colors.colorVariables.redLight1,
    borderRadius: responsiveHeight(4.8) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMoney: {
    marginLeft: responsiveWidth(2),
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(2.3),
    color: colors.colorVariables.white,
    textTransform: 'capitalize',
  },
  body: {
    paddingHorizontal: responsiveWidth(5),
  },
  titleSection: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(2.4)
  },
  cardActive: {
    backgroundColor: colors.colorVariables.whiteSmoke,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: responsiveWidth(2.5),
    alignItems: 'center'
  },
  leftCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconActive: {
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c5cae9',
    borderRadius: 10,
    marginRight: responsiveWidth(4),
  },
  iconNonActive: {
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.colorVariables.redLighten1,
    borderRadius: 10,
    marginRight: responsiveWidth(4),
  },
  textPark: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(1.8)
  },
  textHours: {
    fontFamily: customFont.secondary[400],
  },
  wrapperViewActive: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewActive: {
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(1.7),
    color: '#1565c0',
    paddingRight: responsiveWidth(2),
    marginLeft: 5
  },
  vehicleText: {
    marginLeft: responsiveWidth(3),
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(2),
    color: colors.colorVariables.indigo1,
    textTransform: 'capitalize',
  },
  detailCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  detailLabel: {
    minWidth: responsiveWidth(19),
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(1.8)
  },
  separator: {
    marginHorizontal: responsiveWidth(5),
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(2)
  },
  detailItem: {
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(1.8)
  }
});

export default Styles;
