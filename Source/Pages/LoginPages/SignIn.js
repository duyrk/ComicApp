import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Typographies} from '../../Constants/Typographies';
import {AppColors} from '../../Constants/AppColors';
import FastImage from 'react-native-fast-image';
import DropShadow from 'react-native-drop-shadow';
import LinearGradient from 'react-native-linear-gradient';
import AppButton from '../../Components/AppButton';
import AppInputField from '../../Components/AppInputField';
import AxiosIntance from '../../util/AxiosInstance';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../util';
import Loading from '../../Components/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {login} from '../../Redux/slices/authSlice';

const SignIn = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const validate = () => {
    if (username.length == 0 || password.length == 0) {
      if (username.length == 0 && password.length == 0) {
        ToastAndroid.show(
          'Username and password cannot be empty',
          ToastAndroid.SHORT,
        );
      } else if (username.length == 0) {
        ToastAndroid.show('Username cannot be empty', ToastAndroid.SHORT);
      } else if (password.length == 0) {
        ToastAndroid.show('Password cannot be empty', ToastAndroid.SHORT);
      }
    } else {
      setisLoading(true);
      Login();
    }
  };
  const Login = async () => {
    try {
      const response = await AxiosIntance().post('/user/login', {
        user_name: username,
        password: password,
      });
      setisLoading(false);
      console.log('token' + response.access_token);
      ToastAndroid.show('Đăng nhập thành công!', ToastAndroid.SHORT);
      await AsyncStorage.setItem('token', response.access_token);
      await AsyncStorage.setItem('refresh_token', response.refresh_token);
      dispatch(login(response.data));
      navigate(routes.home);
    } catch (error) {
      console.log('Call login api error:' + error);
      setisLoading(false);
      ToastAndroid.show('Tài khoản không tồn tại!', ToastAndroid.SHORT);
    }
  };
  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <Loading></Loading>
      ) : (
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
            <View style={{paddingHorizontal: 45, marginTop: 30}}>
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
                  style={[
                    styles.socialLoginButton,
                    {backgroundColor: '#2079FF'},
                  ]}>
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
                Don't have an account?
              </Text>
              <Pressable
                onPress={() => {
                  navigate(routes.register);
                }}>
                <Text
                  style={[Typographies.h5, {color: '#2079FF', marginStart: 5}]}>
                  Sign Up!
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
                    type="password"
                    inputColor={AppColors.primary_white}
                    placeHolder="Password"
                    onChangeText={setpassword}></AppInputField>
                  <Pressable style={{alignSelf: 'flex-end', marginTop: 10}}>
                    <Text
                      style={[
                        Typographies.h6,
                        {color: AppColors.primary_white},
                      ]}>
                      Forgot password?
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View style={{paddingHorizontal: 25, paddingBottom: 80}}>
                <AppButton
                  type="normal"
                  value="Login"
                  onPress={validate}></AppButton>
              </View>
            </LinearGradient>
          </View>
        </View>
      )}
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary_white,
    flex: 1,
  },
  socialContainer: {
    flex: 2.8,
  },
  welcomeContainter: {
    marginTop: 56,
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
    flex: 3,
  },
});
