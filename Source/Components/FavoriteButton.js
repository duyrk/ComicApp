import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FastImage from 'react-native-fast-image'

const FavoriteButton = (props) => {
    const {isActive} = props
 
    return (
        <View style={{width:40, height:40}}>
            { isActive === false &&
           
                <FastImage source={require('../Images/ic_favorite_inactive.png')}
                    style={{ width: 40, height: 40 }}
                ></FastImage>
          
            }
              { isActive === true &&
     
                <FastImage source={require('../Images/ic_favorite_active.png')}
                    style={{ width: 40, height: 40 }}
                ></FastImage>
        
            }
        </View>
    )
}

export default FavoriteButton

const styles = StyleSheet.create({})