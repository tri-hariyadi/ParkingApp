import React, { useEffect, useState } from 'react';
import { View, Text, Image, StatusBar, ScrollView, Keyboard } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { Gap, TextField, Button, Link } from '../../components';
import { colors } from '../../utils';
import { ILLogin } from '../../assets';
import Styles from './style';

const LoginPage = ({ navigation }) => {
  const a = React.useRef();
  const b = React.useRef();
  const scrollViewRef = React.useRef();
  const [isOpen, setIsOpen] = useState(false);
  const keyboardShowListener = React.useRef(null);
  const keyboardHideListener = React.useRef(null);

  useEffect(() => {
    changeNavigationBarColor(colors.colorVariables.whiteSmoke3, true);
    keyboardShowListener.current = Keyboard.addListener('keyboardDidShow', () =>
      setIsOpen(true),
    );
    keyboardHideListener.current = Keyboard.addListener('keyboardDidHide', () =>
      setIsOpen(false),
    );

    return () => {
      keyboardShowListener.current.remove();
      keyboardHideListener.current.remove();
    }
  }, []);

  return (
    <>
      <StatusBar backgroundColor={colors.colorVariables.greenLightDark1} barStyle="light-content" />
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="none"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Styles.container}
      >
        <View style={Styles.wrapperImage}>
          <Image
            source={ILLogin}
            resizeMode="contain"
            resizeMethod="resize"
            style={Styles.imageLogo(isOpen ? 'none' : 'flex')}
          />
        </View>
        <View style={Styles.formLogin}>
          <View style={Styles.textWrapper}>
            <Text style={Styles.textLogo}>Welcome Back</Text>
            <Text style={Styles.textDesc}>
              Login with your email and password registered in Park Hero.
          </Text>
          </View>
          <Gap height={4} />
          <Field
            externalRef={a}
            name='username'
            placeholder='Enter Email/Username'
            iconName='person-outline'
            autoCapitalize='none'
            component={TextField}
            returnKeyType='next'
            blurOnSubmit={false}
            onSubmitEditing={() => b.current.focus()}
          />
          <Gap height={3} />
          <Field
            externalRef={b}
            name='password'
            placeholder='Enter Password'
            iconName='vpn-key'
            autoCapitalize='none'
            component={TextField}
          />
          <Gap height={3} />
          <Button
            type='primary'
          onPress={() => navigation.navigate('MainApp')}
          >
            Login
        </Button>
          <Gap height={2} />
          <Link
            desc="Don't have an Account ?"
            link='Sign Up'
            onPress={() => navigation.navigate('SignupPage')}
          />
        </View>
      </ScrollView>
    </>
  )
}

export default reduxForm({
  form: 'formLogin',
  // validate: LoginValidation
})(LoginPage);
