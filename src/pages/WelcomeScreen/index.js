import React from 'react';
import { View, Text, Image, Dimensions, StatusBar } from 'react-native';
import { Carousel } from '../../components';
import { colors } from '../../utils';
import { ILWelcome1, ILWelcome2, ILWelcome3 } from '../../assets';
import Styles from './style';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const ImageData = [
  {
    id: 1,
    title: 'Welcome To Parking Hero',
    description: 'Find the best possible parking space nearby your desired destination.',
    url: ILWelcome1,
  },
  {
    title: 'Easy Park Your Vehicle',
    url: ILWelcome2,
    description: 'Don\'t waste your valuable time looking for parking space and parking security.',
    id: 2,
  },
  {
    title: 'Easy Payment',
    url: ILWelcome3,
    description: 'No need to bother thinking about payment, you can pay using electronic pay in Parking Here.',
    id: 3,
  },
];

const WelcomeScreen = ({ navigation }) => {

  const RenderItem = ({ item }) => {
    return (
      <View style={Styles.ItemRenderWrapper}>
        <Image
          source={item.url}
          resizeMode="contain"
          resizeMethod="resize"
          style={Styles.imageLogo}
        />
        <View style={Styles.wrapperText}>
          <Text style={Styles.textTitle}>{item.title}</Text>
          <Text style={Styles.textDesc}>{item.description}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', backgroundColor: '#FFF' }}>
      <StatusBar backgroundColor={colors.colorVariables.greenLighten} barStyle="light-content" />
      <Carousel
        delay={8000}
        style={{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT }}
        autoplay
        pageInfo
        arrows={true}
        arrowStyle={Styles.arrowStyle}
        rightArrowStyle={Styles.rightArrowStyle}
        onNavigatePage={() => navigation.replace('LoginPage')}
        // onAnimateNextPage={(p) => console.log(p)}
      >
        {ImageData.map((img, idx) => (
          <RenderItem item={img} key={`welcome-${idx}`} />
        ))}
      </Carousel>
    </View>
  )
}

export default WelcomeScreen;
