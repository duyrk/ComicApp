import { Pressable, ScrollView, StyleSheet, Text, TextInput, View, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { AppColors } from '../../Constants/AppColors'
import FastImage from 'react-native-fast-image'
import { Typographies } from '../../Constants/Typographies'
import DropShadow from 'react-native-drop-shadow'
import App from '../../../App'
import Slider from '../../Components/Slider'
import DefaultItem from './Items/DefaultItem'

const mangaData = [
    {
        "_id": "1",
        "image": "https://official-complete-1.granpulse.us/manga/Masamune-Kun-No-Revenge/0040-001.png",
        "name": "Masamune's Revenge"
    },
    {
        "_id": "2",
        "image": "https://upload.wikimedia.org/wikipedia/en/8/86/Kaguya-sama_-_Love_is_War%2C_volume_1.jpg",
        "name": "Kaguya-sama: Love is War"
    },
    {
        "_id": "3",
        "image": "https://i7.xem-truyen.com/manga/0/70/566.thumb_500x.jpg",
        "name": "Nisekoi"
    },
    {
        "_id": "4",
        "image": "https://static.wikia.nocookie.net/charlotte-anime/images/8/8a/Charlotte_Manga.jpg/revision/latest/scale-to-width-down/180?cb=20201007122617&path-prefix=de",
        "name": "Charlotte"
    },
    {
        "_id": "5",
        "image": "https://static.wikia.nocookie.net/bocchi-the-rock/images/3/31/Volume_4.png/revision/latest?cb=20221027072136",
        "name": "Bocchi The Rock!"
    },
    {
        "_id": "6",
        "image": "https://pbs.twimg.com/media/EZG_CpSXgAMBYJR.jpg:large",
        "name": "Komi-san can't communicate"
    },
    {
        "_id": "7",
        "image": "https://official-complete-1.granpulse.us/manga/Masamune-Kun-No-Revenge/0040-001.png",
        "name": "Masamune's Revenge"
    },
    {
        "_id": "8",
        "image": "https://upload.wikimedia.org/wikipedia/en/8/86/Kaguya-sama_-_Love_is_War%2C_volume_1.jpg",
        "name": "Kaguya-sama: Love is War"
    },
    {
        "_id": "9",
        "image": "https://i7.xem-truyen.com/manga/0/70/566.thumb_500x.jpg",
        "name": "Nisekoi"
    },
    {
        "_id": "10",
        "image": "https://static.wikia.nocookie.net/charlotte-anime/images/8/8a/Charlotte_Manga.jpg/revision/latest/scale-to-width-down/180?cb=20201007122617&path-prefix=de",
        "name": "Charlotte"
    },
    {
        "_id": "11",
        "image": "https://static.wikia.nocookie.net/bocchi-the-rock/images/3/31/Volume_4.png/revision/latest?cb=20221027072136",
        "name": "Bocchi The Rock!"
    },
    {
        "_id": "12",
        "image": "https://pbs.twimg.com/media/EZG_CpSXgAMBYJR.jpg:large",
        "name": "Komi-san can't communicate"
    }
]

const Library = () => {



    return (
        <ScrollView style={styles.container}
            stickyHeaderIndices={[1]}
        >
            {/* Header Start */}

            <View style={styles.header}>
                <View style={styles.infoContainer}>
                    <DropShadow
                        style={{
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.5,
                            shadowRadius: 2,

                            elevation: 3,
                        }}
                    >
                        <Pressable style={styles.avatarContainer}>
                            <FastImage source={require('../../Images/img_avatar.jpg')} style={{ width: '100%', height: '100%' }} resizeMode={FastImage.resizeMode.cover}></FastImage>
                        </Pressable>
                    </DropShadow>

                    <View style={{ width: '60%', marginStart: 15 }}>
                        <Text style={[Typographies.h4, { color: AppColors.primary_black }]}>raiko</Text>
                        <Text style={{ marginTop: 4 }}>Just a normal weeb!</Text>
                    </View>
                </View>
                <Pressable>
                    <FastImage source={require('../../Images/ic_option.png')} style={{ width: 47, height: 47 }} resizeMode={FastImage.resizeMode.contain}></FastImage>
                </Pressable>
            </View>
            {/* Header End */}
          

        </ScrollView>
    )
}

export default Library

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.primary_white,
        paddingStart: 33,
        paddingEnd: 22,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:24,
        marginTop:14
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarContainer: {
        width: 70,
        height: 70,
        borderRadius: 50,
        overflow: 'hidden',
    },
   

})