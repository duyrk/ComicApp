import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Typographies } from '../../Constants/Typographies'
import { AppColors } from '../../Constants/AppColors'
import FastImage from 'react-native-fast-image'
import DropShadow from 'react-native-drop-shadow'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton'
import AppInputField from '../../Components/AppInputField'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const SignUp = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
 
        <View style={[styles.container]}>
            <View style={styles.socialContainer}>
                <View style={styles.welcomeContainter}>
                    <Text style={[Typographies.h1, { color: AppColors.primary_black }]}>Welcome</Text>
                    <Text style={[Typographies.h5, { color: AppColors.secondary_gray, marginTop: 5 }]}>Sign in to start</Text>
                </View>
                <View style={{ paddingHorizontal: 45, marginTop: 60 }}>
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
                        }}>
                        <Pressable style={styles.socialLoginButton}>
                            <FastImage
                                source={require('../../Images/ic_google.png')}
                                style={{ width: 28, height: 29 }}
                                resizeMode={FastImage.resizeMode.contain}
                            ></FastImage>
                            <Text style={[styles.buttonText, Typographies.h4]}>Continue with Google</Text>
                        </Pressable>
                    </DropShadow>
                </View>
                <View style={{ paddingHorizontal: 45, marginTop: 40 }}>
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
                        }}>
                        <Pressable style={[styles.socialLoginButton, { backgroundColor: '#2079FF' }]}>
                            <FastImage
                                source={require('../../Images/ic_meta.png')}
                                style={{ width: 28, height: 29 }}
                                resizeMode={FastImage.resizeMode.contain}
                            ></FastImage>
                            <Text style={[styles.buttonText, Typographies.h4, { color: AppColors.primary_white }]}>Continue with Meta</Text>
                        </Pressable>
                    </DropShadow>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                    <Text style={[Typographies.h5, { color: AppColors.primary_black }]}>Have an account?</Text>
                    <Pressable><Text style={[Typographies.h5, { color: '#2079FF', marginStart: 5 }]}>Sign In!</Text></Pressable>
                </View>
            </View>
            <View style={[styles.defautLogin]}>
                <LinearGradient colors={['#A2B2FC', '#FFF1BE']} style={{ flex:1, justifyContent:'space-between' }} >
                    <View>   
                    <View style={{ paddingHorizontal: 45, marginTop: 40 }}>
                        <AppInputField type='text' inputColor={AppColors.primary_white} placeHolder='Login'></AppInputField>
                    </View>
                    <View style={{ paddingHorizontal: 45, marginTop: 30 }}>
                        <AppInputField type='password' inputColor={AppColors.primary_white} placeHolder='Password'></AppInputField>
                    </View>
                    <View style={{ paddingHorizontal: 45, marginTop: 30 }}>
                        <AppInputField type='password' inputColor={AppColors.primary_white} placeHolder='Confirm Password'></AppInputField>
                    </View>
                    </View>
                    <View style={{   paddingHorizontal: 25, paddingBottom:30}}>
                        <AppButton type='disabled' value='Continue'></AppButton>
                    </View>

                </LinearGradient>
            </View>
        </View>
      

    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.primary_white,
        flex:1
    },
    socialContainer: {
        flex:2.3
    },
    welcomeContainter: {
        marginTop: 56,
        alignItems: 'center',
    },
    socialLoginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 25,
        paddingHorizontal: 25,
        backgroundColor: AppColors.primary_white,
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
        color: AppColors.primary_black
    },
    defautLogin: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        overflow: 'hidden', 
        flex:2.2
    }
})