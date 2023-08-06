import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import AppToolbar from '../../Components/AppToolbar';
import {AppColors} from '../../Constants/AppColors';
import DropShadow from 'react-native-drop-shadow';
import FastImage from 'react-native-fast-image';
import {Typographies} from '../../Constants/Typographies';
import DefaultItem from './Items/DefaultItem';
import DetailInfoItem from './Items/DetailInfoItem';
import AppButton from '../../Components/AppButton';
import FavoriteButton from '../../Components/FavoriteButton';
import Tab from '../AnimatedSlidingTab';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopBar} from '../../Components/TopBar';
import ChapterItem from './Items/ChapterItem';
import CharacterItem from './Items/CharacterItem';

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
const TopNavigator = () => {
  const TopTab = createMaterialTopTabNavigator();
  return (
    <TopTab.Navigator
      initialRouteName="Manga"
      tabBar={props => <TopBar {...props} />}>
      <TopTab.Screen name="Manga" component={MangaDetail} />
      <TopTab.Screen name="Character" component={Character} />
    </TopTab.Navigator>
  );
};
const MangaDetail = () => {
  return (
    <View style={{flex: 1}}>
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
                source={require('../../Images/ic_user.png')}
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
              Tomohito Oda
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
              On Going
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 17}}>
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
            <Text
              style={[
                Typographies.h4,
                {
                  marginStart: 10,
                  color: AppColors.primary,
                  fontWeight: '800',
                },
              ]}>
              Tomohito Oda
            </Text>
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
              34.642.436
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
            Nisekoi kể về chuyện tình tay ba xoay quanh Ichijō Raku, Kirisaki
            Chitoge và Onodera Kosaki. Raku là con trai của ông trùm băng đảng
            yakuza tên Shuei-gumi và cậu đang thầm thích bạn học cùng lớp
            Kosaki. Cho đến khi có một cuộc hẹn hò giả tạo với cô gái Chitoge
            điều gì sẽ xảy ra tiếp theo...?
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
      <ScrollView
        style={{
          height: height * 0.5,
          backgroundColor: AppColors.primary_white,
        }}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        {chapterdata.map(item => (
          <ChapterItem key={item._id}></ChapterItem>
        ))}
      </ScrollView>
    </View>
  );
};
const Character = () => {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: AppColors.primary_white}}
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}>
      <View>
        {characterData.map(item => (
          <CharacterItem data={item} key={item._id}></CharacterItem>
        ))}
      </View>
    </ScrollView>
  );
};
const Manga = () => {
  const {width} = Dimensions.get('window').width;
  const [isActive, setisActive] = useState(false);
  const addToFavor = () => {
    //request to api
    // and set isActive to true
    //useEffect to affect the site at first place
  };
  const handleFavorite = () => {
    if (isActive == true) {
      //request api delete this manga from collection with this user, (use id)
    } else {
      //when it's not active which means it need to be added to the favorite collection
      //pass user id and mangaid
      addToFavor();
    }
  };
  return (
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
        <AppToolbar type="tools" title="Manga"></AppToolbar>
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
              uri: 'https://genk.mediacdn.vn/thumb_w/600/DlBlzccccccccccccE5CT3hqq3xN9o/Image/2013/12/ava-15c70.jpg',
            }}
            style={{width: width, height: 200, borderRadius: 15}}></FastImage>
        </DropShadow>

        <View style={styles.infoContainer}>
          <Text
            style={[
              Typographies.h2,
              {width: '80%', color: AppColors.primary_black},
            ]}>
            Nise Koi
          </Text>
          <Pressable style={{width: 40, height: 40}}>
            <FavoriteButton isActive={isActive}></FavoriteButton>
          </Pressable>
        </View>
      </View>

      <View style={{height: height, marginTop: 20}}>
        <TopNavigator></TopNavigator>
      </View>
    </ScrollView>
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
