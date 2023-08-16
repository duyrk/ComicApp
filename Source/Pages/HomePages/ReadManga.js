import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Pressable,
} from 'react-native';
import React, {useRef, useState, useCallback, useMemo, useEffect} from 'react';
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
import {useSelector} from 'react-redux';
import Loading from '../../Components/Loading';
import AxiosIntance from '../../util/AxiosInstance';
// const data = [
//   {
//     _id: '1',
//     image:
//       'https://cdn.mangaclash.com/manga_5fba289406211/d40c957b6a003159c2d012c38f7df20c/1.jpg',
//   },
//   {
//     _id: '2',
//     image:
//       'https://cdn.mangaclash.com/manga_5fba289406211/d40c957b6a003159c2d012c38f7df20c/2.jpg',
//   },
//   {
//     _id: '3',
//     image:
//       'https://cdn.mangaclash.com/manga_5fba289406211/d40c957b6a003159c2d012c38f7df20c/3.jpg',
//   },
//   {
//     _id: '4',
//     image:
//       'https://cdn.mangaclash.com/manga_5fba289406211/d40c957b6a003159c2d012c38f7df20c/4.jpg',
//   },
//   {
//     _id: '5',
//     image:
//       'https://pm1.narvii.com/6561/519a49b320d2c56886bb166787ab144ce7611e99_hq.jpg',
//   },
// ];
// const chapterdata = [
//   {
//     _id: '1',
//     title: '',
//     thumbnail: '',
//     date: '',
//   },
//   {
//     _id: '2',
//     title: '',
//     thumbnail: '',
//     date: '',
//   },
//   {
//     _id: '3',
//     title: '',
//     thumbnail: '',
//     date: '',
//   },
//   {
//     _id: '4',
//     title: '',
//     thumbnail: '',
//     date: '',
//   },
//   {
//     _id: '5',
//     title: '',
//     thumbnail: '',
//     date: '',
//   },
//   {
//     _id: '6',
//     title: '',
//     thumbnail: '',
//     date: '',
//   },
// ];
const ReadManga = props => {
  const {route, navigation} = props;
  const {id} = route.params;
  const {windowwidth} = Dimensions.get('window').width;
  const [data, setdata] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [disablePreviousBtn, setdisablePreviousBtn] = useState(false);
  const [disableNextBtn, setdisableNextBtn] = useState(false);
  const {dispatch, navigate} = useNavigation();
  const manga = useSelector(
    state => state.persistedReducer.manga.manga.current,
  );
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
  const GetChapterById = async () => {
    try {
      const response = await AxiosIntance().get(
        `/manga/getChapter?mangaId=${manga._id}&chapterId=${id}`,
      );
      if (response) {
        setdata(response.data);
        setisLoading(false);
      }
    } catch (error) {
      console.log('Get manga by id error!' + error);
    }
  };
  useEffect(() => {
    setisLoading(true);
    GetChapterById();
  }, []);
  //handle disable btn
  useEffect(() => {
    if (data != null) {
      if (data.previousChapterId.length == 0) {
        setdisablePreviousBtn(true);
      }
      if (data.nextChapterId.length == 0) {
        setdisableNextBtn(true);
      }
    }
  }, [data]);

  return (
    <BottomSheetModalProvider>
      <View style={{flex: 1}}>
        {isLoading && data == null ? (
          <Loading />
        ) : (
          <View
            style={[styles.container]}
            stickyHeaderIndices={[0]}
            nestedScrollEnabled={true}
            removeClippedSubviews>
            <View
              style={{
                paddingStart: 23,
                paddingEnd: 22,
                backgroundColor: AppColors.primary_white,
              }}>
              <AppToolbar
                type="tools"
                title={data.chapter.title}
                option1={handleOption1}
                option2={handleOption2}
                option3={handlePresentModalPress}
                onPressBack={() => {
                  navigate(routes.manga, {id: manga._id});
                }}></AppToolbar>
            </View>
            <FlatList
              data={data.chapter.page}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <FastImage
                  source={{uri: item.url}}
                  style={{
                    width: windowwidth,
                    height: undefined,
                    aspectRatio: 0.681020733652312,
                  }}
                  resizeMode={FastImage.resizeMode.contain}></FastImage>
              )}
            />
            <View
              style={{
                flexDirection: 'row',
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
                }}
                disabled={disablePreviousBtn}
                onPress={() => {
                  navigation.push(routes.read, {id: data.previousChapterId});
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
                }}
                disabled={disableNextBtn}
                onPress={() => {
                  console.log('smh');
                  navigation.push(routes.read, {id: data.nextChapterId});
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
                  data={manga.chapter}
                  keyExtractor={item => item._id}
                  renderItem={({item}) => (
                    <ChapterItem data={item}></ChapterItem>
                  )}></FlatList>
              </View>
            </BottomSheetModal>
          </View>
        )}
      </View>
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
