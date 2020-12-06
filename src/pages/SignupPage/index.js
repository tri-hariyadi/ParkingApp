import React, { useEffect, useState } from 'react'
import { View, Text, Image, StatusBar, ScrollView, Keyboard, ImageBackground } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { Gap, TextField, Button, Link } from '../../components';
import { colors } from '../../utils';
import { ILSignup } from '../../assets';
import Styles from './style';

const SignupPage = ({ navigation }) => {
  const a = React.useRef();
  const b = React.useRef();
  const c = React.useRef();
  const d = React.useRef();
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
      <StatusBar 
        backgroundColor={isOpen ? colors.colorVariables.greenLightDark1 : "transparent"} 
        translucent={!isOpen} 
        barStyle={isOpen ? "light-content" : "dark-content"}
      />
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="none"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Styles.container}
      >
        <View style={Styles.wrapperImage}>
          <Image
            source={ILSignup}
            style={Styles.imageLogo(isOpen ? 'none' : 'flex')}
          />
        </View>
        <View style={Styles.formLogin}>
          <View style={Styles.textWrapper}>
            <Text style={Styles.textLogo}>Register Account</Text>
            <Text style={Styles.textDesc}>
              Make your new account in Park Hero.
          </Text>
          </View>
          <Gap height={4} />
          <Field
            externalRef={a}
            name='username'
            placeholder='Enter full name'
            iconName='person'
            autoCapitalize='none'
            component={TextField}
            returnKeyType='next'
            blurOnSubmit={false}
            onSubmitEditing={() => b.current.focus()}
          />
          <Gap height={3} />
          <Field
            externalRef={b}
            name='email'
            placeholder='Enter email address'
            iconName='mail'
            autoCapitalize='none'
            component={TextField}
            returnKeyType='next'
            blurOnSubmit={false}
            onSubmitEditing={() => c.current.focus()}
          />
          <Gap height={3} />
          <Field
            externalRef={c}
            name='phone'
            placeholder='Enter phone number'
            iconName='phone'
            autoCapitalize='none'
            component={TextField}
            returnKeyType='next'
            blurOnSubmit={false}
            onSubmitEditing={() => d.current.focus()}
          />
          <Gap height={3} />
          <Field
            externalRef={d}
            name='password'
            placeholder='Enter Password'
            iconName='vpn-key'
            autoCapitalize='none'
            component={TextField}
          />
          <Gap height={3} />
          <Button
            type='secondary'
          // onPress={props.handleSubmit(onClick)}
          >
            Sign Up
        </Button>
          <Gap height={2} />
          <Link
            desc="Already have an Account ?"
            link='Login'
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
})(SignupPage);
