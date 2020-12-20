import { StyleSheet } from 'react-native';
import { colors, customFont } from '../../../utils';

const styles = StyleSheet.create({
  contentContainerStyle: (showImageLoading) => ({
    paddingTop: 15,
    width: showImageLoading ? null : '75%',
    borderRadius: 15
  }),
  alertButtonStyle: {
    paddingHorizontal: 22,
    marginLeft: 10,
    fontFamily: customFont.secondary[600]
  },
  alertTitleStyle: {
    marginTop: 57,
    color: colors.colorVariables.indigo1,
    textAlign: 'center',
    fontFamily: customFont.secondary[700],
    fontSize: 21
  },
  messageStyle: {
    textAlign: 'center',
    fontFamily: customFont.secondary[400]
  },
  alertImageStyle: {
    marginTop: -140
  }
})

export default styles;
