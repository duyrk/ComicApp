import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'

const ScaledImage = (props) => {
    const { windowwidth } = Dimensions.get('window').width;
    const {uri} = props
    const [width, setwidth] = useState()
    const [height, setheight] = useState()
    Image.getSize(uri, (width, height)=>{
        if(width && !height){
            setwidth(width)
            setheight(height * (width/width))
        }else if(!width && height){
            setwidth(width*(height/height))
            setheight(height)
        }else{
            setwidth(width)
            setheight(height)
        }
    })
    console.log('width:'+width)
    console.log('height:'+ height)
  return (
    // <Image source={uri} style={{width: width, height: height}}></Image>
  
     <Image source={{uri: uri }} style={{width:windowwidth, height:undefined, aspectRatio:1}} resizeMode='cover'></Image>
   
  )
}

export default ScaledImage

const styles = StyleSheet.create({})