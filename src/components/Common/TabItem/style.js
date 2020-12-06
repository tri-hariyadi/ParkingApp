import { StyleSheet } from 'react-native';
import { colors, customFont } from '../../../utils';

export const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    width: '50%',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  text: (active) => ({
    fontSize: 11,
    color: active ? colors.colorVariables.green2 : colors.colorVariables.white,
    fontFamily: customFont.secondary[600],
    marginTop: 3
  })
})