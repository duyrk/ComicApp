import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { AppColors } from '../../../Constants/AppColors';
import { Typographies } from '../../../Constants/Typographies';
const BannerItem = (props) => {
  const {data} = props
  const windowWidth = Dimensions.get('window').width;
  const height = windowWidth * 50 / 100;
  return (
    <View style={{backgroundColor:'red', width: windowWidth - 55}}>
       <FastImage source={{ uri: data.image }}
                        style={{ width: windowWidth - 55, height: height }}
                        resizeMode={FastImage.resizeMode.cover}
        ></FastImage>
        <View style={[styles.labelContainer,{width:windowWidth-55}]}>
        <Text style={[styles.label,Typographies.h3]}>{data.name}</Text>
        </View>
    </View>
  )
}

export default BannerItem

const styles = StyleSheet.create({
  labelContainer:{
    position:'absolute',
    bottom:0,
    backgroundColor:'rgba(52, 52, 52, 0.8)',
    height:50,
    alignItems:'center',
    justifyContent:'center'
  },
  label:{
    color:AppColors.primary_white,
    fontStyle:'italic',
    fontWeight:'600'
  }
})