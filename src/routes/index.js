import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SplashScreen,
  WelcomeScreen
} from '../pages';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName='SplashScreen'>
      <Stack.Screen 
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default Routes;
