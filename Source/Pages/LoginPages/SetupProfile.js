import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../Constants/AppColors'
import FastImage from 'react-native-fast-image'
import AppInputField from '../../Components/AppInputField'
import AppButton from '../../Components/AppButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SetupProfile = () => {
    return (
        <KeyboardAwareScrollView>

       
        <View style={styles.container}>

            <View style={{ alignItems: 'center' }}>
                <Pressable style={styles.avatarContainer}>
                    <View style={styles.avatarDefault}>

                    </View>
                    <View style={{ position: 'absolute', bottom: -17, right: 0 }}>
                        <FastImage source={require('../../Images/ic_plusBackGround.png')} style={{ width: 30, height: 30 }} resizeMode={FastImage.resizeMode.contain}></FastImage>
                        <FastImage source={require('../../Images/ic_plusForeGround.png')} style={{ width: 16, height: 17, bottom: 22.5, left: 7 }} resizeMode={FastImage.resizeMode.contain}></FastImage>
                    </View>

                </Pressable>
            </View>


            <View style={[styles.inputContainer, { marginTop: 67 }]}>
                <AppInputField type='text' placeHolder='Enter your name' inputColor={AppColors.primary_black}></AppInputField>
            </View>
            <View style={[styles.inputContainer, { marginTop: 48 }]}>
                <AppInputField type='text' placeHolder='Enter your nickname' inputColor={AppColors.primary_black}></AppInputField>
            </View>
            <View style={[styles.inputContainer, { marginTop: 48 }]}>
                <AppInputField type='text' placeHolder='Email' inputColor={AppColors.primary_black}></AppInputField>
            </View>
            <View style={[styles.inputContainer, { marginTop: 48 }]}>
                <AppInputField type='text' placeHolder='Date of Birth' inputColor={AppColors.primary_black}></AppInputField>
            </View>
            <View style={[styles.inputContainer, { marginTop: 48 }]}>
                <AppInputField type='text' placeHolder='Bio' inputColor={AppColors.primary_black}></AppInputField>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton type='disabled' value='Continue' ></AppButton>
            </View>
        </View>
        </KeyboardAwareScrollView>
    )
}

export default SetupProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.primary_white,
        justifyContent:'space-between'

    },
    avatarContainer: {
        // position:'absolute',
        marginTop: 30,
    },
    avatarDefault: {
        width: 100,
        height: 100,
        backgroundColor: AppColors.secondary_gray,
        borderRadius: 50
    },
    inputContainer: {
        paddingStart: 56,
        paddingEnd: 39
    },
    buttonContainer: {
        paddingHorizontal: 25,
        marginTop: 48,
        paddingBottom:25
    }
})