import React from 'react';
import { View, Text } from 'react-native';
import Styles from './style';

const ListPark = ({ styles, data }) => {
  return (
    <View style={[Styles.container, styles]}>
      <View style={Styles.parkSection}>
        <Text style={Styles.parkingName}>Parking Area GBK</Text>
        <View style={Styles.wrapperParkDesc}>
          <Text style={Styles.pricePark}>Rp 5000/hr</Text>
          <Text style={Styles.slots}>20 Slot Available</Text>
        </View>
      </View>
      <View style={Styles.kmDisplay}>
        <Text style={Styles.numberKm}>0.6</Text>
        <Text style={Styles.textKm}>Km away</Text>
      </View>
    </View>
  )
}

export default ListPark;
