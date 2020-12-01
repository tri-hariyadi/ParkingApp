import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { Gap, TextField, Button, Link } from '../../components';
import { colors } from '../../utils';
import { ILLogin } from '../../assets';
import Styles from './style';

const LoginPage = () => {
  const a = React.useRef();
  const b = React.useRef();

  useEffect(() => {
    changeNavigationBarColor(colors.colorVariables.whiteSmoke3, true);
  }, [])

  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor={colors.colorVariables.greenLightDark1} barStyle="light-content" />
      <View style={Styles.wrapperImage}>
        <Image
          source={ILLogin}
          resizeMode="contain"
          resizeMethod="resize"
          style={Styles.imageLogo}
        />
      </View>
      <View style={Styles.formLogin}>
        <View style={Styles.textWrapper}>
          <Text style={Styles.textLogo}>Welcome Back</Text>
          <Text style={Styles.textDesc}>
            Login with your email and password registered in Park Here.
          </Text>
        </View>
        <Gap height={4} />
        <Field
          externalRef={a}
          name='username'
          placeholder='Enter Username'
          iconName='person-outline'
          autoCapitalize='none'
          component={TextField}
          returnKeyType='next'
          blurOnSubmit={false}
          onSubmitEditing={() => b.current.focus()}
        />
        <Gap height={3} />
        <Field
          externalRef={a}
          name='username'
          placeholder='Enter Username'
          iconName='vpn-key'
          autoCapitalize='none'
          component={TextField}
          returnKeyType='next'
          blurOnSubmit={false}
          onSubmitEditing={() => b.current.focus()}
        />
        <Gap height={3} />
        <Button
          type='primary'
          // onPress={props.handleSubmit(onClick)}
        >
          Login
        </Button>
        <Gap height={2} />
        <Link
          desc="Don't have an Account ?"
          link='Sign Up'
          // onPress={() => props.navigation.navigate('SignUp')}
        />
      </View>
    </View>
  )
}

export default reduxForm({
  form: 'formLogin',
  // validate: LoginValidation
})(LoginPage);
