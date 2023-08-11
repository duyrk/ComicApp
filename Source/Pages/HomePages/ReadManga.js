import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Pressable,
} from 'react-native';
import React, {useRef, useState, useCallback, useMemo} from 'react';
import {AppColors} from '../../Constants/AppColors';
import AppToolbar from '../../Components/AppToolbar';
import FastImage from 'react-native-fast-image';
import {Typographies} from '../../Constants/Typographies';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {routes} from '../util';
import {useNavigation, StackActions} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import ChapterItem from './Items/ChapterItem';

const data = [
  {
    _id: '1',
    image:
      'https://cdn.mangaclash.com/manga_5fba289406211/d40c957b6a003159c2d012c38f7df20c/1.jpg',
  },
  {
    _id: '2',
    image:
      'https://cdn.mangaclash.com/manga_5fba289406211/d40c957b6a003159c2d012c38f7df20c/2.jpg',
  },
  {
    _id: '3',
    image:
      'https://cdn.mangaclash.com/manga_5fba289406211/d40c957b6a003159c2d012c38f7df20c/3.jpg',
  },
  {
    _id: '4',
    image:
      'https://cdn.mangaclash.com/manga_5fba289406211/d40c957b6a003159c2d012c38f7df20c/4.jpg',
  },
  {
    _id: '5',
    image:
      'https://pm1.narvii.com/6561/519a49b320d2c56886bb166787ab144ce7611e99_hq.jpg',
  },
];
const chapterdata = [
  {
    _id: '1',
    title: '',
    thumbnail: '',
    date: '',
  },
  {
    _id: '2',
    title: '',
    thumbnail: '',
    date: '',
  },
  {
    _id: '3',
    title: '',
    thumbnail: '',
    date: '',
  },
  {
    _id: '4',
    title: '',
    thumbnail: '',
    date: '',
  },
  {
    _id: '5',
    title: '',
    thumbnail: '',
    date: '',
  },
  {
    _id: '6',
    title: '',
    thumbnail: '',
    date: '',
  },
];
const ReadManga = () => {
  const {windowwidth} = Dimensions.get('window').width;
  const {dispatch} = useNavigation();
  const handleOption1 = () => {
    dispatch(StackActions.replace(routes.home));
  };
  const handleOption2 = () => {
    dispatch(StackActions.replace(routes.library));
  };

  const scrollY = new Animated.Value(0);
  // ref
  const bottomSheetModalRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  const onDismiss = () => {};
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <ScrollView
        style={[styles.container]}
        stickyHeaderIndices={[0]}
        nestedScrollEnabled={true}>
        <View
          style={{
            paddingStart: 23,
            paddingEnd: 22,
            backgroundColor: AppColors.primary_white,
          }}>
          <AppToolbar
            type="tools"
            title="Manga"
            option1={handleOption1}
            option2={handleOption2}
            option3={handlePresentModalPress}></AppToolbar>
        </View>

        <View>
          {data.map(item => (
            <FastImage
              key={item._id}
              source={{uri: item.image}}
              style={{
                width: windowwidth,
                height: undefined,
                aspectRatio: 0.681020733652312,
              }}
              resizeMode={FastImage.resizeMode.contain}></FastImage>
          ))}
        </View>
        <View
          style={{
            marginVertical: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Pressable
            android_ripple={{color: AppColors.primary}}
            style={{
              flex: 1,
              alignItems: 'center',
              borderWidth: 1,
              borderColor: AppColors.primary,
              padding: 13,
              borderBottomStartRadius: 10,
              borderTopStartRadius: 10,
            }}>
            <Text style={[Typographies.h4, {color: AppColors.primary}]}>
              Previous
            </Text>
          </Pressable>
          <Pressable
            android_ripple={{color: AppColors.primary}}
            style={{
              flex: 1,
              alignItems: 'center',
              borderWidth: 1,
              borderColor: AppColors.primary,
              padding: 13,
              borderBottomEndRadius: 10,
              borderTopEndRadius: 10,
            }}>
            <Text style={[Typographies.h4, {color: AppColors.primary}]}>
              Next
            </Text>
          </Pressable>
        </View>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          backdropComponent={backdropProps => (
            <BottomSheetBackdrop {...backdropProps} />
          )}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enableDismissOnClose
          onDismiss={onDismiss}>
          <View style={styles.contentContainer}>
            <FlatList
              data={chapterdata}
              keyExtractor={item => item._id}
              renderItem={item => <ChapterItem></ChapterItem>}></FlatList>
          </View>
        </BottomSheetModal>
      </ScrollView>
    </BottomSheetModalProvider>
  );
};

export default ReadManga;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary_white,
  },
});
