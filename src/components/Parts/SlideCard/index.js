import React, { useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Gap } from '../../Common';
import Styles from './style';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const renderItemCard = ({ item }) => {
  return (
    <View style={Styles.card(item.backgroundColor)}>
      <View style={Styles.cardBody}>
        <View style={Styles.wrapperTextCard}>
          <Text style={Styles.textTitleCard}>{item.title}</Text>
          <Gap height={1.3} />
          <Text style={Styles.textDescCard}>{item.description}</Text>
        </View>
        <Image
          source={item.url}
          resizeMode="contain"
          resizeMethod="resize"
          style={Styles.imgCarousel}
        />
      </View>
      <Gap height={2.5} />
      <View style={Styles.lineCard}></View>
      <View style={Styles.lineCard}></View>
      <View style={Styles.lineCard}></View>
      <View style={Styles.lineCard}></View>
    </View>
  );
}

const SlideCard = ({ data }) => {
  const carouselRef = React.useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View>
      <Carousel
        layout='default'
        // ref={carouselRef}
        loop
        autoplay
        data={data}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        renderItem={renderItemCard}
        itemWidth={DEVICE_WIDTH * 80 / 100}
        sliderWidth={DEVICE_WIDTH}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        containerStyle={Styles.containerStylePagination}
        dotStyle={Styles.dotStyle}
        inactiveDotStyle={Styles.inactiveDotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  )
}

export default SlideCard;
