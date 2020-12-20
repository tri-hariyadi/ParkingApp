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
    paddingHorizontal: responsiveWidth(3),
  },
  title: {
    fontFamily: customFont.secondary[700],
    fontSize: responsiveFontSize(2.5),
    color: colors.colorVariables.indigo1
  },
  textLabel: {
    fontFamily: customFont.primary[500],
    fontSize: responsiveFontSize(1.7),
    color: colors.colorVariables.greenLighten,
    marginLeft: responsiveWidth(2),
    marginBottom: responsiveHeight(1.2)
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.colorVariables.white,
    borderColor: colors.colorVariables.whiteSmoke2,
  },
  cardBody: (borderBottom) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(1.3),
    borderBottomWidth: borderBottom,
    borderColor: colors.colorVariables.whiteSmoke2
  }),
  imageBank: {
    width: responsiveWidth(15),
    height: responsiveHeight(5)
  },
  textAttention: {
    fontFamily: customFont.primary[500],
    color: colors.colorVariables.indigo1,
    padding: responsiveHeight(1),
    lineHeight: 27
  }
});

export default Styles;
