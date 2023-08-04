import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {AppColors} from '../../../Constants/AppColors';
import {Typographies} from '../../../Constants/Typographies';
import LinearGradient from 'react-native-linear-gradient';
import DropShadow from 'react-native-drop-shadow';
const genreData = [
  {
    id: 1,
    name: 'Action',
  },
  {
    id: 2,
    name: 'Romance',
  },
  {
    id: 3,
    name: 'Comedy',
  },
  {
    id: 4,
    name: 'School Life',
  },
];
const SearchItem = props => {
  const {data} = props;
  return (
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
      <View style={styles.itemContainer}>
        <FastImage
          source={{uri: data.image}}
          style={{width: 90, height: 120}}
          resizeMode={FastImage.resizeMode.contain}></FastImage>
        <View style={styles.itemContentRight}>
          <View style={styles.itemInfoTop}>
            <View style={{flex: 1}}>
              <View style={styles.mangaTitle}>
                <Text
                  style={[Typographies.h4, {color: AppColors.primary_black}]}>
                  {data.name}
                </Text>
              </View>
              <Text style={{color: AppColors.secondary_gray}}>
                From MangaKakalot
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}>
            <Text style={[{color: AppColors.primary_black}]}>Genres:</Text>
            <View
              style={{flexDirection: 'row', flexWrap: 'wrap', width: '90%'}}>
              {genreData.map(item => (
                <Text
                  key={item.id}
                  style={[{color: AppColors.primary_black, marginStart: 5}]}>
                  {item.name}
                </Text>
              ))}
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[{color: AppColors.primary_black}]}>Chapter 269</Text>
          </View>
        </View>
      </View>
    </DropShadow>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: AppColors.primary_white,
    flexDirection: 'row',
    margin: 5,
  },
  itemContentRight: {flex: 1, justifyContent: 'space-between', marginStart: 5},
  itemInfoTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mangaTitle: (style = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
});
