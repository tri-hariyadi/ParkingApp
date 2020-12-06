import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';
import { responsiveWidth } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: responsiveWidth(7),
    // paddingVertical: 2,
    backgroundColor: colors.colorVariables.indigo1
  }
})