import React, { useState, Component } from 'react';
import { View, Text, Image, Dimensions, StatusBar } from 'react-native';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
import Carousel from 'react-native-looped-carousel';
import { ILWelcome1, ILWelcome2, ILWelcome3 } from '../../assets';
import { colors } from '../../utils';
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

const WelcomeScreen = () => {
  const c = React.createRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [size, setSize] = useState({ width: DEVICE_WIDTH, height: DEVICE_HEIGHT });

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
        <View>
          <Text>Hello</Text>
        </View>
      </View>
    )
  }

  const onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    setSize({ width: layout.DEVICE_WIDTH, height: layout.DEVICE_HEIGHT });
  }

  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', backgroundColor: '#FFF' }}>
      <StatusBar backgroundColor={colors.colorVariables.greenLighten} barStyle="light-content" />
      {/* <Carousel
        autoplay
        loop
        loopClonesPerSide={10}
        layout={"stack"}
        layoutCardOffset={18}
        ref={c}
        data={ImageData}
        sliderWidth={DEVICE_WIDTH}
        itemWidth={DEVICE_WIDTH}
        renderItem={renderItem}
        onSnapToItem={index => setActiveIndex(index)} /> */}
      <Carousel
        delay={5000}
        style={size}
        autoplay
        pageInfo
        onAnimateNextPage={(p) => console.log(p)}
      >
        {ImageData.map((img, idx) => (
          <RenderItem item={img} />
        ))}
      </Carousel>
    </View>
  )
}

export default WelcomeScreen;
