import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Gap, Header } from '../../components';
import { ILBCA, ILMandiri, ILBni } from '../../assets';
import { colors } from '../../utils';
import Styles from './style';

const DataBank = [
  {
    bank: 'BCA',
    VA: '3901 0898 1234 5678',
    instruction: [
      {
        name: 'Via ATM BCA',
        step: [
          {
            no: 1,
            desc: 'Enter your BCA ATM card and PIN'
          },
          {
            no: 2,
            desc: 'Select menu TRANSAKSI LAINYA > TRANSFER > KE REKENING BCA VIRTUAL ACCOUNT'
          },
          {
            no: 3,
            desc: 'Enter the Virtual Account number (3901 0898 1234 5678)'
          },
          {
            no: 4,
            desc: 'Enter the filling amount'
          },
          {
            no: 5,
            desc: 'Follow the next instructions to complete the transaction'
          }
        ]
      },
      {
        name: 'Via Klik BCA',
        step: [
          {
            no: 1,
            desc: 'Login to the KlikBCA website'
          },
          {
            no: 2,
            desc: 'Select the Transfer menu > Transfer to BCA Virtual Account'
          },
          {
            no: 3,
            desc: 'Enter your DANA Virtual Account number (3901 0898 1234 5678).'
          },
          {
            no: 4,
            desc: 'Enter the filling amount'
          },
          {
            no: 5,
            desc: 'Follow the next instructions to complete the transaction'
          }
        ]
      },
      {
        name: 'Via m-BCA (BCA Mobile)',
        step: [
          {
            no: 1,
            desc: 'Login to the m-BCA application'
          },
          {
            no: 2,
            desc: 'Select menu m-Transfer > BCA Virtual Account'
          },
          {
            no: 3,
            desc: 'Masukkan nomor Virtual Account DANA kamu (3901 0898 1234 5678)'
          },
          {
            no: 4,
            desc: 'Enter the filling amount'
          },
          {
            no: 5,
            desc: 'Follow the next instructions to complete the transaction'
          }
        ]
      }
    ],
    img: ILBCA
  },
  {
    bank: 'Mandiri',
    instruction: [],
    img: ILMandiri
  },
  {
    bank: 'BNI',
    instruction: [],
    img: ILBni
  }
];

const AddSaldo = props => {
  return (
    <>
      <Header 
        label='Add Saldo'
        onPress={() => props.navigation.goBack()}/>
      <ScrollView
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={Styles.container}>
        <Gap height={2} />
        <Text style={Styles.title}>What do you want to fill the balance with?</Text>
        <Gap height={4} />
        <Text style={Styles.textLabel}>Transfer Bank</Text>
        <View style={Styles.card}>
          {DataBank && DataBank.map((item, idx) => (
            <View key={`bank-${idx}`}>
              <TouchableOpacity
                style={Styles.cardBody(DataBank.length === idx + 1 ? 0 : 1)}
                onPress={() => props.navigation.navigate('TransferPage', DataBank[idx])}>
                <Image
                  source={item.img}
                  resizeMode='contain'
                  resizeMethod='resize'
                  style={Styles.imageBank}
                />
                <Icon
                  name='keyboard-arrow-right'
                  size={responsiveFontSize(3.3)}
                  color={colors.colorVariables.indigo1}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <Gap height={4} />
        <Text style={Styles.textLabel}>Agen</Text>
        <View style={Styles.card}>
          <TouchableOpacity
            style={Styles.cardBody(0)}>
            <Text style={Styles.textAttention}>Sorry, this feature will be available in next version.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  )
}

export default AddSaldo;
