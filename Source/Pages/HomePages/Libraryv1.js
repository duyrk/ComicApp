import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState, useMemo, useCallback, useRef} from 'react';
import {AppColors} from '../../Constants/AppColors';
import DropShadow from 'react-native-drop-shadow';
import {Typographies} from '../../Constants/Typographies';
import FastImage from 'react-native-fast-image';
import LibraryItem from './Items/LibraryItem';
import useForceUpdate from 'use-force-update';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {routes} from '../util';
import {useNavigation} from '@react-navigation/native';
const data1 = [
  {
    _id: '1',
    thumbnail: '',
    name: 'Nisekoi',
    language: 'English',
    chapter: '212',
    genres: ['Rom-com', 'Harem', 'Slice of Life', 'Drama'],
  },
  {
    _id: '2',
    thumbnail: '',
    name: 'Nisekoi',
    language: 'English',
    chapter: '212',
    genres: ['Rom-com', 'Harem'],
  },
  {
    _id: '3',
    thumbnail: '',
    name: 'Nisekoi',
    language: 'English',
    chapter: '212',
    genres: ['Tragedy'],
  },
  {
    _id: '4',
    thumbnail: '',
    name: 'Nisekoi',
    language: 'English',
    chapter: '212',
    genres: ['Tragedy'],
  },
  {
    _id: '5',
    thumbnail: '',
    name: 'Nisekoi',
    language: 'English',
    chapter: '212',
    genres: ['Horror'],
  },
];

const genres = [
  {
    id: '1',
    name: 'All',
    filled: true,
  },
  {
    id: '2',
    name: 'Rom-Com',
    filled: false,
  },
  {
    id: '3',
    name: 'Rom-Com',
    filled: false,
  },
  {
    id: '4',
    name: 'Rom-Com',
    filled: false,
  },
  {
    id: '5',
    name: 'Rom-Com',
    filled: false,
  },
];

const Libraryv1 = () => {
  const [data, setdata] = useState(genres);
  const forceUpdate = useForceUpdate();
  const [genre, setgenre] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  const [isSheeted, setisSheeted] = useState(false);
  const {navigate} = useNavigation();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  // ref
  const bottomSheetModalRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ['25%', '30%'], []);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setisSheeted(true);
  }, []);
  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  const onDismiss = () => {
    setisSheeted(false);
  };
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    console.log(genre);
    //call api here
  }, [genre]);

  const handleFilled = number => {
    genres.forEach(element => {
      if (element.id == number) {
        element.filled = true;
        setgenre(element.name);
      } else {
        element.filled = false;
      }
    });

    setdata(genres);
    forceUpdate();
  };

  return (
    <BottomSheetModalProvider>
      <ScrollView
        style={[styles.container, isSheeted ? {opacity: 0.3} : {opacity: 1}]}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}></RefreshControl>
        }
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {/* Header Start */}

        <Pressable
          style={styles.header}
          onPress={() => {
            navigate(routes.user);
          }}>
          <View style={styles.infoContainer}>
            <DropShadow
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 3,
              }}>
              <Pressable
                style={styles.avatarContainer}
                onPress={() => {
                  navigate(routes.user);
                }}>
                <FastImage
                  source={require('../../Images/img_avatar.jpg')}
                  style={{width: '100%', height: '100%'}}
                  resizeMode={FastImage.resizeMode.cover}></FastImage>
              </Pressable>
            </DropShadow>

            <View style={{width: '60%', marginStart: 15}}>
              <Text style={[Typographies.h4, {color: AppColors.primary_black}]}>
                raiko
              </Text>
              <Text style={{marginTop: 4}}>Just a normal weeb!</Text>
            </View>
          </View>
          <Pressable onPress={handlePresentModalPress}>
            <FastImage
              source={require('../../Images/ic_option.png')}
              style={{width: 47, height: 47}}
              resizeMode={FastImage.resizeMode.contain}></FastImage>
          </Pressable>
        </Pressable>
        {/* Header End */}
        <FlatList
          data={data}
          horizontal
          renderItem={({item}) => (
            <DropShadow
              key={item.id}
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,

                elevation: 2,
                paddingHorizontal: 5,
                paddingBottom: 5,
                paddingTop: 1,
              }}>
              <TouchableOpacity
                onPress={() => handleFilled(item.id)}
                style={{
                  minWidth: 70,
                  paddingHorizontal: 10,
                  height: 30,
                  backgroundColor:
                    item.filled == true
                      ? AppColors.primary
                      : AppColors.primary_white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    color:
                      item.filled == true
                        ? AppColors.primary_white
                        : AppColors.primary_black,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </DropShadow>
          )}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}></FlatList>

        <View>
          {data1.map(item => (
            <LibraryItem data={item} key={item._id}></LibraryItem>
          ))}
        </View>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enableDismissOnClose
          onDismiss={onDismiss}>
          <View style={styles.contentContainer}>
            <Pressable
              onPress={() => {
                navigate(routes.home);
              }}
              style={styles.options}
              android_ripple={{color: AppColors.primary}}>
              <Text style={[Typographies.h3]}>Home</Text>
            </Pressable>
            <Pressable
              onPress={routes.user}
              style={styles.options}
              android_ripple={{color: AppColors.primary}}>
              <Text style={[Typographies.h3]}>Favourites</Text>
            </Pressable>
            <Pressable
              style={styles.options}
              android_ripple={{color: AppColors.primary}}>
              <Text style={[Typographies.h3]}>Recent</Text>
            </Pressable>
          </View>
        </BottomSheetModal>
      </ScrollView>
    </BottomSheetModalProvider>
  );
};

export default Libraryv1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary_white,
    paddingStart: 23,
    paddingEnd: 22,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 14,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    overflow: 'hidden',
  },
  options: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
