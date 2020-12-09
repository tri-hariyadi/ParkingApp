import React from 'react';
import { View, Text } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../utils';
import Styles from './style';

const Button = ({
  onPress,
  children,
  background,
  type,
  color,
  rippleColor,
  borderRadius,
  textBold,
  iconName
}) => {

  const onPressing = () => {
    if (onPress) {
      onPress();
    }
  }

  return (
    <View style={Styles.wrapper(borderRadius)}>
      <TouchableNativeFeedback
        onPress={onPressing}
        background={TouchableNativeFeedback.Ripple(
          rippleColor ? rippleColor : 'white', true
        )}
      >
        <View style={Styles.container(background, type)}>
          {iconName &&
            <Icon
              name={iconName}
              size={responsiveFontSize(2.8)}
              color={colors.colorVariables.white}
              style={Styles.icon}
            />
          }
          <Text style={Styles.text(color, textBold)}>{children}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default Button;
