import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ILNullPhoto } from '../../assets';
import { Gap } from '../../components';
import { colors, fromBottom, fromTopCard } from '../../utils';
import Styles from './style';

const ProfilePage = () => {
  const [activePark, setActivePark] = useState(false);
  const [detailMotorCycle, setDetailMotorCycle] = useState(false);
  const [detailCar, setDetailCar] = useState(false);

  const viewDetailMotorCycle = () => {
    setDetailMotorCycle(!detailMotorCycle);
  }

  const viewDetaiCar = () => {
    setDetailCar(!detailCar);
  }

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
          {activePark ?
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
              <View style={Styles.wrapperViewActive}>
                <Icon
                  name='visibility'
                  size={responsiveFontSize(2.5)}
                  color={colors.colorVariables.blue1}
                />
                <Text style={Styles.viewActive}>View</Text>
              </View>
            </View>
            :
            <View style={Styles.cardActive}>
              <View style={Styles.leftCard}>
                <View style={Styles.iconNonActive}>
                  <Icon
                    name='no-transfer'
                    size={responsiveFontSize(4)}
                    color='#FFF'
                  />
                </View>
                <View>
                  <Text style={Styles.textPark}>There is no Active Park</Text>
                  <Text style={Styles.textHours}>0 Hours</Text>
                </View>
              </View>
              <View style={Styles.wrapperViewActive}>
                <Icon
                  name='visibility-off'
                  size={responsiveFontSize(2.8)}
                  color={colors.colorVariables.redLighten1}
                />
              </View>
            </View>
          }
          <Gap height={2} />
          <Text style={Styles.titleSection}>Vehicle</Text>
          <Gap height={2} />
          <TouchableOpacity style={Styles.motorCycleProfile} onPress={viewDetailMotorCycle}>
            <View style={Styles.motorCycleProfile}>
              <View style={Styles.iconVehicleWrapper}>
                <Icon
                  name='two-wheeler'
                  size={responsiveFontSize(3)}
                  color='#FFF'
                />
              </View>
              <Text style={Styles.vehicleText}>Motor Cycle</Text>
            </View>
            <Icon
              name={detailMotorCycle ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
              size={responsiveFontSize(2.8)}
              color={colors.colorVariables.indigo1}
            />
          </TouchableOpacity>
          {detailMotorCycle &&
            <Animatable.View
              animation={fromTopCard}
              easing="ease-out"
              duration={300}
              style={Styles.detailVehicleCard}
            >
              <View style={Styles.detailCard}>
                <Text style={Styles.detailLabel}>Name</Text>
                <Text style={Styles.separator}>:</Text>
                <Text>Cb 150 R</Text>
              </View>
              <View style={Styles.detailCard}>
                <Text style={Styles.detailLabel}>NoPol</Text>
                <Text style={Styles.separator}>:</Text>
                <Text>Cb 150 R</Text>
              </View>
              <View style={Styles.detailCard}>
                <Text style={Styles.detailLabel}>No Chassis</Text>
                <Text style={Styles.separator}>:</Text>
                <Text>Cb 150 R</Text>
              </View>
            </Animatable.View>
          }
          <Gap height={2.8} />
          <TouchableOpacity style={Styles.motorCycleProfile} onClick={viewDetaiCar}>
            <View style={Styles.motorCycleProfile}>
              <View style={Styles.iconVehicleWrapper}>
                <Icon
                  name='directions-car'
                  size={responsiveFontSize(3)}
                  color='#FFF'
                />
              </View>
              <Text style={Styles.vehicleText}>Car</Text>
            </View>
            <Icon
              name='keyboard-arrow-right'
              size={responsiveFontSize(2.8)}
              color={colors.colorVariables.indigo1}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProfilePage;
