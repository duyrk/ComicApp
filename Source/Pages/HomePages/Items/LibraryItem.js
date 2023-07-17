import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { Typographies } from '../../../Constants/Typographies'
import { AppColors } from '../../../Constants/AppColors'
import DropShadow from 'react-native-drop-shadow'

const LibraryItem = (props) => {
    const {data} = props
    return (
        <View style={{marginTop:10}}>
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
                    style={{ width: '100%', height: 200, borderRadius: 20 }}
                    resizeMode={FastImage.resizeMode.cover}
                ></FastImage>
            </DropShadow>
            <View style={{marginTop:13}}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={[Typographies.h3, { color: AppColors.primary_black }]}>Nise Koi</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>English</Text>
                        <Text>Chapter 5</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default LibraryItem

const styles = StyleSheet.create({})