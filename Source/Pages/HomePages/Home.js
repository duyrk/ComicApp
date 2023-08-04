import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useRef, useState, useMemo, useCallback} from 'react';
import {AppColors} from '../../Constants/AppColors';
import FastImage from 'react-native-fast-image';
import {Typographies} from '../../Constants/Typographies';
import DropShadow from 'react-native-drop-shadow';
import App from '../../../App';
import Slider from '../../Components/Slider';
import DefaultItem from './Items/DefaultItem';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {routes} from '../util';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import DetailInfoItem from './Items/DetailInfoItem';
import RecentItem from './Items/RecentItem';
import SearchItem from './Items/SearchItem';

const mangaData = [
  {
    _id: '1',
    image:
      'https://upload.wikimedia.org/wikipedia/en/8/86/Kaguya-sama_-_Love_is_War%2C_volume_1.jpg',
    name: "Masamune's Revenge",
  },
  {
    _id: '2',
    image:
      'https://upload.wikimedia.org/wikipedia/en/8/86/Kaguya-sama_-_Love_is_War%2C_volume_1.jpg',
    name: 'Kaguya-sama: Love is War',
  },
  {
    _id: '3',
    image: 'https://i7.xem-truyen.com/manga/0/70/566.thumb_500x.jpg',
    name: 'Nisekoi',
  },
  {
    _id: '4',
    image:
      'https://static.wikia.nocookie.net/charlotte-anime/images/8/8a/Charlotte_Manga.jpg/revision/latest/scale-to-width-down/180?cb=20201007122617&path-prefix=de',
    name: 'Charlotte',
  },
  {
    _id: '5',
    image:
      'https://static.wikia.nocookie.net/bocchi-the-rock/images/3/31/Volume_4.png/revision/latest?cb=20221027072136',
    name: 'Bocchi The Rock!',
  },
  {
    _id: '6',
    image: 'https://pbs.twimg.com/media/EZG_CpSXgAMBYJR.jpg:large',
    name: "Komi-san can't communicate",
  },
  {
    _id: '7',
    image:
      'https://official-complete-1.granpulse.us/manga/Masamune-Kun-No-Revenge/0040-001.png',
    name: "Masamune's Revenge",
  },
  {
    _id: '8',
    image:
      'https://upload.wikimedia.org/wikipedia/en/8/86/Kaguya-sama_-_Love_is_War%2C_volume_1.jpg',
    name: 'Kaguya-sama: Love is War',
  },
  {
    _id: '9',
    image: 'https://i7.xem-truyen.com/manga/0/70/566.thumb_500x.jpg',
    name: 'Nisekoi',
  },
  {
    _id: '10',
    image:
      'https://static.wikia.nocookie.net/charlotte-anime/images/8/8a/Charlotte_Manga.jpg/revision/latest/scale-to-width-down/180?cb=20201007122617&path-prefix=de',
    name: 'Charlotte',
  },
  {
    _id: '11',
    image:
      'https://static.wikia.nocookie.net/bocchi-the-rock/images/3/31/Volume_4.png/revision/latest?cb=20221027072136',
    name: 'Bocchi The Rock!',
  },
  {
    _id: '12',
    image: 'https://pbs.twimg.com/media/EZG_CpSXgAMBYJR.jpg:large',
    name: "Komi-san can't communicate",
  },
];

const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [isSheeted, setisSheeted] = useState(false);
  const [search, setSearch] = useState('');
  const [handleScroll, sethandleScroll] = useState(true);
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
    if (search.length > 0) {
      sethandleScroll(false);
    } else {
      sethandleScroll(true);
    }
  }, [search]);

  return (
    <BottomSheetModalProvider>
      <ScrollView
        scrollEnabled={handleScroll}
        style={[styles.container, isSheeted ? {opacity: 0.3} : {opacity: 1}]}
        stickyHeaderIndices={[1]}
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
              <Text style={{marginTop: 4, color: AppColors.secondary_gray}}>
                Just a normal weeb!
              </Text>
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
        {/* Search Bar Start */}
        <View
          style={{
            zIndex: 1,
            elevation: 1,
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
            <View style={styles.searchBarContainer}>
              <View style={styles.seachBarLeft}>
                <FastImage
                  source={require('../../Images/ic_search.png')}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  resizeMode={FastImage.resizeMode.contain}></FastImage>
                <TextInput
                  style={{flex: 1, paddingStart: 10, color: '#000'}}
                  placeholder="Search Manga"
                  onChangeText={setSearch}
                  value={search}></TextInput>
              </View>
              {handleScroll == false && (
                <Pressable
                  style={styles.searchBarRight}
                  onPress={() => {
                    setSearch('');
                  }}>
                  <FastImage
                    source={require('../../Images/ic_delete.png')}
                    style={{width: 20, height: 10}}
                    resizeMode={FastImage.resizeMode.contain}></FastImage>
                </Pressable>
              )}
            </View>
          </DropShadow>
          {/* Search Bar End */}
          {handleScroll == false && (
            <View style={{marginTop: 10, height: 500}}>
              <ScrollView>
                {mangaData.map(item => (
                  <SearchItem data={item} key={item._id}></SearchItem>
                ))}
              </ScrollView>
            </View>
          )}
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingEnd: 15,
          }}>
          <Text style={[Typographies.h4, {color: AppColors.primary_black}]}>
            Trending Manga
          </Text>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Slider></Slider>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingEnd: 15,
          }}>
          <Text style={[Typographies.h4, {color: AppColors.primary_black}]}>
            Recent
          </Text>
        </View>
        <FlatList
          data={mangaData}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <RecentItem data={item} key={item._id}></RecentItem>
          )}
          horizontal
          snapToAlignment="center"></FlatList>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingEnd: 15,
          }}>
          <Text style={[Typographies.h4, {color: AppColors.primary_black}]}>
            New Manga
          </Text>
          <Pressable>
            <Pressable>
              <Text
                style={([Typographies.h6], {color: AppColors.secondary_gray})}>
                See All
              </Text>
            </Pressable>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 18,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            paddingHorizontal: 15,
            paddingBottom: 30,
          }}>
          {mangaData.map(item => (
            <DefaultItem data={item} key={item._id}></DefaultItem>
          ))}
          {/* <DefaultItem></DefaultItem> */}
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
                navigate(routes.library);
              }}
              style={styles.options}
              android_ripple={{color: AppColors.primary}}>
              <Text style={[Typographies.h3, {color: AppColors.primary_black}]}>
                Library
              </Text>
            </Pressable>
            <Pressable
              onPress={routes.user}
              style={styles.options}
              android_ripple={{color: AppColors.primary}}>
              <Text style={[Typographies.h3, {color: AppColors.primary_black}]}>
                Favourites
              </Text>
            </Pressable>
            <Pressable
              style={styles.options}
              android_ripple={{color: AppColors.primary}}>
              <Text style={[Typographies.h3, {color: AppColors.primary_black}]}>
                Recent
              </Text>
            </Pressable>
          </View>
        </BottomSheetModal>
      </ScrollView>
    </BottomSheetModalProvider>
  );
};

export const HomeScreen = Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary_white,
    paddingHorizontal: 10,
    paddingVertical: 10,
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
    paddingHorizontal: 10,
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    overflow: 'hidden',
  },
  searchBarContainer: {
    backgroundColor: AppColors.primary_white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 25,
    marginHorizontal: 10,
  },
  seachBarLeft: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingStart: 20,
  },
  searchBarRight: {paddingEnd: 20},
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  options: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
