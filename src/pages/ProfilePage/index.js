import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import jwt_decode from 'jwt-decode';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { ILNullPhoto } from '../../assets';
import { Gap, Dropdown, Button } from '../../components';
import { colors, getData } from '../../utils';
import { GetVehicle } from '../../actions';
import Styles from './style';

const ProfilePage = props => {
  const [activePark, setActivePark] = useState(true);
  const [dataUser, setDataUser] = useState(false);
  const scrollViewRef = React.useRef();
  const dispatch = useDispatch();
  const { 
    getVehicleData,
    getVehicleLoading,
    getVehicleError, 
  } = useSelector(state => ({
    getVehicleData: state.VehicleReducer.getVehicleData,
    getVehicleLoading: state.VehicleReducer.getVehicleLoading,
    getVehicleError: state.VehicleReducer.getVehicleError,
  }), shallowEqual );

  useEffect(() => {
    getData('token')
      .then(async (res) => {
        const promise = await setDataUser(jwt_decode(res.accessToken));
        await Promise.resolve(promise);
        dispatch(GetVehicle(dataUser.idUser))
      });
  }, [])
  console.log(dataUser);

  return (
    <View style={Styles.container}>
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={true}
        style={Styles.content}>
        <View style={Styles.header}>
          <Gap height={2} />
          <View>
            <Image
              source={ILNullPhoto}
              style={Styles.imageProfile}
              resizeMode='contain'
              resizeMethod='resize'
            />
          </View>
          <Text style={Styles.textProfile}>{dataUser && dataUser.username}</Text>
          <Gap height={2} />
          <View style={{ flexDirection: 'row' }}>
            <View style={Styles.moneyWrapper}>
              <View style={Styles.iconMoneyWrapper}>
                <Icon
                  name='monetization-on'
                  size={responsiveFontSize(3)}
                  color='#FFF'
                />
              </View>
              <Text style={Styles.textMoney}>Rp. 15000</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              style={Styles.moneyWrapper}
              onPress={() => props.navigation.navigate('AddSaldo')}>
              <View style={Styles.iconMoneyWrapper}>
                <Icon
                  name='add-circle-outline'
                  size={responsiveFontSize(3)}
                  color='#FFF'
                />
              </View>
              <Text style={Styles.textMoney}>Add Saldo</Text>
            </TouchableOpacity>
          </View>
          <Gap height={2} />
        </View>
        <Gap height={2.5} />
        <View style={Styles.body}>
          <Text style={Styles.titleSection}>Active Parking</Text>
          <Gap height={2} />
          {activePark ?
            <TouchableOpacity
              activeOpacity={0.6}
              style={Styles.cardActive}
              onPress={() => props.navigation.navigate('ActivePark')}
            >
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
            </TouchableOpacity>
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
          <Dropdown
            labelIcon='two-wheeler'
            label='Motor Cycle'
            onPress={() => scrollViewRef.current.scrollToEnd({ animated: true })}
          >
            <View style={Styles.detailCard}>
              <Text style={Styles.detailLabel}>Type</Text>
              <Text style={Styles.separator}>:</Text>
              <Text style={Styles.detailItem}>Cb 150 R</Text>
            </View>
            <Gap height={1.5} />
            <View style={Styles.detailCard}>
              <Text style={Styles.detailLabel}>NoPol</Text>
              <Text style={Styles.separator}>:</Text>
              <Text style={Styles.detailItem}>B 3362 FQZ</Text>
            </View>
            <Gap height={1.5} />
            <View style={Styles.detailCard}>
              <Text style={Styles.detailLabel}>No Chassis</Text>
              <Text style={Styles.separator}>:</Text>
              <Text style={Styles.detailItem}>CR150435C22R</Text>
            </View>
            <Gap height={2} />
            <Button
              background={colors.colorVariables.greenLighten2}
              borderRadius={10}
              textBold
              iconName='edit'
              onPress={() => props.navigation.navigate('RegisterVehicle', 'MC')}
            >
              Edit
            </Button>
          </Dropdown>
          <Gap height={2.8} />
          <Dropdown
            labelIcon='directions-car'
            label='Car'
            onPress={() => scrollViewRef.current.scrollToEnd({ animated: true })}
          >
            <View style={Styles.detailCard}>
              <Text style={Styles.detailLabel}>Type</Text>
              <Text style={Styles.separator}>:</Text>
              <Text style={Styles.detailItem}>Toyota Avansa</Text>
            </View>
            <Gap height={1.5} />
            <View style={Styles.detailCard}>
              <Text style={Styles.detailLabel}>NoPol</Text>
              <Text style={Styles.separator}>:</Text>
              <Text style={Styles.detailItem}>B 9955 QDE</Text>
            </View>
            <Gap height={1.5} />
            <View style={Styles.detailCard}>
              <Text style={Styles.detailLabel}>No Chassis</Text>
              <Text style={Styles.separator}>:</Text>
              <Text style={Styles.detailItem}>CR150488C22R</Text>
            </View>
            <Gap height={2} />
            <Button
              background={colors.colorVariables.greenLighten2}
              borderRadius={10}
              textBold
              iconName='edit'
              onPress={() => console.log('Hello')}
            >
              Edit
            </Button>
          </Dropdown>
          <Gap height={2} />
          <Text style={Styles.titleSection}>My Profile</Text>
          <Gap height={2} />
          <View>
            <View style={Styles.detailCard}>
              <Text style={Styles.detailLabel}>Phone</Text>
              <Text style={Styles.separator}>:</Text>
              <Text style={Styles.detailItem}>{dataUser && dataUser.phonenumber}</Text>
            </View>
            <Gap height={1.5} />
            <View style={Styles.detailCard}>
              <Text style={Styles.detailLabel}>Email</Text>
              <Text style={Styles.separator}>:</Text>
              <Text style={Styles.detailItem}>{dataUser && dataUser.email}</Text>
            </View>
            <Gap height={2.5} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ProfilePage;
