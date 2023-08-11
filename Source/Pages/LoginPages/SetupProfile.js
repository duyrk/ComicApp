import {Pressable, StyleSheet, Text, View, ToastAndroid} from 'react-native';
import React, {useCallback, useMemo, useRef, useState, useEffect} from 'react';
import {AppColors} from '../../Constants/AppColors';
import FastImage from 'react-native-fast-image';
import AppInputField from '../../Components/AppInputField';
import AppButton from '../../Components/AppButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import DatePicker from 'react-native-date-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Dialog from 'react-native-dialog';
import {Typographies} from '../../Constants/Typographies';
import AxiosIntance from '../../util/AxiosInstance';
import {routes} from '../util';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {useNavigation} from '@react-navigation/native';

const SetupProfile = ({route}) => {
  const {id} = route.params;
  const [date, setDate] = useState(new Date());
  const [name, setname] = useState('');
  const [nickname, setnickname] = useState('');
  const [email, setemail] = useState('');
  const [convertedDate, setconvertedDate] = useState(0);
  const [displayDate, setdisplayDate] = useState('');
  const [bio, setbio] = useState('');
  const [disabled, setdisabled] = useState('disabled');
  const [visible, setVisible] = useState(false);
  const [bytes, setbytes] = useState();
  const [avatar, setavatar] = useState('');
  const [uriImage, seturiImage] = useState('');
  const {navigate} = useNavigation();
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
  const handleOnDismiss = () => {
    const epochTime = new Date(date);
    setconvertedDate(epochTime / 1000);
    const d = epochTime.getDate();
    const m = epochTime.getMonth() + 1;
    const y = epochTime.getFullYear();
    setdisplayDate(`${d}/${m}/${y}`);
  };
  const Capture = async () => {
    const result = await launchCamera();
    if (!result.didCancel) {
      seturiImage(result.assets[0].uri);
      const img = await fetch(result.assets[0].uri); // preview image
      const bytes = await img.blob();
      setbytes(bytes);
      handleCancel();
    } else {
      handleCancel();
    }
  };
  const Gallery = async () => {
    const result = await launchImageLibrary();
    if (!result.didCancel) {
      seturiImage(result.assets[0].uri); // preview image
      const img = await fetch(result.assets[0].uri);
      const bytes = await img.blob();
      setbytes(bytes);
      handleCancel();
    } else {
      handleCancel();
    }
  };
  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (
      name.length == 0 ||
      nickname.length == 0 ||
      email.length == 0 ||
      convertedDate == 0 ||
      bio.length == 0 ||
      avatar
    ) {
      setdisabled('disabled');
    } else {
      setdisabled('normal');
    }
  }, [name, nickname, email, convertedDate, bio]);

  const UploadImage = async () => {
    const storage = getStorage();
    const imageRef = ref(storage, `user/${id}`);
    uploadBytes(imageRef, bytes).then(snapshot => {
      getDownloadURL(snapshot.ref).then(url => {
        SetupProfile(url);
      });
    });
  };

  const SetupProfile = async url => {
    try {
      const response = await AxiosIntance().post(`/user/${id}/edit`, {
        updates: {
          nickname: nickname,
          date_of_birth: convertedDate,
          bio: bio,
          avatar: url,
        },
      });
      navigate(routes.login);
    } catch (error) {
      console.log('Set up profile error:' + error);
    }
  };
  const SetData = async () => {
    try {
      const response = await AxiosIntance().get(`/user/${id}`);
      if (!response.error) {
        console.log('heyyy');
        setname(response.data.user_name);
        setemail(response.data.email);
        console.log('name:' + name);
        console.log('name:' + email);
      }
    } catch (error) {
      console.log('Get and set data user api error:' + error);
    }
  };
  useEffect(() => {
    SetData();
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Pressable style={styles.avatarContainer} onPress={showDialog}>
            <View style={styles.avatarDefault}>
              <FastImage
                source={{uri: uriImage}}
                style={{width: '100%', height: '100%', borderRadius: 50}}
                resizeMode={FastImage.resizeMode.cover}
              />
            </View>
            <View style={{position: 'absolute', bottom: -17, right: 0}}>
              <FastImage
                source={require('../../Images/ic_plusBackGround.png')}
                style={{width: 30, height: 30}}
                resizeMode={FastImage.resizeMode.contain}></FastImage>
              <FastImage
                source={require('../../Images/ic_plusForeGround.png')}
                style={{width: 16, height: 17, bottom: 22.5, left: 7}}
                resizeMode={FastImage.resizeMode.contain}></FastImage>
            </View>
          </Pressable>
        </View>

        <View style={[styles.inputContainer, {marginTop: 10}]}>
          <AppInputField
            type="text"
            placeHolder="Enter your name"
            placeholderColor={AppColors.primary_black}
            inputColor={AppColors.primary_black}
            onChangeText={setname}
            value={name}
            editable={false}></AppInputField>
        </View>
        <View style={[styles.inputContainer, {marginTop: 48}]}>
          <AppInputField
            type="text"
            placeHolder="Enter your display name"
            placeholderColor={AppColors.primary_black}
            inputColor={AppColors.primary_black}
            onChangeText={setnickname}></AppInputField>
        </View>
        <View style={[styles.inputContainer, {marginTop: 48}]}>
          <AppInputField
            type="text"
            placeHolder="Email"
            placeholderColor={AppColors.primary_black}
            inputColor={AppColors.primary_black}
            onChangeText={setemail}
            value={email}
            editable={false}></AppInputField>
        </View>
        <View style={[styles.inputContainer, {marginTop: 48}]}>
          <AppInputField
            type="date"
            placeHolder="Date of Birth"
            placeholderColor={AppColors.primary_black}
            inputColor={AppColors.primary_black}
            onDateClick={handlePresentModalPress}
            value={displayDate}></AppInputField>
        </View>
        <View style={[styles.inputContainer, {marginTop: 48}]}>
          <AppInputField
            type="text"
            placeHolder="Bio"
            placeholderColor={AppColors.primary_black}
            inputColor={AppColors.primary_black}
            onChangeText={setbio}></AppInputField>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            type={disabled}
            value="Finish"
            onPress={UploadImage}></AppButton>
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
          onDismiss={handleOnDismiss}>
          <View style={styles.contentContainer}>
            <Pressable
              onPress={handleDismissModalPress}
              style={{alignSelf: 'flex-end'}}>
              <Text style={{fontSize: 20, color: AppColors.primary}}>
                Submit
              </Text>
            </Pressable>
            <DatePicker
              textColor={AppColors.primary_black}
              date={date}
              onDateChange={setDate}
              mode="date"
            />
          </View>
        </BottomSheetModal>
        <Dialog.Container
          visible={visible}
          contentStyle={{backgroundColor: AppColors.primary_white}}>
          <Dialog.Title style={{color: AppColors.primary}}>
            Add Cover Photo
          </Dialog.Title>

          <Pressable
            onPress={Capture}
            android_ripple={{color: AppColors.secondary_gray}}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 15,
            }}>
            <FastImage
              source={require('../../Images/ic_camera.png')}
              style={{width: 30, height: 30}}
            />
            <Text
              style={[
                Typographies.h4,
                {color: AppColors.primary_black, marginStart: 10},
              ]}>
              Open Camera
            </Text>
          </Pressable>
          <Pressable
            onPress={Gallery}
            android_ripple={{color: AppColors.secondary_gray}}
            style={{flexDirection: 'row', alignItems: 'center', padding: 15}}>
            <FastImage
              source={require('../../Images/ic_photo.png')}
              style={{width: 30, height: 30}}
            />
            <Text
              style={[
                Typographies.h4,
                {color: AppColors.primary_black, marginStart: 10},
              ]}>
              Open Gallery
            </Text>
          </Pressable>

          <Dialog.Button
            style={{color: AppColors.primary}}
            label="Cancel"
            onPress={handleCancel}
          />
        </Dialog.Container>
      </View>
    </BottomSheetModalProvider>
  );
};

export default SetupProfile;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.primary_white,
    justifyContent: 'space-between',
  },
  avatarContainer: {
    // position:'absolute',
    marginTop: 30,
  },
  avatarDefault: {
    width: 100,
    height: 100,

    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: AppColors.primary,
    borderWidth: 3,
  },
  inputContainer: {
    paddingStart: 56,
    paddingEnd: 39,
  },
  buttonContainer: {
    paddingHorizontal: 25,
    marginTop: 48,
    paddingBottom: 25,
  },
});
