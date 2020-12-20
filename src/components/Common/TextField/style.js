import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { colors, customFont } from '../../../utils';

const Styles = StyleSheet.create({
  wrapper: (radiusSize, error) => ({
    flexDirection: 'row',
    backgroundColor: 'yellow',
    alignItems: 'center',
    backgroundColor: colors.colorVariables.white,
    borderRadius: responsiveHeight(radiusSize ? radiusSize : 16),
    width: responsiveWidth(80),
    paddingHorizontal: responsiveWidth(5),
    width: '100%',
    borderWidth: 1,
    borderColor: error ? 'red' : colors.colorVariables.whiteSmoke2
  }),
  errorHelper: {
    flexDirection: 'row-reverse',
    marginTop: responsiveHeight(0.5),
  },
  errorText: {
    color: 'red',
    textAlign: 'left',
    marginRight: responsiveWidth(4.5),
    fontSize: responsiveFontSize(1.5),
    fontFamily: customFont.secondary[400]
  },
  input: {
    fontFamily: customFont.secondary[300],
    width: '100%',
  }
});

export default Styles;
