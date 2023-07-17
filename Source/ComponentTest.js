import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Typographies } from './Constants/Typographies'
import AppButton from './Components/AppButton'
import AppInputField from './Components/AppInputField'
import { AppColors } from './Constants/AppColors'
const ComponentTest = () => {
    const [handleInput, sethandleInput] = useState('')
  return (
    <View>
         <Text style={Typographies.h1}>H1</Text>
     <Text style={Typographies.h2}>H1</Text>
     <Text style={Typographies.h3}>H1</Text>
     <Text style={Typographies.h4}>H1</Text>
     <Text style={Typographies.h5}>H1</Text>
     <Text style={Typographies.h6}>H1</Text>
     <AppButton value="Normal" type='normal' onPress={()=>{console.log(handleInput)}} ></AppButton>
     <AppButton value="Active" type='active' onPress={()=>{console.log('alo')}} ></AppButton>
     <AppButton value="Disabled" type='disabled' onPress={()=>{console.log('alo')}} ></AppButton>
    <AppInputField type='text' value='alo' onChangeText={sethandleInput} inputColor={AppColors.secondary_gray}></AppInputField>
    <AppInputField type='password' value='alo' onChangeText={sethandleInput} inputColor={AppColors.secondary_gray}></AppInputField>
    </View>
  )
}

export default ComponentTest

const styles = StyleSheet.create({})