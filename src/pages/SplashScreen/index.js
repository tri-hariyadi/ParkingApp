import React, { useEffect } from 'react';
import { Text, Image, StatusBar, ImageBackground } from 'react-native';
import { hideNavigationBar, showNavigationBar } from 'react-native-navigation-bar-color';
import * as Animatable from 'react-native-animatable';
import Styles from './style';
import { AnimateLogo, fromBottom } from '../../utils';
import { ILBackgroundSplash, ILParkingLogo } from '../../assets';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    hideNavigationBar();
    setTimeout(() => {
      navigation.replace('WelcomeScreen');
    }, 3000);

    return () => {
      showNavigationBar();
    }
  }, [navigation])
  return (
    <ImageBackground source={ILBackgroundSplash} style={Styles.container}>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <Animatable.View
        animation={AnimateLogo}
        easing="ease-out"
        duration={1100}
      >
        <Image source={ILParkingLogo} style={Styles.imageLogo} />
      </Animatable.View>
      <Animatable.View
        animation={fromBottom}
        easing="ease-out"
        duration={1500}
      >
        <Text style={Styles.textLogo}>Parking Hero</Text>
      </Animatable.View>
    </ImageBackground>
  )
}

export default SplashScreen;
