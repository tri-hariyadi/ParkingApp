import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { colors } from '../../../utils';
import { Button, Gap } from '../../Common';
import Carousel from '../Carousel';
import Styles from './style';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const RenderItemCardPark = () => {
  return (
    <View style={Styles.card}>
      <View style={Styles.sectionOne}>
        <View>
          <Text style={Styles.parkingName}>parking Area GBK</Text>
          <Text style={Styles.parkingPosition}>Asia Afrika, Jakarta Pusat, DKI Jakarta</Text>
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
            <Text style={Styles.price}>Rp 5.000/Hour</Text>
          </View>
        </View>
        <Gap height={2.5} />
        <View style={Styles.sectionFour}>
          <View style={Styles.slotsWrapper}>
            <Text style={Styles.numberSlot}>66</Text>
            <Text style={Styles.availableSlot}>Available Slots</Text>
          </View>
          <View style={Styles.buttonBookWrapper}>
            <Button
              background={colors.colorVariables.greenLighten2}
              borderRadius={10}
              textBold
              onPress={() => console.log('Hello')}
            >
              Park Here
            </Button>
          </View>
        </View>
      </View>
    </View>
  )
}

const ParkCard = ({ data }) => {
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
          <RenderItemCardPark item={item} key={`park-card-${idx}`} />
        ))}
      </Carousel>
    </View>
  )
}

export default ParkCard;
