import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ILNullPhoto } from '../../assets';
import { Gap, Dropdown, Button } from '../../components';
import { colors } from '../../utils';
import Styles from './style';

const ProfilePage = props => {
  const [activePark, setActivePark] = useState(true);

  return (
    <View style={Styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={true}
        style={Styles.content}>
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
            <Gap height={2} />
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
          </View>
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
              onPress={() => console.log('Hello')}
            >
              Edit
            </Button>
          </Dropdown>
          <Gap height={2.8} />
          <Dropdown
            labelIcon='directions-car'
            label='Car'
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
              <Text style={Styles.detailItem}>089660278221</Text>
            </View>
            <Gap height={1.5} />
            <View style={Styles.detailCard}>
              <Text style={Styles.detailLabel}>Email</Text>
              <Text style={Styles.separator}>:</Text>
              <Text style={Styles.detailItem}>trihariyadi24@gmail.com</Text>
            </View>
            <Gap height={2.5} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ProfilePage;
