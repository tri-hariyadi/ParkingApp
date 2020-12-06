import { StyleSheet, Dimensions } from 'react-native';
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
    alignItems: 'flex-start',
    height: responsiveHeight(26),
    backgroundColor: colors.colorVariables.greenLightDark1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: responsiveWidth(5),
    justifyContent: 'space-between',
    paddingTop: responsiveHeight(5),
    // paddingBottom: responsiveHeight(6)
  },
  imageProfile: {
    width: responsiveWidth(25),
    borderRadius: responsiveWidth(25) / 2,
    height: responsiveHeight(15),
    // backgroundColor: 'yellow'
  },
  textProfileWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    // backgroundColor: 'yellow',
    paddingLeft: responsiveWidth(5),
    height: '100%',
    justifyContent: 'space-evenly'
  },
  textProfile: {
    // marginTop:15,
    alignItems: 'flex-end',
    fontFamily: customFont.secondary[800],
    fontSize: responsiveFontSize(2.7),
    color: colors.colorVariables.white,
    textTransform: 'capitalize',
  },
  textEmailProfile: {
    fontFamily: customFont.secondary[400],
    fontSize: responsiveFontSize(1.5),
    color: colors.colorVariables.white,
    textTransform: 'lowercase',
  },
  wrapperVehicleType: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -16,
  },
  iconVehicleWrapper: {
    width: responsiveHeight(4.8),
    height: responsiveHeight(4.8),
    backgroundColor: colors.colorVariables.redLight1,
    borderRadius: responsiveHeight(4.8) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  motorCycle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: responsiveWidth(4)
  },
  textVehicle: {
    marginLeft: responsiveWidth(2),
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(1.7),
    color: colors.colorVariables.white,
    textTransform: 'capitalize',
    maxWidth: responsiveWidth(22)
  },
  body: {
    paddingHorizontal: responsiveWidth(5),
  },
  titleSection: {
    fontFamily: customFont.secondary[800],
    fontSize: responsiveFontSize(2.25)
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
  textPark: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(1.8)
  },
  textHours: {
    fontFamily: customFont.secondary[400],
  },
  viewActive: {
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(1.7),
    color: '#1565c0',
    paddingRight: responsiveWidth(4),
  }
});

export default Styles;
