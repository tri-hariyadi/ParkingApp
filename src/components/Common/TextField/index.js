import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import Styles from './style';
import Gap from '../Gap';
import { colors } from '../../../utils';

const TextField = ({
  iconName,
  multiline,
  placeholder,
  externalRef,
  keyboardType,
  blurOnSubmit,
  returnKeyType,
  autoCapitalize,
  secureTextEntry,
  onSubmitEditing,
  radiusSize,
  input: { onChange, ...restInput },
  meta: { error, warning, touched },
}) => {

  return (
    <View>
      <View style={Styles.wrapper(radiusSize, touched && error)}>
        <Icon
          name={iconName}
          size={responsiveFontSize(2.5)}
          color={touched && error ? 'red' : colors.colorVariables.indigo1}
        />
        <Gap width={2} />
        <TextInput
          {...restInput}
          ref={externalRef}
          value={restInput.value}
          placeholder={placeholder}
          blurOnSubmit={blurOnSubmit}
          returnKeyType={returnKeyType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChange}
          keyboardType={keyboardType}
          multiline={multiline}
          style={Styles.input}
        />
      </View>
      {touched && error &&
        <View style={Styles.errorHelper}>
          <Text style={Styles.errorText}>{error}</Text>
        </View>
      }
    </View>
  )
}

export default TextField;
