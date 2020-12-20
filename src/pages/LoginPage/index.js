import React, { useEffect, useState } from 'react';
import { View, Text, Image, StatusBar, ScrollView, Keyboard } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { Gap, TextField, Button, Link, AlertAwesome } from '../../components';
import { colors, storeData } from '../../utils';
import { ILLogin } from '../../assets';
import Styles from './style';
import { LoginValidation } from '../../config/Validation';
import { loginUser } from '../../actions';

const LoginPage = props => {
  const a = React.useRef();
  const b = React.useRef();
  const scrollViewRef = React.useRef();
  const [isOpen, setIsOpen] = useState(false);
  const keyboardShowListener = React.useRef(null);
  const keyboardHideListener = React.useRef(null);
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.AuthReducer.accessToken);
  const loginLoading = useSelector(state => state.AuthReducer.loginLoading);
  const loginError = useSelector(state => state.AuthReducer.loginError);
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    changeNavigationBarColor(colors.colorVariables.whiteSmoke3, true);
    keyboardShowListener.current = Keyboard.addListener('keyboardDidShow', () =>
      setIsOpen(true),
    );
    keyboardHideListener.current = Keyboard.addListener('keyboardDidHide', () =>
      setIsOpen(false),
    );

    if (loginError) setShowAlert({
      error: true,
      title: "Error",
      message: loginError,
      type: 'danger'
    });
    if (accessToken) setShowAlert({
      success: true,
      title: "Success",
      message: 'Successfully Logged In',
      type: 'success'
    });

    return () => {
      keyboardShowListener.current.remove();
      keyboardHideListener.current.remove();
    }
  }, [loginError, accessToken]);

  const onClick = async (data) => {
    const promise = await dispatch(loginUser(data));
    await Promise.resolve(promise).then(() => {
      if(accessToken) {
        console.log('Store Data');
        storeData('token', accessToken)
      }
    });
    props.navigation.replace('MainApp')
  }

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
              Login with your email and password registered in Parking Hero.
          </Text>
          </View>
          <Gap height={4} />
          <Field
            externalRef={a}
            name='username'
            placeholder='Enter Email/Username'
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
            name='password'
            placeholder='Enter Password'
            iconName='vpn-key'
            autoCapitalize='none'
            secureTextEntry={true}
            component={TextField}
          />
          <Gap height={3} />
          <Button
            type='primary'
            onPress={props.handleSubmit(onClick)}
            isLoading={loginLoading}
            background={loginLoading ? '#a5d6a7' : null}
          >
            Login
        </Button>
          <Gap height={2} />
          <Link
            desc="Don't have an Account ?"
            link='Sign Up'
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
  form: 'formLogin',
  validate: LoginValidation
})(LoginPage);
