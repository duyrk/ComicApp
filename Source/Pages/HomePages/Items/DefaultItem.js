import {Pressable, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Typographies} from '../../../Constants/Typographies';
import {AppColors} from '../../../Constants/AppColors';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../util';
import DropShadow from 'react-native-drop-shadow';
const {width, height} = Dimensions.get('screen');
const DefaultItem = props => {
  const {data, index} = props;
  const {navigate} = useNavigation();

  return (
    <Pressable
      style={[styles.itemContainer, {marginTop: index % 2 ? 0 : 10}]}
      onPress={() => {
        navigate(routes.manga, {id: data._id});
      }}>
      <DropShadow
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}>
        <FastImage
          source={{uri: data.cover}}
          style={{width: 160, height: 200}}
          resizeMode={FastImage.resizeMode.contain}></FastImage>
      </DropShadow>
      <View style={{paddingHorizontal: 5}}>
        <Text style={[styles.mangaLabel, Typographies.h6]}>{data.name}</Text>
        <Text style={[styles.mangaLabel, Typographies.h6]}>
          Chapter {data.chapter[data.chapter.length - 1].chapter_number}
        </Text>
      </View>
    </Pressable>
  );
};

export default DefaultItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mangaLabel: {
    marginTop: 5,
    color: AppColors.primary_black,
    textAlign: 'center',
  },
});
