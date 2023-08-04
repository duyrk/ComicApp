import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Typographies} from '../../../Constants/Typographies';
import {AppColors} from '../../../Constants/AppColors';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../util';

const DefaultItem = props => {
  const {data} = props;
  const {navigate} = useNavigation();
  return (
    <Pressable
      style={styles.itemContainer}
      onPress={() => {
        navigate(routes.manga);
      }}>
      <FastImage
        source={{uri: data.image}}
        style={{width: 140, height: 170, borderRadius: 15}}
        resizeMode={FastImage.resizeMode.cover}></FastImage>
      <View>
        <Text style={[styles.mangaLabel, Typographies.h5]}>{data.name}</Text>
        <Text style={[styles.mangaLabel, Typographies.h5]}>Chap 112</Text>
      </View>
    </Pressable>
  );
};

export default DefaultItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: 140,
    marginTop: 10,
  },
  mangaLabel: {
    marginTop: 8,
    color: AppColors.primary_black,
  },
});
