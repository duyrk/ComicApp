import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Typographies } from '../Constants/Typographies'
import FastImage from 'react-native-fast-image'
import { AppColors } from '../Constants/AppColors'
const Type = ['text', 'password']
const AppInputField = (props) => {
    const { type, inputColor, value, placeHolder, onChangeText = (text) => { } } = props
    const [inputType, setinputType] = useState('')
    const [inputState, setinputState] = useState(value)
    const [isPassword, setisPassword] = useState(true)
    switch (type) {
        case Type[0]: {
            if (inputType == Type[0]) {
                break;
            }
            setinputType(Type[0])
            break;
        }
        case Type[1]: {
            if (inputType == Type[1]) {
                break;
            }
            setinputType(Type[1])
            break;
        }
        default: break;
    }
    const handleOnChangeText = (text) => {
        onChangeText(text)// chuyen ve ben call
        setinputState(text)//thay doi du lieu

    }
    const handlePassword = () =>{
        let temp = isPassword
        setisPassword(!temp)
    }
    return (
        <View>
            {inputType === Type[0] &&
                <TextInput placeholder={placeHolder} placeholderTextColor={AppColors.secondary_gray} style={[styles.inputField, Typographies.h4, { borderBottomColor: inputColor, color: inputColor }]} onChangeText={handleOnChangeText} value={inputState}></TextInput>
            }
            {inputType === Type[1] &&
                <View style={[{ flexDirection: 'row', alignItems: 'center', borderBottomColor: inputColor, color: inputColor, paddingEnd: 22 }, styles.inputField]}>
                    <TextInput secureTextEntry={isPassword} placeholder={placeHolder} placeholderTextColor={AppColors.secondary_gray} style={[styles.inputFieldPass, Typographies.h4,{color:inputColor}]} onChangeText={handleOnChangeText} value={inputState}></TextInput>
                    <Pressable onPress={handlePassword}>
                        <FastImage source={ isPassword ? require('../Images/ic_eye_slash.png') : require('../Images/ic_eye.png')}
                            style={{ width: 25, height: 25 }}
                            resizeMode={FastImage.resizeMode.contain}
                            tintColor={inputColor}
                        ></FastImage>
                    </Pressable>
                </View>
            }
        </View>
    )
}

export default AppInputField

const styles = StyleSheet.create({
    inputField: {
        borderBottomWidth: 1,
        paddingStart: 20,
        paddingBottom: 5,
        backgroundColor: 'transparent',

    },
    inputFieldPass: {
        flex: 1,
        paddingStart: 0,
        paddingBottom: 4,
    }
})