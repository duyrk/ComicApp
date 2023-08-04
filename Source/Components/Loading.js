import {View, Text, Image} from 'react-native';
import React from 'react';
const Loading = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('../assets/gifs/loading.gif')}></Image>
    </View>
  );
};

export default Loading;
