import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Typographies} from '../../../Constants/Typographies';
import {AppColors} from '../../../Constants/AppColors';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../util';

const ChapterItem = props => {
  const {data} = props;
  const date = epoch => {
    const epochTime = new Date(epoch);
    const d = epochTime.getDate();
    const m = epochTime.getMonth() + 1;
    const y = epochTime.getFullYear();
    return `${d}/${m}/${y}`;
  };
  const navigation = useNavigation();
  return (
    <Pressable
      android_ripple={{color: AppColors.secondary_gray}}
      style={styles.itemContainer}
      onPress={() => {
        navigation.push(routes.read, {id: data._id});
      }}>
      <View
        style={{
          marginStart: 5,
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View>
          <Text style={[Typographies.h4, {color: AppColors.primary_black}]}>
            {data.title}
          </Text>
          <Text style={{marginTop: 3, color: AppColors.secondary_gray}}>
            Chapter {data.chapter_number}
          </Text>
        </View>
        <Text style={{marginTop: 5, color: AppColors.secondary_gray}}>
          {date(data.date)}
        </Text>
      </View>
    </Pressable>
  );
};

export default ChapterItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    backgroundColor: AppColors.primary_white,
    borderBottomWidth: 1,
    borderBottomColor: '#EBECF0',
    paddingHorizontal: 22,
  },
});
