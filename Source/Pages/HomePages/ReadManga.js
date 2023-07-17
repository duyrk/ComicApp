import { ScrollView, StyleSheet, Text, View, Dimensions, Animated } from 'react-native'
import React from 'react'
import { AppColors } from '../../Constants/AppColors'
import AppToolbar from '../../Components/AppToolbar'
import FastImage from 'react-native-fast-image'
import ScaledImage from '../../Components/ScaledImage'
const data = [
    {
        "_id": "1",
        "image": "https://cdn.mangaclash.com/manga_5fba289406211/d40c957b6a003159c2d012c38f7df20c/1.jpg"
    },
    {
        "_id": "2",
        "image": "https://cdn.mangaclash.com/manga_5fba289406211/d40c957b6a003159c2d012c38f7df20c/2.jpg"
    },
    {
        "_id": "3",
        "image": "https://cdn.mangaclash.com/manga_5fba289406211/d40c957b6a003159c2d012c38f7df20c/3.jpg"
    },
    {
        "_id": "4",
        "image": "https://cdn.mangaclash.com/manga_5fba289406211/d40c957b6a003159c2d012c38f7df20c/4.jpg"
    },
    {
        "_id": "5",
        "image": "https://pm1.narvii.com/6561/519a49b320d2c56886bb166787ab144ce7611e99_hq.jpg"
    }
]
const ReadManga = () => {
    const { windowwidth } = Dimensions.get('window').width;
    const scrollY = new Animated.Value(0);
    return (
        <ScrollView style={styles.container}
            stickyHeaderIndices={[0]}
            nestedScrollEnabled={true}
       
        >

            <View style={{
                paddingStart: 33,
                paddingEnd: 22,
                backgroundColor: AppColors.primary_white
            }}>
                <AppToolbar type='tools' title='Manga'></AppToolbar>
            </View>
          
            <View>
                {
                    data.map(item=> <FastImage key={item._id} source={{uri: item.image}} style={{width:windowwidth, height:undefined, aspectRatio:0.681020733652312}} resizeMode={FastImage.resizeMode.contain}></FastImage>)
                }
            </View>
          
        </ScrollView>
    )
}

export default ReadManga

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.primary_white,
        // paddingTop: 14,
    },
})