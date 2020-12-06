import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Gap, ListPark, SlideCard, TextField, } from '../../components';
import { colors } from '../../utils';
import { ILLogin, DummyCard1, DummyCard2 } from '../../assets';
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

const HomePage = () => {

  return (
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
            {/* <MapView
              provider={PROVIDER_GOOGLE}
              style={Styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              borderRadius={10}
              customMapStyle={{borderRadius: 20}}
            >
            </MapView> */}
          </View>
          <ListPark />
          <ListPark />
          <ListPark />
          <ListPark />
          <Gap height={5} />
        </ScrollView>
      </View>
    </View>
  )
}

export default reduxForm({
  form: 'formHome',
})(HomePage);
