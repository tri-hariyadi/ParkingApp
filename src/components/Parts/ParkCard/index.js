import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { colors } from '../../../utils';
import { Button, Gap } from '../../Common';
import Carousel from '../Carousel';
import Styles from './style';

const DEVICE_WIDTH = Dimensions.get('window').width;

const RenderItemCardPark = (props) => {
  const item = props.item
  return (
    <View style={Styles.card}>
      <View style={Styles.sectionOne}>
        <View>
          <Text style={Styles.parkingName}>{item.name}</Text>
          <Text style={Styles.parkingPosition}>{item.address}</Text>
        </View>
        <View style={Styles.distanceText}>
          <Text style={Styles.numberKm}>0.6</Text>
          <Text style={Styles.textKm}>Km away</Text>
        </View>
      </View>
      <View>
        <Gap height={1.3} />
        <View style={Styles.sectionThree}>
          <View style={Styles.sectionFour}>
            <Icon
              name='schedule'
              size={responsiveFontSize(2.5)}
            />
            <Gap width={1.7} />
            <Text style={Styles.textOpenNow}>Open Now</Text>
            <Text style={Styles.textCloseAt}> . close at 09 PM</Text>
          </View>
          <View>
            <Text style={Styles.price}>Rp {item.price}/Hour</Text>
          </View>
        </View>
        <Gap height={2.5} />
        <View style={Styles.sectionFour}>
          <View style={Styles.slotsWrapper}>
            <Text style={Styles.numberSlot}>{item.slotAvailable}</Text>
            <Text style={Styles.availableSlot}>Available Slots</Text>
          </View>
          <View style={Styles.buttonBookWrapper}>
            <Button
              background={colors.colorVariables.greenLighten2}
              borderRadius={10}
              textBold
              onPress={props.onPress}
            >
              Park Here
            </Button>
          </View>
        </View>
      </View>
    </View>
  )
}

const ParkCard = ({ data, navigation }) => {

  return (
    <View style={{paddingHorizontal: 20}}>
      <Carousel
        delay={8000}
        style={{ width: DEVICE_WIDTH, height: 200 }}
        autoplay
        pageInfo
        pageInfoBottomContainerStyle={{bottom: -23}}
        pageInfoTextStyle={{fontSize: 12}}
        pageInfoPillStyle={{height:19, width: 60}}
        pageInfoBackgroundColor='#25ba78'
        pageInfoTextStyle={{fontWeight: 'bold', color: '#FFF'}}
      >
        {data.map((item, idx) => (
          <RenderItemCardPark item={item} key={`park-card-${idx}`} onPress={() => navigation.navigate('BookingPark', item)} />
        ))}
      </Carousel>
    </View>
  )
}

export default ParkCard;
