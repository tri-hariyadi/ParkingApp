import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ILNullPhoto } from '../../assets';
import { Gap } from '../../components';
import Styles from './style';

const ProfilePage = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.content}>
        <View style={Styles.header}>
          <View>
            <Image
              source={ILNullPhoto}
              style={Styles.imageProfile}
              resizeMode='contain'
              resizeMethod='resize'
            />
          </View>
          <View style={Styles.textProfileWrapper}>
            <Text style={Styles.textProfile}>Tri Hariyadi</Text>
            <Text style={Styles.textEmailProfile}>trihariyadi24@gmail.com</Text>
            <View style={Styles.wrapperVehicleType}>
              <View style={Styles.motorCycle}>
                <View style={Styles.iconVehicleWrapper}>
                  <Icon
                    name='two-wheeler'
                    size={responsiveFontSize(3)}
                    color='#FFF'
                  />
                </View>
                <Text style={Styles.textVehicle}>CB 150 R</Text>
              </View>
              <View style={Styles.motorCycle}>
                <View style={Styles.iconVehicleWrapper}>
                  <Icon
                    name='directions-car'
                    size={responsiveFontSize(2.5)}
                    color='#FFF'
                  />
                </View>
                <Text style={Styles.textVehicle}>toyota avansa</Text>
              </View>
            </View>
          </View>
        </View>
        <Gap height={2.5} />
        <View style={Styles.body}>
          <Text style={Styles.titleSection}>Active Parking</Text>
          <Gap height={2} />
          <View style={Styles.cardActive}>
            <View style={Styles.leftCard}>
              <View style={Styles.iconActive}>
                <Icon
                  name='departure-board'
                  size={responsiveFontSize(4)}
                  color='#FFF'
                />
              </View>
              <View>
                <Text style={Styles.textPark}>Parking Area GBK</Text>
                <Text style={Styles.textHours}>5 Hours</Text>
              </View>
            </View>
            <View>
              <Text style={Styles.viewActive}>View</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProfilePage;
