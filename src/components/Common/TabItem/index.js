import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { colors } from '../../../utils';

const TabItem = ({ title, active, onPress, onLongPress }) => {
  const IconTabMenu = () => {
    switch (title) {
      case 'Home':
        return (
          <Icon
            name='home'
            size={responsiveFontSize(2.5)}
            color={active ? colors.colorVariables.green2 : colors.colorVariables.white}
          />
        )
      case 'Parking':
        return (
          <Icon
            name='location-on'
            size={responsiveFontSize(2.5)}
            color={active ? colors.colorVariables.green2 : colors.colorVariables.white}
          />
        )
      case 'Account':
        return (
          <Icon
            name='person'
            size={responsiveFontSize(2.5)}
            color={active ? colors.colorVariables.green2 : colors.colorVariables.white}
          />
        )
      default:
        return null;
    }
  }

  return (
    <View style={styles.wrapper}>
      <TouchableNativeFeedback
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.container}
        background={TouchableNativeFeedback.Ripple('white')}
      >
        <View style={styles.container}>
          <IconTabMenu />
          <Text style={styles.text(active)}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default TabItem;
