import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, ScrollView, PermissionsAndroid, Platform } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geocoder from 'react-native-geocoder-reborn';
import Geolocation from 'react-native-geolocation-service';
import { Gap, ListPark, Loading, SlideCard, TextField, } from '../../components';
import { colors } from '../../utils';
import { ILLogin, DummyCard1, DummyCard2 } from '../../assets';
import { GetParkingArea } from '../../actions';
import Styles from './style';

const DataCarousel = [
  {
    id: 1,
    title: 'Secured Parking Area',
    description: 'Start parking your vehicle in secured area.',
    url: ILLogin,
    backgroundColor: '#2091fe'
  },
  {
    id: 2,
    title: 'Parking Make Easy',
    url: DummyCard1,
    description: 'Don\'t worry if you don\'t get parking again.',
    backgroundColor: '#69de51'
  },
  {
    id: 3,
    title: 'Discount until 20%',
    url: DummyCard2,
    description: 'Get discount until 20% in weekend and holiday.',
    backgroundColor: '#9575cd'
  },
];

const HomePage = props => {
  const dispatch = useDispatch();
  const listPakingArea = useSelector(state => state.ParkingAreaReducer.getListParkingAreaData);
  const loadingParkingArea = useSelector(state => state.ParkingAreaReducer.getListParkingAreaLoading);
  const errorParkingArea = useSelector(state => state.ParkingAreaReducer.getListParkingAreaError);
  const getLocation = async () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      });
    }

    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      Geolocation.getCurrentPosition((success) => { console.log(success) }, (e) => { console.log(e) }, { timeout: 20000 });
    }
  }

  useEffect(() => {
    getLocation();
    dispatch(GetParkingArea());
  }, [])

  return (
    <>
      <View style={Styles.container}>
        <StatusBar backgroundColor={colors.colorVariables.greenLightDark1} barStyle="light-content" />
        <View style={Styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.header}>
              <View style={Styles.headerTextWrapper}>
                <Text style={Styles.textProfile}>Hi Tri Hariyadi,</Text>
                <Text style={Styles.textQuest}>Where would you like to park?</Text>
              </View>
              <Gap height={1.2} />
              <Field
                name='searchArea'
                placeholder='Search for destination, parking area.'
                iconName='search'
                autoCapitalize='none'
                component={TextField}
                radiusSize={1.5}
              />
            </View>
            <Gap height={2.5} />
            <SlideCard data={DataCarousel} />
            <Gap height={5} />
            <View style={Styles.sectionMap}>
              <Text style={Styles.textLabel}>Parking Nearby</Text>
              <Text style={Styles.textViewAll}>View All</Text>
            </View>
            <Gap height={2} />
            <View style={Styles.wrapperMap}>
              <MapView
              provider={PROVIDER_GOOGLE}
              style={Styles.map}
              region={{
                latitude: -6.260086,
                longitude: 107.012956,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              borderRadius={10}
            >
            </MapView>
            </View>
            {listPakingArea &&
              listPakingArea.map((item, idx) => {
                return <ListPark key={`list-park-${idx}`} data={item} />
              })
            }
            <Gap height={5} />
          </ScrollView>
        </View>
      </View>
      <Loading
        visible={loadingParkingArea}
        onRequestClose={() => navigation.goBack()}
      />
    </>
  )
}

export default reduxForm({
  form: 'formHome',
})(HomePage);
