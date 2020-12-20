import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Switches from 'react-native-switches';
import { Field, reduxForm } from 'redux-form';
import { Dropdown, Button, Gap, Header, TextField } from '../../components';
import { colors } from '../../utils';
import Styles from './style';

const BookingPark = props => {
  const itemPark = props.route.params;
  const [applyPromoCode, setApplyPromoCode] = useState(false);
  return (
    <>
      <Header label='Booking Park Area' onPress={() => props.navigation.goBack()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="none"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Styles.container}>
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
            <Text style={Styles.label}>{itemPark.name}</Text>
          </View>
          <View style={Styles.list}>
            <Text style={Styles.label}>Park Location</Text>
            <Text style={Styles.label}>{itemPark.address}</Text>
          </View>
          <View style={Styles.list}>
            <Text style={Styles.label}>Total Price</Text>
            <Text style={Styles.label}>x Rp. {itemPark.price} per 1 Hour</Text>
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
            <Switches
              shape='pill'
              onChange={() => setApplyPromoCode(!applyPromoCode)}
              value={applyPromoCode}
              showText={false}
              sliderHeight={27}
              sliderWidth={50}
              buttonSize={20}
              animationDuration={200} />
          </View>
          {applyPromoCode &&
            <View>
              <Field
                name='promoCode'
                placeholder='Enter Code Promo'
                iconName='confirmation-number'
                component={TextField}
              />
              <Gap height={2} />
            </View>
          }
        </View>
        <Button
          background={colors.colorVariables.greenLighten2}
          borderRadius={10}
          textBold
          // iconName='edit'
          onPress={() => props.navigation.navigate('ActivePark', itemPark)}
        >
          Pay Rp. {itemPark.price} / 1 Hour
      </Button>
      </ScrollView>
    </>
  )
}

export default reduxForm({
  form: 'formBookingPark',
  enableReinitialize: true
})(BookingPark);
