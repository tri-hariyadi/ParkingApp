import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import { Header, Gap, Dropdown } from '../../components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ILTransferImg } from '../../assets';
import { colors, customFont } from '../../utils';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Styles from './style';

const TransferPage = props => {
  const itemCategory = props.route.params;
  const scrollViewRef = React.useRef();
  
  return (
    <>
      <Header
        label={itemCategory.bank}
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView 
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={Styles.container}>
        <View style={Styles.transferIllustration}>
          <Text style={Styles.title}>I will fill the balance using</Text>
          <Gap height={4} />
          <Image
            source={ILTransferImg}
            resizeMode='stretch'
            resizeMethod='resize'
            style={Styles.imgTransfer}
          />
          <Gap height={2} />
        </View>
        <View style={Styles.wrapperSection}>
          <View style={Styles.card}>
            <Image
              source={itemCategory.img}
              resizeMode='contain'
              resizeMethod='resize'
              style={Styles.imageBank}
            />
            <TouchableOpacity 
              onPress={() => props.navigation.goBack()}
              style={Styles.changeBank}>
              <Text style={Styles.textChangeBank}>Change Bank</Text>
              <Icon
                name='keyboard-arrow-right'
                size={responsiveFontSize(3.3)}
                color={colors.colorVariables.indigo1}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={5} />
        <View style={[Styles.wrapperSection, { alignItems: 'center' }]}>
          <Text style={Styles.textLabel}>Account Number Virtual BCA</Text>
          <Gap height={1} />
          <Text style={Styles.accountNumber}>{itemCategory.VA}</Text>
          <Gap height={2} />
          <TouchableOpacity 
            onPress={() => Clipboard.setString(itemCategory.VA)}
            style={Styles.btnClipboard}>
            <Text style={Styles.textClipBoard}>Copy Code</Text>
          </TouchableOpacity>
          <Gap height={1} />
          <Text style={[Styles.textClipBoard, { color: colors.colorVariables.indigo1 }]}>The maximum increase balance is Rp. 1.000.000</Text>
        </View>
        <Gap height={4} />
        <View style={Styles.wrapperGuide}>
          <Gap height={2} />
          <Text style={Styles.textLabel}>Follow the payment instructions below :</Text>
          <Gap height={1.7} />
          {itemCategory.instruction && 
            itemCategory.instruction.map((item, idx) => (
              <Dropdown
                noBackground
                label={item.name}
                key={`dropdown-instruction-${idx}`}
                onPress={() => scrollViewRef.current.scrollToEnd({ animated: true })}
              >
                {item.step && 
                    item.step.map((step, idx) => (
                      <View key={`step-instruction-${idx}`}>
                        <View style={Styles.wrapperTextInstruction}>
                          <Text style={[Styles.textInstruction, { fontFamily: customFont.secondary[800] }]}>{step.no}. </Text>
                          <Text style={Styles.textInstruction}>{step.desc}</Text>
                        </View>
                      </View>
                    ))
                }
              </Dropdown>
            ))
          }
        <Gap height={5} />
        </View>
      </ScrollView>
    </>
  )
}

export default TransferPage;
