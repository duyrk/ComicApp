import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { Typographies } from '../../../Constants/Typographies'
import { AppColors } from '../../../Constants/AppColors'

const ChapterItem = (props) => {
const {data} = props
  return (
    <Pressable android_ripple={{color: AppColors.secondary_gray}} style={styles.itemContainer}
    onPress={()=>{console.log("alo")}}
    >
        <FastImage source={require('../../../Images/thumbnailSample.png')}
        style={{width:150,height:80}}
        resizeMode={FastImage.resizeMode.cover}
        ></FastImage>
        <View style={{marginStart:5,justifyContent:'space-between', borderBottomWidth:1, borderBottomColor: '#EBECF0', flex:1}}>
            <View>
                <Text style={[Typographies.h5, {color: AppColors.primary_black}]}>Cuộc gặp gỡ định mệnh</Text>
                <Text style={{ marginTop:3}}>Chapter 1</Text>
            </View>
            <Text>14/09/2021</Text>
        </View>
    </Pressable>
  )
}

export default ChapterItem

const styles = StyleSheet.create({
    itemContainer:{
        flexDirection:'row',
        marginTop: 10,
        backgroundColor: AppColors.primary_white
    }

})