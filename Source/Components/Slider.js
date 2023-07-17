import { Dimensions, ScrollView, StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { AppColors } from '../Constants/AppColors';
import FastImage from 'react-native-fast-image';
import BannerItem from '../Pages/HomePages/Items/BannerItem';
const images = [
    {
        "_id":"1",
        "image": "https://genk.mediacdn.vn/2019/8/9/photo-1-15652951577231693720798.jpg",
        "name":"Komi-san can't communicate",
    },
    {
        "_id":"2",
        "image":     "https://cdn.zenquiz.net/external/2017/04/04/05/bebc94d0-18fa-11e7-a896-050901070303-compressed.jpg",
        "name":"Masamune's Revenge",
    },
    {
        "_id":"3",
        "image":      "https://cdn.oneesports.vn/cdn-data/sites/4/2022/03/Kaguya-sama-Chapter-220-Release-Date-Spoilers-Raws-Scans-Leaks-and-Read-Manga-Online.jpeg",
        "name":"Kaguya-san: Love is War",
    },
    {
        "_id":"4",
        "image":       "https://genk.mediacdn.vn/thumb_w/600/DlBlzccccccccccccE5CT3hqq3xN9o/Image/2013/12/ava-15c70.jpg",
        "name":"Nisekoi",
    },
   

  
  
]
const Slider = (props) => {
    // const { data } = props
    const windowWidth = Dimensions.get('window').width;
    const height = windowWidth * 50 / 100;

    const [activeIndicator, setactiveIndicator] = useState(0)
    const handleScroll = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if (slide !== activeIndicator) {
            setactiveIndicator(slide);
        }
    }
    const SCROLLVIEW_REF = useRef();
    const maxIndex = images.length;
    let currentIndex = 0;
    useEffect(() => {
        const scrollInterval = setInterval(autoUpdateScrollIndex, 5000);
        console.log('aloooo')
    }, [])


    const autoUpdateScrollIndex = () => {
        currentIndex++;
        if (currentIndex > maxIndex) {
            currentIndex = 0;

        }
        autoScroll(currentIndex)
    }

    const autoScroll = (index) => {
        SCROLLVIEW_REF.current.scrollTo({ x: (windowWidth - 55) * index, animated: true })
    }



    return (
        <View style={{ width: windowWidth - 55, height: height, marginTop: 17, borderRadius: 15, overflow: 'hidden' }}>
            <ScrollView pagingEnabled horizontal style={{ width: windowWidth - 55 }}
                onScroll={handleScroll}
                showsHorizontalScrollIndicator={false}
                ref={SCROLLVIEW_REF}
            >
                {images.map((item, index) =>
                   <BannerItem key={index} data={item}></BannerItem>)}
            </ScrollView>
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: -25, alignSelf: 'center' }}>
                {images.map((item, key) => <Text key={key} style={key === activeIndicator ? styles.sliderIndicatorActive : styles.sliderIndicatorNormal}>•</Text>)}
            </View>
        </View>

    )
}

export default Slider

const styles = StyleSheet.create({
    sliderIndicatorNormal: { fontSize: 55 },
    sliderIndicatorActive: { color: AppColors.primary_white, fontSize: 55 }
})
