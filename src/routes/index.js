import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SplashScreen,
  WelcomeScreen,
  LoginPage,
  SignupPage,
  HomePage,
  ProfilePage,
  ParkingPage,
  ActivePark,
  BookingPark,
  RegisterVehicle,
  AddSaldo,
  TransferPage
} from '../pages';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Parking" component={ParkingPage} />
      <Tab.Screen name="Account" component={ProfilePage} />
    </Tab.Navigator>
  )
}

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
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignupPage"
        component={SignupPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ActivePark"
        component={ActivePark}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookingPark"
        component={BookingPark}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterVehicle"
        component={RegisterVehicle}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddSaldo"
        component={AddSaldo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TransferPage"
        component={TransferPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default Routes;
