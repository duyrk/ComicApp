import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColors} from '../../Constants/AppColors';
import DropShadow from 'react-native-drop-shadow';
import {Typographies} from '../../Constants/Typographies';
import FastImage from 'react-native-fast-image';
import LibraryItem from './Items/LibraryItem';
import useForceUpdate from 'use-force-update';
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
    <ScrollView style={styles.container}>
      {/* Header Start */}

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
            <Pressable style={styles.avatarContainer}>
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
        <Pressable>
          <FastImage
            source={require('../../Images/ic_option.png')}
            style={{width: 47, height: 47}}
            resizeMode={FastImage.resizeMode.contain}></FastImage>
        </Pressable>
      </View>
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
        )}></FlatList>

      <View>
        {data1.map(item => (
          <LibraryItem data={item} key={item._id}></LibraryItem>
        ))}
      </View>
    </ScrollView>
  );
};

export default Libraryv1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary_white,
    paddingStart: 33,
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
});
