import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { Typographies } from '../../../Constants/Typographies'
import { AppColors } from '../../../Constants/AppColors'

const DefaultItem = (props) => {
    const {data} = props;
  return (
    <View style={styles.itemContainer}>
        <FastImage source={{uri:data.image}}
            style={{width:140, height:170, borderRadius: 15}}
            resizeMode={FastImage.resizeMode.cover}
        ></FastImage>
        <Text style={[styles.mangaLabel,Typographies.h5]}>{data.name}</Text>
    </View>
  )
}

export default DefaultItem

const styles = StyleSheet.create({
    itemContainer:{
        width:140,
        marginTop:10
    },
    mangaLabel:{
        marginTop:8,
        color: AppColors.primary_black
    }
})