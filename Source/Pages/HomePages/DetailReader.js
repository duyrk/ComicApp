import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppToolbar from '../../Components/AppToolbar'
import { AppColors } from '../../Constants/AppColors'
import DropShadow from 'react-native-drop-shadow'
import FastImage from 'react-native-fast-image'
import { Typographies } from '../../Constants/Typographies'
import DefaultItem from './Items/DefaultItem'
import DetailInfoItem from './Items/DetailInfoItem'
import AppButton from '../../Components/AppButton'
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
const DetailReader = () => {
    return (
        <ScrollView style={styles.container}
        stickyHeaderIndices={[0]}>
           
            <AppToolbar type='tools' title='My Profile'></AppToolbar>

         
            <View style={styles.profileContainer}>
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
                            <Text style={[Typographies.h3, { color: AppColors.primary_black }]}>raiko</Text>
                            <Text style={[{ marginTop: 4 }, Typographies.h5]}>VKDuy</Text>
                        </View>

                    </View>

                </View>
                <View style={styles.aboutYouContainer}>
                    <Text style={[Typographies.h5, { color: AppColors.primary_black }]} >Am i a weeb or a normal person?? I don't know anymore lmao</Text>
                </View>
            </View>
            <View style={styles.statsContainer}>
                <View >
                    <Text style={[Typographies.h3, { color: AppColors.primary_black, textAlign: 'center' }]}>24</Text>
                    <Text style={[Typographies.h6, { color: AppColors.secondary_gray, textAlign: 'center', marginTop:5  }]}>Reviews</Text>
                </View>
                <View >
                    <Text style={[Typographies.h3, { color: AppColors.primary_black, textAlign: 'center' }]}>425</Text>
                    <Text style={[Typographies.h6, { color: AppColors.secondary_gray, textAlign: 'center', marginTop:5 }]}>Followers</Text>
                </View>
                <View >
                    <Text style={[Typographies.h3, { color: AppColors.primary_black, textAlign: 'center' }]}>1.5k</Text>
                    <Text style={[Typographies.h6, { color: AppColors.secondary_gray, textAlign: 'center', marginTop:5 }]}>Likes</Text>
                </View>
            </View>
            <View style={{marginTop:19}}>
                <AppButton type='normal' value='Follow'></AppButton>
            </View>
            {/* Reviews Section */}
            <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingEnd: 15 }}>
                <Text style={[Typographies.h4, { color: AppColors.primary_black }]}>New Manga</Text>
                <Pressable>
                   <Text>See All</Text>
                </Pressable>
            </View>
            <View style={{
                marginTop: 18,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                paddingHorizontal: 10
            }}>
                {
                    mangaData.map(item => <DefaultItem data={item} key={item._id}></DefaultItem>)
                }
                {/* <DefaultItem></DefaultItem> */}
            </View>
         {/* Reviews Section */}
                {/* Reviews Section */}
                <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingEnd: 15 }}>
                <Text style={[Typographies.h4, { color: AppColors.primary_black }]}>Liked</Text>
                <Pressable>
                   <Text>See All</Text>
                </Pressable>
            </View>
            <View style={{
                 marginTop: 18,
           
            }}>
                {
                    mangaData.map(item => <DetailInfoItem data={item} key={item._id}></DetailInfoItem>)
                }
                {/* <DefaultItem></DefaultItem> */}
            </View>
         {/* Reviews Section */}
        </ScrollView>
    )
}

export default DetailReader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.primary_white,
        paddingStart: 33,
        paddingEnd: 22,
        // paddingTop: 14,
      
    },
    profileContainer: {
        borderBottomWidth: 1,
        borderBottomColor: AppColors.secondary_gray,
        paddingBottom: 30
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 36
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarContainer: {
        width: 70,
        height: 70,
        borderRadius: 50,
        overflow: 'hidden'
    },
    aboutYouContainer: {
        marginTop: 30
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart:50,
        paddingEnd:60,
        marginTop:20
    }
})