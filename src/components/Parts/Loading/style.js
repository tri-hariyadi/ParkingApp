import { StyleSheet } from 'react-native';
import { colors, customFont } from '../../../utils';

export const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#252525',
    fontFamily: customFont.primary[600],
    marginTop: 20
  },
  image: {
    width: 75,
    height: 75
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: colors.colorVariables.whiteSmoke
  },
  activityIndicatorWrapper: {
    backgroundColor: 'transparent',
    paddingHorizontal: 23,
    paddingVertical: 13,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
  }
})
