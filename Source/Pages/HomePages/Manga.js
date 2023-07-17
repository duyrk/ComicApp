import { Pressable, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import AppToolbar from '../../Components/AppToolbar'
import { AppColors } from '../../Constants/AppColors'
import DropShadow from 'react-native-drop-shadow'
import FastImage from 'react-native-fast-image'
import { Typographies } from '../../Constants/Typographies'
import DefaultItem from './Items/DefaultItem'
import DetailInfoItem from './Items/DetailInfoItem'
import AppButton from '../../Components/AppButton'
import FavoriteButton from '../../Components/FavoriteButton'
import Tab from '../AnimatedSlidingTab'
const data=[
    {
        "_id":"1",
        "title":"",
        "thumbnail":"",
        "date":""
    },
    {
        "_id":"2",
        "title":"",
        "thumbnail":"",
        "date":""
    },
    {
        "_id":"3",
        "title":"",
        "thumbnail":"",
        "date":""
    },
    {
        "_id":"4",
        "title":"",
        "thumbnail":"",
        "date":""
    },
    {
        "_id":"5",
        "title":"",
        "thumbnail":"",
        "date":""
    },
    {
        "_id":"6",
        "title":"",
        "thumbnail":"",
        "date":""
    },
    {
        "_id":"7",
        "title":"",
        "thumbnail":"",
        "date":""
    },
    {
        "_id":"8",
        "title":"",
        "thumbnail":"",
        "date":""
    },
    {
        "_id":"9",
        "title":"",
        "thumbnail":"",
        "date":""
    }
]
const characterData=[
    {
        "_id":"1",
        "name":"Chitoge Kirisaki",
        "type":"Main Characters",
        "image":"https://somoskudasai.com/wp-content/uploads/2021/06/portada_nisekoi-2.jpg",
        "description":"She is the daughter of Adelt Wogner Kirisaki and Hana Kirisaki who served as the fake girlfriend of Raku Ichijō for the next three years of her school life to prevent a war from starting between their families."
    },
    {
        "_id":"2",
        "name":"Raku Ichijō",
        "type":"Main Characters",
        "image":"https://i.pinimg.com/originals/1e/59/60/1e596023f320e36af6466a7c1214c3e8.jpg",
       "description": "Raku is a little taller than average for a high schooler and has messy, black hair. He has lightly tanned, fair skin, dark blue eyes and also has a big scar on the right side of his forehead."
    }
]
const Manga = () => {
    const { width } = Dimensions.get('window').width;
    const [isActive, setisActive] = useState(false)
    const addToFavor = () => {
        //request to api
        // and set isActive to true
        //useEffect to affect the site at first place
    }
    const handleFavorite = () => {
        if (isActive == true) {
            //request api delete this manga from collection with this user, (use id)
        } else {
            //when it's not active which means it need to be added to the favorite collection 
            //pass user id and mangaid 
            addToFavor();
        }
    }
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

            <View style={styles.mangaInfo}>
                <DropShadow
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}

                >
                    <FastImage source={{ uri: 'https://genk.mediacdn.vn/thumb_w/600/DlBlzccccccccccccE5CT3hqq3xN9o/Image/2013/12/ava-15c70.jpg' }}
                        style={{ width: width, height: 200, borderRadius: 15 }}
                    ></FastImage>
                </DropShadow>

                <View style={styles.infoContainer}>
                    <Text style={[Typographies.h2, { width: '80%', color: AppColors.primary_black }]}>Nise Koi</Text>
                    <Pressable style={{ width: 40, height: 40 }}><FavoriteButton isActive={isActive}></FavoriteButton></Pressable>

                </View>
            </View>
          

           
            <View style={{
                paddingStart: 33,
                paddingEnd: 22,
            }}>
                <Tab data={data} characterData={characterData}></Tab>
            </View>
           
        </ScrollView>
    )
}

export default Manga

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.primary_white,
        // paddingTop: 14,
    },
    mangaInfo: {
        marginTop: 22,

    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingStart: 33,
        paddingEnd: 22,
        marginTop: 15
    }
})