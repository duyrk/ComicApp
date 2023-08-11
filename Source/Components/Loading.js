import {View, Text, Image} from 'react-native';
import React from 'react';
import {AppColors} from '../Constants/AppColors';
const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.primary_white,
      }}>
      <Image source={require('../assets/gifs/loading.gif')}></Image>
    </View>
  );
};

export default Loading;
