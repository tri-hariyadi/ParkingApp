import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { customFont, colors } from '../../../utils';

const Styles = StyleSheet.create({
  imgCarousel: {
    width: responsiveWidth(38),
    height: responsiveHeight(14),
    position: 'absolute',
    right: 0,
    bottom: -16
  },
  card: (bgColor) => ({
    // flex: 1, 
    backgroundColor: bgColor,
    width: responsiveWidth(75),
    height: responsiveHeight(22),
    borderRadius: 10,
    marginHorizontal: -24
  }),
  cardBody: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  wrapperTextCard: {
    marginTop: responsiveHeight(2.5),
    marginLeft: responsiveWidth(3)
  },
  textTitleCard: {
    fontFamily: customFont.secondary[800],
    fontSize: responsiveFontSize(2),
    maxWidth: responsiveWidth(30),
    color: colors.colorVariables.white
  },
  textDescCard: {
    fontFamily: customFont.primary[400],
    fontSize: responsiveFontSize(1.4),
    maxWidth: responsiveWidth(37),
    color: colors.colorVariables.white
  },
  lineCard: {
    borderWidth: 0.5,
    borderColor: colors.colorVariables.white,
    marginBottom: 3
  },
  containerStylePagination: {
    backgroundColor: 'transparent',
    width: '100%',
    position: 'absolute',
    top: 145,
  },
  dotStyle: {
    width: 17,
    height: 7.5,
    borderRadius: 5,
    marginHorizontal: -5,
    backgroundColor: colors.colorVariables.black1,
  },
  inactiveDotStyle: {
    width: 11,
    height: 11,
  },
});

export default Styles;
