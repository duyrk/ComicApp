import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  RefreshControl,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState, useMemo, useCallback} from 'react';
import {AppColors} from '../../Constants/AppColors';
import FastImage from 'react-native-fast-image';
import {Typographies} from '../../Constants/Typographies';
import DropShadow from 'react-native-drop-shadow';
import Slider from '../../Components/Slider';
import DefaultItem from './Items/DefaultItem';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {routes} from '../util';
import {StackActions, useNavigation} from '@react-navigation/native';
import RecentItem from './Items/RecentItem';
import SearchItem from './Items/SearchItem';
import AxiosIntance from '../../util/AxiosInstance';
import {useSelector} from 'react-redux';

const Home = () => {
  const user = useSelector(
    state => state.persistedReducer.auth.login.currentUser,
  );
  const [refreshing, setRefreshing] = React.useState(false);
  const [search, setSearch] = useState('');
  const [handleScroll, sethandleScroll] = useState(true);
  const [mangaData, setmangaData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const {navigate, dispatch} = useNavigation();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    GetManga();
  }, []);
  let timeOut = null;
  // ref
  const bottomSheetModalRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ['25%', '30%'], []);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const countDownSearch = searchText => {
    if (timeOut) {
      console.log('cleared');
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      SearchManga(searchText);
    }, 2000);
  };
  useEffect(() => {
    if (search.length > 0) {
      sethandleScroll(false);
    } else {
      sethandleScroll(true);
    }
  }, [search]);

  const GetManga = async () => {
    try {
      const response = await AxiosIntance().get('/manga/get');
      if (response) {
        setmangaData(response.data);
        setRefreshing(false);
      }
    } catch (error) {
      console.log('Get all manga api error' + error);
    }
  };
  useEffect(() => {
    GetManga();
  }, []);

  const SearchManga = async keyword => {
    try {
      const response = await AxiosIntance().get(
        `/manga/title?keyword=${keyword}`,
      );
      if (response) {
        setSearchData(response.data);
      }
    } catch (error) {
      console.log('Search Manga Api error' + error);
    }
  };

  return (
    <BottomSheetModalProvider>
      <ScrollView
        scrollEnabled={handleScroll}
        style={styles.container}
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
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
              }}>
              <Pressable
                style={styles.avatarContainer}
                onPress={() => {
                  navigate(routes.user);
                }}>
                <FastImage
                  source={{uri: user.avatar}}
                  style={{width: '100%', height: '100%'}}
                  resizeMode={FastImage.resizeMode.cover}></FastImage>
              </Pressable>
            </DropShadow>

            <View style={{width: '60%', marginStart: 15}}>
              <Text style={[Typographies.h4, {color: AppColors.primary_black}]}>
                {user.nickname}
              </Text>
              <Text style={{marginTop: 4, color: AppColors.secondary_gray}}>
                {user.bio}
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
                  placeholderTextColor={AppColors.secondary_gray}
                  onChangeText={text => {
                    setSearch(text);
                    countDownSearch(text);
                  }}
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
                {searchData.map(item => (
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
            paddingHorizontal: 10,
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
            paddingHorizontal: 10,
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
            paddingHorizontal: 10,
          }}>
          <Text style={[Typographies.h4, {color: AppColors.primary_black}]}>
            New Manga
          </Text>
          <Pressable>
            <Pressable
              onPress={() => {
                navigate(routes.library);
              }}>
              <Text
                style={([Typographies.h6], {color: AppColors.secondary_gray})}>
                See All
              </Text>
            </Pressable>
          </Pressable>
        </View>
        <FlatList
          style={{marginTop: 10, paddingBottom: 30}}
          data={mangaData}
          keyExtractor={item => item._id}
          renderItem={({item, index}) => (
            <DefaultItem data={item} key={item._id} index={index}></DefaultItem>
          )}
          scrollEnabled={false}
          numColumns={2}
        />
      </ScrollView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        backdropComponent={backdropProps => (
          <BottomSheetBackdrop {...backdropProps} />
        )}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enableDismissOnClose>
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
            onPress={() => {
              navigate(routes.user);
            }}
            style={styles.options}
            android_ripple={{color: AppColors.primary}}>
            <Text style={[Typographies.h3, {color: AppColors.primary_black}]}>
              Favourites
            </Text>
          </Pressable>
          <Pressable
            style={styles.options}
            android_ripple={{color: AppColors.primary}}
            onPress={() => {
              dispatch(StackActions.replace(routes.login));
            }}>
            <Text style={[Typographies.h3, {color: AppColors.primary_black}]}>
              Logout
            </Text>
          </Pressable>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export const HomeScreen = Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary_white,
    // paddingHorizontal: 10,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 14,
    paddingHorizontal: 10,
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
