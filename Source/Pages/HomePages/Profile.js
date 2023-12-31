import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppToolbar from '../../Components/AppToolbar';
import {AppColors} from '../../Constants/AppColors';
import DropShadow from 'react-native-drop-shadow';
import FastImage from 'react-native-fast-image';
import {Typographies} from '../../Constants/Typographies';
import DetailInfoItem from './Items/DetailInfoItem';
import {useNavigation, StackActions} from '@react-navigation/native';
import {routes} from '../util';
import AxiosIntance from '../../util/AxiosInstance';
import {useSelector} from 'react-redux';
import Loading from '../../Components/Loading';
const mangaData = [
  {
    _id: '1',
    image:
      'https://official-complete-1.granpulse.us/manga/Masamune-Kun-No-Revenge/0040-001.png',
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
const Profile = () => {
  const user = useSelector(
    state => state.persistedReducer.auth.login.currentUser,
  );
  const navigation = useNavigation();
  const {navigate} = useNavigation();
  const {dispatch} = useNavigation();
  const [data, setdata] = React.useState(null);
  const [isLoading, setisLoading] = useState(true);
  const handleOption1 = () => {
    dispatch(StackActions.replace(routes.home));
  };
  const handleOption2 = () => {
    dispatch(StackActions.replace(routes.library));
  };
  const handleOption4 = () => {};
  const GetUserInfo = async () => {
    try {
      const response = await AxiosIntance().get(`/user/${user._id}`);
      if (response) {
        setdata(response.data);
        setisLoading(false);
      }
    } catch (error) {
      console.log('Get User Information API error:' + error);
    }
  };
  useEffect(() => {
    GetUserInfo();
  }, []);

  return (
    <View style={{flex: 1}}>
      {isLoading && data == null ? (
        <Loading></Loading>
      ) : (
        <ScrollView
          style={styles.container}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}>
          <AppToolbar
            type="tools"
            title="My Profile"
            onPressBack={() => {
              navigation.goBack();
            }}
            option1={handleOption1}
            option2={handleOption2}
            option4={handleOption4}></AppToolbar>

          <View style={styles.profileContainer}>
            <View style={styles.header}>
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
                      navigate(routes.editprofile);
                    }}>
                    <FastImage
                      source={{uri: data.avatar}}
                      style={{width: '100%', height: '100%'}}
                      resizeMode={FastImage.resizeMode.cover}></FastImage>
                  </Pressable>
                </DropShadow>

                <View style={{width: '100%', marginStart: 15}}>
                  <Text
                    style={[Typographies.h3, {color: AppColors.primary_black}]}>
                    {data.nickname}
                  </Text>
                  <Text
                    style={[
                      {marginTop: 4, color: AppColors.secondary_gray},
                      Typographies.h5,
                    ]}>
                    {data.user_name}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.aboutYouContainer}>
              <Text style={[Typographies.h5, {color: AppColors.primary_black}]}>
                {data.bio}
              </Text>
            </View>
          </View>

          {/* Reviews Section */}
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingEnd: 15,
            }}></View>

          {/* Reviews Section */}
          {/* Reviews Section */}
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingEnd: 15,
            }}>
            <Text style={[Typographies.h4, {color: AppColors.primary_black}]}>
              Your favourites
            </Text>
          </View>
          <View
            style={{
              marginTop: 5,
            }}>
            {data.favourite.map(item => (
              <DetailInfoItem data={item} key={item._id}></DetailInfoItem>
            ))}
            {/* <DefaultItem></DefaultItem> */}
          </View>
          {/* Reviews Section */}
        </ScrollView>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary_white,
    paddingStart: 23,
    paddingEnd: 22,
    // paddingTop: 14,
  },
  profileContainer: {
    borderBottomWidth: 1,
    borderBottomColor: AppColors.secondary_gray,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
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
    marginStart: 4,
  },
  aboutYouContainer: {
    marginTop: 30,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 50,
    paddingEnd: 60,
    marginTop: 20,
  },
});
