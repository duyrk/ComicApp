import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Typographies} from '../../../Constants/Typographies';
import {AppColors} from '../../../Constants/AppColors';

const ChapterItem = props => {
  const {data} = props;
  return (
    <Pressable
      android_ripple={{color: AppColors.secondary_gray}}
      style={styles.itemContainer}
      onPress={() => {
        console.log('alo');
      }}>
      <View
        style={{
          marginStart: 5,
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View>
          <Text style={[Typographies.h4, {color: AppColors.primary_black}]}>
            Cuộc gặp gỡ định mệnh
          </Text>
          <Text style={{marginTop: 3, color: AppColors.secondary_gray}}>
            Chapter 1
          </Text>
        </View>
        <Text style={{marginTop: 5, color: AppColors.secondary_gray}}>
          14/09/2021
        </Text>
      </View>
    </Pressable>
  );
};

export default ChapterItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: AppColors.primary_white,
    borderBottomWidth: 1,
    borderBottomColor: '#EBECF0',
    paddingHorizontal: 22,
  },
});
