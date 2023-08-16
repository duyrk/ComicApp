import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Typographies} from '../../../Constants/Typographies';
import {AppColors} from '../../../Constants/AppColors';
import DropShadow from 'react-native-drop-shadow';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../util';

const LibraryItem = props => {
  const {data} = props;
  const {navigate} = useNavigation();
  return (
    <Pressable
      style={{marginTop: 10}}
      onPress={() => {
        navigate(routes.manga, {id: data._id});
      }}>
      <DropShadow
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
        <FastImage
          source={{uri: data.banner}}
          style={{width: '100%', height: 200, borderRadius: 20}}
          resizeMode={FastImage.resizeMode.cover}></FastImage>
      </DropShadow>
      <View style={{marginTop: 13}}>
        <View style={{paddingHorizontal: 10}}>
          <Text style={[Typographies.h3, {color: AppColors.primary_black}]}>
            {data.name}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[{color: AppColors.secondary_gray}]}>
              {data.language}
            </Text>
            <Text style={[{color: AppColors.secondary_gray}]}>
              Chapter {data.chapter[data.chapter.length - 1].chapter_number}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default LibraryItem;

const styles = StyleSheet.create({});
