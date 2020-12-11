import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors, customFont } from '../../utils';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.colorVariables.white,
    paddingBottom: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(5)
  },
  list: {
    borderBottomWidth: 1,
    borderBottomColor: colors.colorVariables.whiteSmoke2,
    paddingVertical: responsiveHeight(2.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lastList: {
    borderBottomWidth: 0,
    paddingVertical: 5
  },
  label: {
    marginHorizontal: responsiveWidth(1.6),
    fontFamily: customFont.secondary[600],
    fontSize: responsiveFontSize(2),
    color: colors.colorVariables.indigo1,
  },
  listDropdown: {
    borderBottomWidth: 1,
    borderBottomColor: colors.colorVariables.whiteSmoke2,
    paddingVertical: responsiveHeight(1.1),
    paddingHorizontal: responsiveWidth(2)
  },
  textDropdown: {
    marginRight: 10,
    fontFamily: customFont.secondary[600],
  }
});

export default Styles;
