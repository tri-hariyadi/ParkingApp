import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, ParkCard } from '../../components';
import { GetParkingArea } from '../../actions';
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
  const dispatch = useDispatch();
  const listPakingArea = useSelector(state => state.ParkingAreaReducer.getListParkingAreaData);
  const loadingParkingArea = useSelector(state => state.ParkingAreaReducer.getListParkingAreaLoading);
  const errorParkingArea = useSelector(state => state.ParkingAreaReducer.getListParkingAreaError);

  useEffect(() => {
    // dispatch(GetParkingArea());
  }, [])

  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.content}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={Styles.contentContainerStyle}>
            <View style={Styles.containerMap}>
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
              <ParkCard data={listPakingArea} navigation={navigation} />}
          </ScrollView>
        </View>
      </View>
      {/* <Loading
        visible={loadingParkingArea}
        onRequestClose={() => navigation.goBack()}
      /> */}
    </>
  )
}

export default ParkingPage;
