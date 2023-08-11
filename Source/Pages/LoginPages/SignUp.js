import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Typographies} from '../../Constants/Typographies';
import {AppColors} from '../../Constants/AppColors';
import FastImage from 'react-native-fast-image';
import DropShadow from 'react-native-drop-shadow';
import LinearGradient from 'react-native-linear-gradient';
import AppButton from '../../Components/AppButton';
import AppInputField from '../../Components/AppInputField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {routes} from '../util';
import AxiosIntance from '../../util/AxiosInstance';
import {useNavigation} from '@react-navigation/native';
const SignUp = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [confirm, setconfirm] = useState('');
  const [email, setemail] = useState('');
  const [isDisabled, setisDisabled] = useState(true);
  const {navigate} = useNavigation();
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const register = async () => {
    try {
      const response = await AxiosIntance().post('/user/register', {
        user_name: username,
        password: password,
        email: email,
      });
      ToastAndroid.show('Đăng ký thành công!', ToastAndroid.SHORT);
      navigate(routes.setupprofile, {id: response.data._id});
    } catch (error) {
      console.log('Call register api error:' + error);
      ToastAndroid.show('Tài khoản đã tồn tại!', ToastAndroid.SHORT);
    }
  };

  useEffect(() => {
    if (
      username.length == 0 ||
      password.length == 0 ||
      confirm.length == 0 ||
      email.length == 0
    ) {
      setisDisabled(true);
    } else {
      if (password != confirm) {
        setisDisabled(true);
      } else if (!email.match(validRegex)) {
        setisDisabled(true);
      } else {
        setisDisabled(false);
      }
    }
  }, [username, confirm, password, email]);
  return (
    <View style={[styles.container]}>
      <View style={styles.socialContainer}>
        <View style={styles.welcomeContainter}>
          <Text style={[Typographies.h1, {color: AppColors.primary_black}]}>
            Welcome
          </Text>
          <Text
            style={[
              Typographies.h5,
              {color: AppColors.secondary_gray, marginTop: 5},
            ]}>
            Sign in to start
          </Text>
        </View>
        <View style={{paddingHorizontal: 45, marginTop: 10}}>
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
            <Pressable style={styles.socialLoginButton}>
              <FastImage
                source={require('../../Images/ic_google.png')}
                style={{width: 28, height: 29}}
                resizeMode={FastImage.resizeMode.contain}></FastImage>
              <Text style={[styles.buttonText, Typographies.h4]}>
                Continue with Google
              </Text>
            </Pressable>
          </DropShadow>
        </View>
        <View style={{paddingHorizontal: 45, marginTop: 20}}>
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
              style={[styles.socialLoginButton, {backgroundColor: '#2079FF'}]}>
              <FastImage
                source={require('../../Images/ic_meta.png')}
                style={{width: 28, height: 29}}
                resizeMode={FastImage.resizeMode.contain}></FastImage>
              <Text
                style={[
                  styles.buttonText,
                  Typographies.h4,
                  {color: AppColors.primary_white},
                ]}>
                Continue with Meta
              </Text>
            </Pressable>
          </DropShadow>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={[Typographies.h5, {color: AppColors.primary_black}]}>
            Have an account?
          </Text>
          <Pressable>
            <Text style={[Typographies.h5, {color: '#2079FF', marginStart: 5}]}>
              Sign In!
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.defautLogin]}>
        <LinearGradient
          start={{x: 0, y: -1}}
          end={{x: 0, y: 3.5}}
          colors={['#abbaff', '#FFF1BE']}
          style={{flex: 1, justifyContent: 'space-between'}}>
          <View>
            <View style={{paddingHorizontal: 45, marginTop: 40}}>
              <AppInputField
                type="text"
                inputColor={AppColors.primary_white}
                placeHolder="Username"
                onChangeText={setusername}></AppInputField>
            </View>
            <View style={{paddingHorizontal: 45, marginTop: 40}}>
              <AppInputField
                type="text"
                inputColor={AppColors.primary_white}
                placeHolder="Email Address"
                onChangeText={setemail}></AppInputField>
            </View>
            <View style={{paddingHorizontal: 45, marginTop: 30}}>
              <AppInputField
                type="password"
                inputColor={AppColors.primary_white}
                placeHolder="Password"
                onChangeText={setpassword}></AppInputField>
            </View>
            <View style={{paddingHorizontal: 45, marginTop: 30}}>
              <AppInputField
                type="password"
                inputColor={AppColors.primary_white}
                placeHolder="Confirm Password"
                onChangeText={setconfirm}></AppInputField>
            </View>
          </View>
          <View style={{paddingHorizontal: 25, paddingBottom: 30}}>
            <AppButton
              type={isDisabled ? 'disabled' : 'active'}
              value="Continue"
              onPress={register}></AppButton>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary_white,
    flex: 1,
  },
  socialContainer: {
    flex: 2.3,
  },
  welcomeContainter: {
    marginTop: 10,
    alignItems: 'center',
  },
  socialLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 25,
    paddingHorizontal: 25,
    backgroundColor: AppColors.primary_white,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    color: AppColors.primary_black,
  },
  defautLogin: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    overflow: 'hidden',
    flex: 4,
  },
});
