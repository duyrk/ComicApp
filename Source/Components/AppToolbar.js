import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FastImage from 'react-native-fast-image'
import { AppColors } from '../Constants/AppColors'
import { Typographies } from '../Constants/Typographies'
const Type = ["back","tools"]
const AppToolbar = (props) => {
    const {onPressBack, onPressOption, title, type} = props
    const [toolBarType, settoolBarType] = useState('')
    switch (type) {
        case Type[0]: {
          if (toolBarType == Type[0]) {
            break;
          }
          settoolBarType(Type[0])
          break;
        }
        case Type[1]: {
          if (toolBarType == Type[1]) {
            break;
          }
          settoolBarType(Type[1])
          break;
        }
        
        default: break;
      }
  return (
    <View style={styles.container}>
    <Pressable onPress={onPressBack}>
        <FastImage source={require('../Images/ic_arrow.png')} 
        style={{width:20, height:20}}
        resizeMode={FastImage.resizeMode.contain}
        ></FastImage>
    </Pressable>
    <Text style={[Typographies.h4,{color: AppColors.primary_black}]}>{title}</Text>
    {
        toolBarType === Type[1] &&     <Pressable onPress={onPressOption}>
        <FastImage source={require('../Images/ic_3dots.png')}
         style={{width:20, height:20}}
         resizeMode={FastImage.resizeMode.contain}
        ></FastImage>
    </Pressable>
    }

    </View>
  )
}

export default AppToolbar

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:AppColors.primary_white,
        paddingTop:10,
        paddingBottom:15
    }
})