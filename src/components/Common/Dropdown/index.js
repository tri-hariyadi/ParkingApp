import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../utils';
import Gap from '../Gap';
import Styles from './style'

const Dropdown = props => {
  let [minHeight, setMinHeight] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(54)).current;

  const toggle = () => {
    let initialValue = expanded ? maxHeight + minHeight : minHeight;
    let finalValue = expanded ? minHeight : maxHeight + minHeight;

    setExpanded(!expanded);
    animation.setValue(initialValue);
    Animated.spring(animation, {
      toValue: finalValue,
      useNativeDriver: false
    }).start();

    setTimeout(() => {
      if (props.onPress) {
        props.onPress();
      }
    }, 300)
  }

  const _setMaxHeight = (event) => {
    setMaxHeight(event.nativeEvent.layout.height);
  }

  const _setMinHeight = (event) => {
    setMinHeight(event.nativeEvent.layout.height);
    animation.setValue(event.nativeEvent.layout.height);
  }

  return (
    <Animated.View
      style={[Styles.container(props.noBackground), { height: animation }]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={toggle}
        onLayout={_setMinHeight}>
        <Gap height={1.2} />
        <View style={Styles.dropdownContentWrapper}>
          <View style={Styles.dropdownContentWrapper}>
            {props.labelIcon &&
              <>
                <Gap width={2.5} />
                <View style={Styles.iconWrapper}>
                  <Icon
                    name={props.labelIcon}
                    size={responsiveFontSize(3)}
                    color='#FFF'
                  />
                </View>
              </>
            }
            <Text style={Styles.label(props.noBackground)}>{props.label}</Text>
          </View>
          <View style={Styles.wrapperArrowValue}>
            <Text style={Styles.textValue}>{props.value}</Text>
            <Icon
              name={expanded ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
              size={responsiveFontSize(2.8)}
              color={colors.colorVariables.indigo1}
            />
            {!props.noBackground && <Gap width={5} />}
          </View>
        </View>
        <Gap height={1.2} />
      </TouchableOpacity>
      <View onLayout={_setMaxHeight} style={Styles.childrenWrapper(props.labelIcon, props.noBackground)}>
        {props.children}
      </View>
    </Animated.View>
  )
}

export default Dropdown;
