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
    backgroundColor: colors.colorVariables.whiteSmoke,
  },
  wrapperSection: {
    paddingHorizontal: responsiveWidth(4),
  },
  title: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(2.8),
    color: colors.colorVariables.indigo1,
  },
  transferIllustration: {
    alignItems: 'center',
    backgroundColor: colors.colorVariables.greenLightDark1,
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(3)
  },
  imgTransfer: {
    width: responsiveWidth(76),
    height: responsiveHeight(28),
  },
  imageBank: {
    width: responsiveWidth(17),
    height: responsiveHeight(7)
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(1.5),
    backgroundColor: colors.colorVariables.white,
    borderRadius: 10,
    marginTop: -responsiveHeight(5)
  },
  changeBank: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textChangeBank: {
    fontFamily: customFont.primary[600],
    color: colors.colorVariables.blue1,
    marginRight: responsiveWidth(1.5)
  },
  textLabel: {
    fontFamily: customFont.primary[600],
    color: colors.colorVariables.indigo1,
    fontSize: responsiveFontSize(1.8),
  },
  accountNumber: {
    fontFamily: customFont.secondary[700],
    color: colors.colorVariables.indigo1,
    fontSize: responsiveFontSize(2.5),
    color: colors.colorVariables.orangeAccent1
  },
  wrapperGuide: {
    flexGrow: 1,
    backgroundColor: colors.colorVariables.white,
    paddingHorizontal: responsiveWidth(4),
  },
  btnClipboard: {
    borderWidth: 1,
    borderColor: colors.colorVariables.blue1,
    padding: responsiveHeight(1.5),
    borderRadius: 5
  },
  textClipBoard: {
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(1.5),
    color: colors.colorVariables.blue1,
  },
  wrapperTextInstruction: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textInstruction: {
    fontFamily: customFont.primary[400],
    lineHeight: 28
  }
});

export default Styles;
