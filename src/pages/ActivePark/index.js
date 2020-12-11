import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ILGoogleMap } from '../../assets';
import { Gap, Header, Barcode } from '../../components';
import { colors } from '../../utils';
import Styles from './style';

const ActivePark = props => {
  return (
    <>
      <Header
        label="Active Park"
      />
      <ScrollView contentContainerStyle={Styles.container} showsVerticalScrollIndicator={false}>
        <View>
          <Animatable.View
            animation="bounceIn"
            easing="ease-in-out"
            duration={1000}
            delay={200}
          >
            <View style={Styles.wrapperCheckSuccess}>
              <Icon
                name='check-circle'
                size={responsiveFontSize(20)}
                color={colors.colorVariables.greenLighten2}
              />
              <Text style={Styles.textSuccess}>Parking Is Active</Text>
            </View>
          </Animatable.View>
          <Gap height={3} />
          <Text style={Styles.guideText}>
            <Text style={Styles.parkGuide}>Scanning Barcode to Park.</Text> Parking session will be expaired after you sacanning out the barcode code from Parking Area.
          </Text>
          <Gap height={2} />
          <Barcode value="Hello World" format="CODE128" />
          <Gap height={2} />
          <View style={Styles.bookingDetail}>
            <View style={Styles.iconDetailWrapper}>
              <View style={Styles.descWrapper}>
                <Icon
                  name='two-wheeler'
                  size={responsiveFontSize(3)}
                  color='#FFF'
                />
              </View>
              <Text style={Styles.textDetail}>cb 150 r</Text>
            </View>
            <View style={Styles.iconDetailWrapper}>
              <View style={Styles.descWrapper}>
                <Icon
                  name='call-to-action'
                  size={responsiveFontSize(3)}
                  color='#FFF'
                />
              </View>
              <Text style={Styles.textPlateLicense}>B 3362 FQZ</Text>
            </View>
            <View style={Styles.iconDetailWrapper}>
              <View style={Styles.descWrapper}>
                <Icon
                  name='departure-board'
                  size={responsiveFontSize(3)}
                  color='#FFF'
                />
              </View>
              <View>
                <Text style={Styles.textDetail}>Parking area gbk</Text>
                <Text style={[Styles.textParkAddress, Styles.textDetail]}>Asia Afrika, Jakrta Pusat</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={Styles.btNavigateWrapper}>
          <Image
            source={ILGoogleMap}
            resizeMode='contain'
            resizeMethod='resize'
            style={Styles.iconGoogleMap}
          />
          <Gap width={4} />
          <Text style={Styles.navigateText}>Navigate with Google Maps</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}

export default ActivePark;
