import React from 'react';
import { Text, View } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../utils';
import Styles from './style';

const Header = props => {
  return (
    <View style={Styles.container}>
      <View style={Styles.wrapper}>
        <TouchableNativeFeedback
          onPress={props.onPress}
          background={TouchableNativeFeedback.Ripple(
            props.rippleColor ? props.rippleColor : 'white', true
          )}
        >
          <Icon
            name='keyboard-arrow-left'
            size={responsiveFontSize(4)}
            color={colors.colorVariables.white}
          />
        </TouchableNativeFeedback>
      </View>
      <Text style={Styles.title}>{props.label}</Text>
    </View>
  )
}

export default Header;
