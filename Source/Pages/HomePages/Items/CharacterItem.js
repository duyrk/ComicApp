import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import DropShadow from 'react-native-drop-shadow'
import { Typographies } from '../../../Constants/Typographies'
import { AppColors } from '../../../Constants/AppColors'

const CharacterItem = (props) => {
    const {data} = props;
    return (
        <View style={styles.itemContainer}>
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


                <FastImage source={{uri: data.image}}
                    style={{ height: 180, borderRadius: 20 }}
                    resizeMode={FastImage.resizeMode.cover}
                ></FastImage>
            </DropShadow>
            <View style={styles.info}>
                <Text style={[Typographies.h4, {color: AppColors.primary_black, fontWeight:'700'}]}>{data.name}</Text>
                <Text >{data.type}</Text>
            </View>
            <Text style={{paddingHorizontal:20, marginTop:10, lineHeight:18, color: AppColors.primary_black}}>{data.description}</Text>
        </View>
    )
}

export default CharacterItem

const styles = StyleSheet.create({
    itemContainer:{
        marginTop:10
    },
    info:{marginTop:10, paddingHorizontal:20, flexDirection:'row', justifyContent:'space-between'},

})