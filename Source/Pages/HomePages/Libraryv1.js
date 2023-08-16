import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  TextInput,
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
import AxiosIntance from '../../util/AxiosInstance';
import SearchItem from './Items/SearchItem';

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
  const [data, setdata] = useState([]);
  const forceUpdate = useForceUpdate();
  const [genre, setgenre] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  const [isSheeted, setisSheeted] = useState(false);
  const [mangaData, setmangaData] = useState([]);
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

  const GetAllGenres = async () => {
    try {
      const response = await AxiosIntance().get(`/manga/genre/getAll`);
      if (response) {
        let convertedGenreArray = [
          {
            id: '1',
            name: 'All',
            filled: true,
          },
        ];
        response.data.forEach(genre => {
          convertedGenreArray.push({
            id: genre._id,
            name: genre.name,
            filled: false,
          });
        });
        setdata(convertedGenreArray);
      }
    } catch (error) {
      console.log('Get All Genre Api error:' + error);
    }
  };
  const GetMangaByGenre = async genre => {
    try {
      const response = await AxiosIntance().get(`/manga/genre?name=${genre}`);
      if (response) {
        setmangaData(response.data);
      }
    } catch (error) {
      console.log('Get Manga By Genre Api error:' + error);
    }
  };
  let timeOut = null;
  const countDownSearch = searchText => {
    if (timeOut) {
      console.log('cleared');
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      SearchManga(searchText);
    }, 2000);
  };
  const SearchManga = async keyword => {
    try {
      const response = await AxiosIntance().get(
        `/manga/title?keyword=${keyword}`,
      );
      if (response) {
        setmangaData(response.data);
      }
    } catch (error) {
      console.log('Search Manga Api error' + error);
    }
  };
  useEffect(() => {
    console.log(genre);
    GetMangaByGenre(genre == 'All' ? '' : genre);
  }, [genre]);
  useEffect(() => {
    GetAllGenres();
  }, []);

  const handleFilled = number => {
    data.forEach(element => {
      if (element.id == number) {
        element.filled = true;
        setgenre(element.name);
      } else {
        element.filled = false;
      }
    });

    setdata(data);
    forceUpdate();
  };
  useEffect(() => {
    if (search.length > 0) {
      sethandleScroll(false);
    } else {
      sethandleScroll(true);
    }
  }, [search]);
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        {/* Search Bar Start */}

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
                  GetMangaByGenre(genre == 'All' ? '' : genre);
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
        <FlatList
          style={{paddingStart: 10}}
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
                paddingBottom: 10,
                paddingTop: 10,
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

        <FlatList
          style={{marginTop: 5}}
          data={mangaData}
          keyExtractor={item => item._id}
          renderItem={({item}) => <LibraryItem data={item}></LibraryItem>}
        />
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
      </View>
    </BottomSheetModalProvider>
  );
};

export default Libraryv1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary_white,
    paddingHorizontal: 10,
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
  searchBarContainer: {
    backgroundColor: AppColors.primary_white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 25,
    marginHorizontal: 10,
    marginTop: 10,
  },
  seachBarLeft: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingStart: 20,
  },
  searchBarRight: {paddingEnd: 20},
});
