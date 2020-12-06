import { StyleSheet, Dimensions } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { customFont, colors } from '../../utils';

const DEVICE_WIDTH = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.colorVariables.indigo1,
  },
  content: {
    backgroundColor: colors.colorVariables.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  header: {
    paddingHorizontal: responsiveWidth(4),
    marginTop: responsiveHeight(2)
  },
  headerTextWrapper: {
    marginLeft: responsiveWidth(1.3),
  },
  textProfile: {
    fontFamily: customFont.secondary[400],
    fontSize: responsiveFontSize(2)
  },
  textQuest: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(2.5)
  },
  imgCarousel: {
    width: responsiveWidth(38),
    height: responsiveHeight(14),
    position: 'absolute',
    right: 0,
    bottom: -16
  },
  card: {
    backgroundColor: colors.colorVariables.blue1,
    width: responsiveWidth(75),
    height: responsiveHeight(22),
    borderRadius: 10,
    marginHorizontal: -24
  },
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
    top: 300,
  },
  dotStyle: {
    width: 17,
    height: 7.5,
    borderRadius: 5,
    marginHorizontal: -5,
    backgroundColor: colors.colorVariables.redLight1,
  },
  inactiveDotStyle: {
    width: 11,
    height: 11,
  },
  sectionMap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(5),
  },
  textLabel: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(2.4)
  },
  textViewAll: {
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(1.7),
    color: colors.colorVariables.greenLightDark1
  },
  wrapperSection: {
    paddingHorizontal: responsiveWidth(4),
  },
  wrapperMap: {
    // ...StyleSheet.absoluteFillObject,
    height: responsiveHeight(25),
    width: DEVICE_WIDTH * 92.3 / 100,
    marginHorizontal: responsiveWidth(4),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    backgroundColor: 'yellow',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: colors.colorVariables.whiteSmoke2
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Styles;
