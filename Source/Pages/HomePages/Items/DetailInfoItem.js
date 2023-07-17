import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { AppColors } from '../../../Constants/AppColors'
import { Typographies } from '../../../Constants/Typographies'
import LinearGradient from 'react-native-linear-gradient'
import DropShadow from 'react-native-drop-shadow'

const DetailInfoItem = (props) => {
    const {data} = props
    return (
        <DropShadow
            style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3,
            }}

        >


            <View style={styles.itemContainer}>
                <FastImage source={{ uri: data.image }}
                    style={{ width: 90, height: 120, borderRadius: 10 }}
                    resizeMode={FastImage.resizeMode.contain}
                ></FastImage>
                <View style={styles.itemContentRight}>
                    <View style={styles.itemInfoTop}>
                        <View style={{flex:1}}>
                            <View style={styles.mangaTitle}>
                                <Text style={[Typographies.h4, { color: AppColors.primary_black,width:144 }]}>{data.name}</Text>
                                <Pressable style={{ borderRadius: 50, overflow: 'hidden', backgroundColor: AppColors.primary, padding:10 }}>
                                    <FastImage source={require('../../../Images/ic_save.png')}
                                        style={{ width: 22, height: 22 }}
                                    ></FastImage>
                                </Pressable>
                            </View>
                            <Text style={{ color: AppColors.secondary_gray}}>From MangaKakalot</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[{color:AppColors.primary_black}]}>Next Chapter 269</Text>
                        <Text  style={[{color:AppColors.primary_black}]}>Mark: 9.6</Text>
                    </View>
                </View>
            </View>
        </DropShadow>
    )
}

export default DetailInfoItem

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: AppColors.primary_white,
        flexDirection: 'row',
        paddingStart:20,
        paddingEnd:22,
        paddingVertical: 15,
        borderRadius: 20,
        marginHorizontal:1, 
        marginTop: 20
    },
    itemContentRight:{ flex: 1, justifyContent: 'space-between', marginStart:5 },
    itemInfoTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    mangaTitle:style={ flexDirection: 'row', justifyContent:'space-between',alignItems:'center' },
    
})