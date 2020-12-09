import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth
} from "react-native-responsive-dimensions";
import { colors, customFont } from '../../../utils';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorVariables.whiteSmoke,
    overflow: 'hidden',
    borderRadius: 10,
  },
  dropdownContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    width: responsiveHeight(4.8),
    height: responsiveHeight(4.8),
    backgroundColor: colors.colorVariables.indigo1,
    borderRadius: responsiveHeight(4.8) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginLeft: responsiveWidth(3),
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(2),
    color: colors.colorVariables.indigo1,
    textTransform: 'capitalize',
  },
  childrenWrapper: {
    paddingHorizontal: responsiveWidth(14),
    paddingBottom: responsiveHeight(3)
  }
});

export default Styles;
