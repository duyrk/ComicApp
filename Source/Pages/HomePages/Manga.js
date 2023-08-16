import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppToolbar from '../../Components/AppToolbar';
import {AppColors} from '../../Constants/AppColors';
import DropShadow from 'react-native-drop-shadow';
import FastImage from 'react-native-fast-image';
import {Typographies} from '../../Constants/Typographies';
import FavoriteButton from '../../Components/FavoriteButton';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopBar} from '../../Components/TopBar';
import ChapterItem from './Items/ChapterItem';
import CharacterItem from './Items/CharacterItem';
import AxiosIntance from '../../util/AxiosInstance';
import Loading from '../../Components/Loading';
import {useDispatch} from 'react-redux';
import {setCurrentManga} from '../../Redux/slices/mangaSlice';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../util';

const data = [
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
  {
    _id: '7',
    title: '',
    thumbnail: '',
    date: '',
  },
  {
    _id: '8',
    title: '',
    thumbnail: '',
    date: '',
  },
  {
    _id: '9',
    title: '',
    thumbnail: '',
    date: '',
  },
];
const characterData = [
  {
    _id: '1',
    name: 'Chitoge Kirisaki',
    type: 'Main Characters',
    image:
      'https://somoskudasai.com/wp-content/uploads/2021/06/portada_nisekoi-2.jpg',
    description:
      'She is the daughter of Adelt Wogner Kirisaki and Hana Kirisaki who served as the fake girlfriend of Raku Ichijō for the next three years of her school life to prevent a war from starting between their families.',
  },
  {
    _id: '2',
    name: 'Raku Ichijō',
    type: 'Main Characters',
    image:
      'https://i.pinimg.com/originals/1e/59/60/1e596023f320e36af6466a7c1214c3e8.jpg',
    description:
      'Raku is a little taller than average for a high schooler and has messy, black hair. He has lightly tanned, fair skin, dark blue eyes and also has a big scar on the right side of his forehead.',
  },
  {
    _id: '3',
    name: 'Raku Ichijō',
    type: 'Main Characters',
    image:
      'https://i.pinimg.com/originals/1e/59/60/1e596023f320e36af6466a7c1214c3e8.jpg',
    description:
      'Raku is a little taller than average for a high schooler and has messy, black hair. He has lightly tanned, fair skin, dark blue eyes and also has a big scar on the right side of his forehead.',
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
const {width, height} = Dimensions.get('screen');
const TopNavigator = props => {
  const {data} = props;
  const TopTab = createMaterialTopTabNavigator();
  return (
    <TopTab.Navigator
      initialRouteName="Manga"
      tabBar={props => <TopBar {...props} />}>
      <TopTab.Screen name="Manga">
        {props => <MangaDetail {...props} data={data} />}
      </TopTab.Screen>
      <TopTab.Screen name="Character">
        {props => <Character {...props} data={data.character} />}
      </TopTab.Screen>
    </TopTab.Navigator>
  );
};
const MangaDetail = props => {
  const {data} = props;
  const {navigate} = useNavigation();
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: AppColors.primary_white}}
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingHorizontal: 22,
          backgroundColor: AppColors.primary_white,
          paddingTop: 10,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: AppColors.secondary_gray,
            width: '100%',
            alignItems: 'center',
            padding: 10,
            borderRadius: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <FastImage
                source={{uri: data.avatar}}
                style={{width: 20, height: 20}}
                resizeMode={FastImage.resizeMode.contain}
                tintColor={AppColors.secondary_gray}></FastImage>
              <Text
                style={[
                  Typographies.h4,
                  {marginStart: 10, color: AppColors.secondary_gray},
                ]}>
                Author:
              </Text>
            </View>
            <Text
              style={[
                Typographies.h4,
                {
                  marginStart: 10,
                  color: AppColors.primary,
                  fontWeight: '800',
                },
              ]}>
              {data.author}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 17}}>
            <View style={{flexDirection: 'row'}}>
              <FastImage
                source={require('../../Images/ic_status.png')}
                style={{width: 20, height: 20}}
                resizeMode={FastImage.resizeMode.contain}
                tintColor={AppColors.secondary_gray}></FastImage>
              <Text
                style={[
                  Typographies.h4,
                  {marginStart: 10, color: AppColors.secondary_gray},
                ]}>
                Status:
              </Text>
            </View>
            <Text
              style={[
                Typographies.h4,
                {
                  marginStart: 10,
                  color: AppColors.primary,
                  fontWeight: '800',
                },
              ]}>
              {data.status}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 17,
              alignSelf: 'flex-start',
            }}>
            <View style={{flexDirection: 'row'}}>
              <FastImage
                source={require('../../Images/ic_category.png')}
                style={{width: 20, height: 20}}
                resizeMode={FastImage.resizeMode.contain}
                tintColor={AppColors.secondary_gray}></FastImage>
              <Text
                style={[
                  Typographies.h4,
                  {marginStart: 10, color: AppColors.secondary_gray},
                ]}>
                Genres:
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '70%',
              }}>
              {data.genre.map(item => (
                <Text
                  key={item._id}
                  style={[
                    Typographies.h4,
                    {
                      marginStart: 10,
                      color: AppColors.primary,
                      fontWeight: '800',
                    },
                  ]}>
                  {item.name}
                </Text>
              ))}
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 17}}>
            <View style={{flexDirection: 'row'}}>
              <FastImage
                source={require('../../Images/ic_eye2.png')}
                style={{width: 20, height: 20}}
                resizeMode={FastImage.resizeMode.contain}
                tintColor={AppColors.secondary_gray}></FastImage>
              <Text
                style={[
                  Typographies.h4,
                  {marginStart: 10, color: AppColors.secondary_gray},
                ]}>
                Views:
              </Text>
            </View>
            <Text
              style={[
                Typographies.h4,
                {
                  marginStart: 10,
                  color: AppColors.primary,
                  fontWeight: '800',
                },
              ]}>
              {data.views}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
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
              padding: 10,
              borderBottomStartRadius: 10,
              borderTopStartRadius: 10,
            }}
            onPress={() => {
              navigate(routes.read, {
                id: data.chapter[0]._id,
              });
            }}>
            <Text style={[Typographies.h4, {color: AppColors.primary}]}>
              Read First
            </Text>
          </Pressable>
          <Pressable
            android_ripple={{color: AppColors.primary}}
            style={{
              flex: 1,
              alignItems: 'center',
              borderWidth: 1,
              borderColor: AppColors.primary,
              padding: 10,
              borderBottomEndRadius: 10,
              borderTopEndRadius: 10,
            }}
            onPress={() => {
              navigate(routes.read, {
                id: data.chapter[data.chapter.length - 1]._id,
              });
            }}>
            <Text style={[Typographies.h4, {color: AppColors.primary}]}>
              Read Last
            </Text>
          </Pressable>
        </View>
        <View style={{marginTop: 20}}>
          <Text
            style={[
              Typographies.h3,
              {color: AppColors.primary_black, fontWeight: '700'},
            ]}>
            Description
          </Text>
          <Text style={{lineHeight: 20, color: AppColors.secondary_gray}}>
            {data.description}
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text
            style={[
              Typographies.h3,
              {color: AppColors.primary_black, fontWeight: '700'},
            ]}>
            Chapters
          </Text>
        </View>
      </View>
      <View style={{height: 500}}>
        <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
          {data.chapter.map(item => (
            <ChapterItem key={item._id} data={item}></ChapterItem>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};
const Character = props => {
  const {data} = props;
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: AppColors.primary_white}}
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}>
      <View style={{marginTop: 10}}>
        {data.map(item => (
          <CharacterItem data={item} key={item._id}></CharacterItem>
        ))}
      </View>
    </ScrollView>
  );
};
const Manga = props => {
  const {width} = Dimensions.get('window').width;
  const [isActive, setisActive] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const {route} = props;
  const {id} = route.params;
  const [data, setdata] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const GetMangaById = async () => {
    try {
      console.log('hey');
      const response = await AxiosIntance().get(`/manga/get/${id}`);
      if (response) {
        setdata(response.data);
        dispatch(setCurrentManga(response.data));
        setisLoading(false);
      }
    } catch (error) {
      console.log('Get manga by id error!' + error);
    }
  };
  useEffect(() => {
    console.log('hey1');
    setisLoading(true);
    GetMangaById();
  }, []);

  return (
    <View style={{flex: 1}}>
      {isLoading && data == null ? (
        <Loading></Loading>
      ) : (
        <ScrollView
          style={styles.container}
          stickyHeaderIndices={[0]}
          nestedScrollEnabled>
          <View
            style={{
              paddingStart: 23,
              paddingEnd: 22,
              backgroundColor: AppColors.primary_white,
            }}>
            <AppToolbar
              type="tools"
              title="Manga"
              onPressBack={() => {
                navigation.goBack();
              }}></AppToolbar>
          </View>

          <View style={styles.mangaInfo}>
            <DropShadow
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              <FastImage
                source={{
                  uri: data.banner,
                }}
                style={{
                  width: width,
                  height: 200,
                  borderRadius: 15,
                }}></FastImage>
            </DropShadow>

            <View style={styles.infoContainer}>
              <Text
                style={[
                  Typographies.h2,
                  {width: '80%', color: AppColors.primary_black},
                ]}>
                {data.name}
              </Text>
              <Pressable style={{width: 40, height: 40}}>
                <FavoriteButton isActive={isActive}></FavoriteButton>
              </Pressable>
            </View>
          </View>

          <View style={{height: height, marginTop: 20}}>
            <TopNavigator data={data}></TopNavigator>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Manga;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary_white,
    // paddingTop: 14,
  },
  mangaInfo: {
    marginTop: 22,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: 33,
    paddingEnd: 22,
    marginTop: 15,
  },
});
