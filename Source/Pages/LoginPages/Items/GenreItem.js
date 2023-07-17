import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FastImage from 'react-native-fast-image'
import { AppColors } from '../../../Constants/AppColors'
import DropShadow from 'react-native-drop-shadow'
import LinearGradient from 'react-native-linear-gradient'
import { Typographies } from '../../../Constants/Typographies'

const GenreItem = (props) => {
    const { data } = props
    const [isSelected, setisSelected] = useState(false)
    const handleSelected = () => {
        let temp = isSelected;
        setisSelected(!temp)
    }
    return (
        <Pressable style={{
            width: 100,
            margin:10
        }}
            onPress={handleSelected} >
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
                {
                    isSelected === false &&

                    <View style={styles.itemContainer}>
                        <FastImage source={data.genreImage}
                            style={{ width: 60, height: 60 }} resizeMode={FastImage.resizeMode.contain}></FastImage>
                        <Text style={styles.genreText}>{data.genreName}</Text>
                    </View>
                }
                {
                    isSelected === true &&
                    <LinearGradient colors={['#A2B2FC', '#FFF1BE']} style={styles.itemContainer} >
                        <FastImage source={data.genreImage}
                            style={{ width: 60, height: 60 }} resizeMode={FastImage.resizeMode.contain}></FastImage>
                        <Text style={[styles.genreText]}>{data.genreName}</Text>
                    </LinearGradient>
                }
            </DropShadow>
        </Pressable>
    )
}

export default GenreItem

const styles = StyleSheet.create({
    itemContainer: {
        width: 100,
        height: 117,
        backgroundColor: AppColors.primary_white,
        borderRadius: 15,
        alignItems: 'center',
        padding: 14
    },
    genreText: {
        marginTop: 10
    }
})