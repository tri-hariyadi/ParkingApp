import { StyleSheet, Dimensions } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { customFont, colors } from '../../../utils';

const DEVICE_WIDTH = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    width: DEVICE_WIDTH * 90/100,
    backgroundColor: colors.colorVariables.white,
    padding: 15,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: colors.colorVariables.whiteSmoke2,
    marginHorizontal: 18,
    elevation: 5
  },
  sectionOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.colorVariables.whiteSmoke2,
    paddingBottom: 12
  },
  distanceText: {
    alignItems: 'flex-end',
  },
  parkingName: {
    fontFamily: customFont.secondary[800],
    fontSize: responsiveFontSize(1.9),
    textTransform: 'capitalize',
  },
  parkingPosition: {
    fontFamily: customFont.primary[400],
    fontSize: responsiveFontSize(1.5),
    marginTop: 6,
    textTransform: 'capitalize',
  },
  numberKm: {
    fontFamily: customFont.secondary[800],
    fontSize: responsiveFontSize(2)
  },
  textKm: {
    fontFamily: customFont.primary[500],
    fontSize: responsiveFontSize(1.5),
    marginTop: 6
  },
  sectionThree: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sectionFour: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textOpenNow: {
    fontFamily: customFont.primary[500],
    fontSize: responsiveFontSize(1.5),
    color: colors.colorVariables.greenLightDark1
  },
  textCloseAt: {
    fontFamily: customFont.primary[500],
    fontSize: responsiveFontSize(1.5),
    color: colors.colorVariables.black1
  },
  price: {
    fontFamily: customFont.secondary[800],
    fontSize: responsiveFontSize(1.8),
    color: colors.colorVariables.black1
  },
  slotsWrapper: {
    maxWidth: responsiveWidth(50)
  },
  buttonBookWrapper: {
    flex: 1,
    paddingLeft: responsiveWidth(10),
    alignItems: 'flex-end',
  },
  numberSlot: {
    fontFamily: customFont.secondary[800],
    fontSize: responsiveFontSize(2),
    color: colors.colorVariables.greenLightDark1
  },
  availableSlot: {
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(1.7),
    color: colors.colorVariables.greenLightDark1
  }
});

export default Styles;
