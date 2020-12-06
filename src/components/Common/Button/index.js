import React from 'react';
import { View, Text } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Styles from './style';

const Button = ({
  onPress,
  children,
  background,
  type,
  color,
  rippleColor,
  borderRadius,
  textBold
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
          <Text style={Styles.text(color, textBold)}>{children}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default Button;
