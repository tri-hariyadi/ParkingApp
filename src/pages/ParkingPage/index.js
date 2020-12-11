import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { ParkCard } from '../../components';
import Styles from './style';

const DataCarousel = [
  {
    id: 1,
    title: 'Secured Parking Area',
    description: 'Start parking your vehicle in secured area.',
    // url: ILLogin,
    backgroundColor: '#2091fe'
  },
  {
    id: 2,
    title: 'Parking Make Easy',
    // url: DummyCard1,
    description: 'Don\'t worry if you don\'t get parking again.',
    backgroundColor: '#69de51'
  },
  {
    id: 3,
    title: 'Discon until 20%',
    // url: DummyCard2,
    description: 'Get discount until 20% in weekend and holiday.',
    backgroundColor: '#cddc39'
  },
];

const ParkingPage = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.content}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={Styles.contentContainerStyle}>
          <View style={Styles.containerMap}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={Styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              borderRadius={10}
            >
            </MapView>
          </View>
          <ParkCard data={DataCarousel} navigation={() => navigation.navigate('BookingPark')} />
        </ScrollView>
      </View>
    </View>
  )
}

export default ParkingPage;
