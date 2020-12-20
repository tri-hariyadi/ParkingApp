import React, { useEffect, useState } from 'react';
import { View, Text, Image, StatusBar, ScrollView, Keyboard, ImageBackground } from 'react-native';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { Gap, TextField, Button, Link, AlertAwesome } from '../../components';
import { colors, getData } from '../../utils';
import { ILSignup } from '../../assets';
import Styles from './style';
import { RegisterUser } from '../../actions';

const SignupPage = props => {
  const a = React.useRef();
  const b = React.useRef();
  const c = React.useRef();
  const d = React.useRef();
  const scrollViewRef = React.useRef();
  const [isOpen, setIsOpen] = useState(false);
  const keyboardShowListener = React.useRef(null);
  const keyboardHideListener = React.useRef(null);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const {
    registerUserData,
    registerUserLoading,
    registerUserError
  } = useSelector(state => ({
      registerUserData: state.AuthReducer.registerUserData,
      registerUserLoading: state.AuthReducer.registerUserLoading,
      registerUserError: state.AuthReducer.registerUserError
  }), shallowEqual);


  useEffect(() => {
    getData('token')
      .then(res => {
        // console.log('Local storage => ',res);
      });
    changeNavigationBarColor(colors.colorVariables.whiteSmoke3, true);
    keyboardShowListener.current = Keyboard.addListener('keyboardDidShow', () =>
      setIsOpen(true),
    );
    keyboardHideListener.current = Keyboard.addListener('keyboardDidHide', () =>
      setIsOpen(false),
    );

    if (registerUserData) setShowAlert({
      success: true,
      title: "Success",
      message: 'User was registered successfully',
      type: 'success'
    });

    if (registerUserError) setShowAlert({
      error: true,
      title: "Error",
      message: registerUserError,
      type: 'danger'
    });

    return () => {
      keyboardShowListener.current.remove();
      keyboardHideListener.current.remove();
    }
  }, [registerUserData, registerUserError]);

  const onSubmit = async (data) => {
    const promise = await dispatch(RegisterUser(data));
    await Promise.resolve(promise).then((res) => {
      props.navigation.replace('MainApp');
    })
  }

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
            name='phonenumber'
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
            onPress={props.handleSubmit(onSubmit)}
            isLoading={registerUserLoading}
          >
            Sign Up
        </Button>
          <Gap height={2} />
          <Link
            desc="Already have an Account ?"
            link='Login'
            onPress={() => props.navigation.navigate('SignupPage')}
          />
        </View>
      </ScrollView>
      <AlertAwesome
        showAlert={showAlert.error || showAlert.success}
        title={showAlert.title}
        message={showAlert.message}
        type={showAlert.type}
        showConfirmButton={true}
        confirmText="OK"
        onDismiss={() => setShowAlert({ error: false, success: false })}
        onConfirmPressed={() => setShowAlert({ error: false, success: false })}
      />
    </>
  )
}

export default reduxForm({
  form: 'formSignUpUser',
  // validate: LoginValidation
})(SignupPage);
