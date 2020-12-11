import { tsPropertySignature } from '@babel/types';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dropdown, Button, Gap, Header } from '../../components';
import { colors } from '../../utils';
import Styles from './style';

const BookingPark = props => {
  return (
    <>
      <Header label='Booking Park Area' onPress={() => props.navigation.goBack()} />
      <View style={Styles.container}>
        <View>
          <View style={Styles.listDropdown}>
            <Dropdown
              label="Vehicle Model"
              noBackground
              value="CB 150 R"
            >
              <TouchableOpacity>
                <Text style={Styles.textDropdown}>CB 150 R</Text>
              </TouchableOpacity>
              <Gap height={1.5} />
              <TouchableOpacity>
                <Text style={Styles.textDropdown}>Toyota Avansa</Text>
              </TouchableOpacity>
            </Dropdown>
          </View>
          <View style={Styles.list}>
            <Text style={Styles.label}>License Plate</Text>
            <Text style={Styles.label}>B 9955 QDE</Text>
          </View>
          <View style={Styles.list}>
            <Text style={Styles.label}>Park Name</Text>
            <Text style={Styles.label}>Parking Area GBK</Text>
          </View>
          <View style={Styles.list}>
            <Text style={Styles.label}>Park Location</Text>
            <Text style={Styles.label}>Jakarta</Text>
          </View>
          <View style={Styles.list}>
            <Text style={Styles.label}>Total Price</Text>
            <Text style={Styles.label}>x Rp. 5000 per 1 Hour</Text>
          </View>
          <View style={Styles.listDropdown}>
            <Dropdown
              label="Payment"
              noBackground
              value='Cash On The Spot'
            >
              <TouchableOpacity>
                <Text style={Styles.textDropdown}>Cash On The Spot</Text>
              </TouchableOpacity>
              <Gap height={1.5} />
              <TouchableOpacity>
                <Text style={Styles.textDropdown}>Pay with Park Wallet</Text>
              </TouchableOpacity>
            </Dropdown>
          </View>
          <View style={Styles.lastList}>
            <Text style={Styles.label}>Apply a Promocode</Text>
          </View>
        </View>
        <Button
          background={colors.colorVariables.greenLighten2}
          borderRadius={10}
          textBold
          // iconName='edit'
          onPress={() => console.log('Hello')}
        >
          Pay Rp. 5000 / 1 Hour
      </Button>
      </View>
    </>
  )
}

export default BookingPark;
