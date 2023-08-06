import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from './util';
import SignIn from './LoginPages/SignIn';
import SignUp from './LoginPages/SignUp';
import {HomeScreen} from './HomePages/Home';
import SetupProfile from './LoginPages/SetupProfile';
import ChooseGenre from './LoginPages/ChooseGenre';
import Libraryv1 from './HomePages/Libraryv1';
import Manga from './HomePages/Manga';
import ReadManga from './HomePages/ReadManga';
import DetailReader from './HomePages/DetailReader';
import Profile from './HomePages/Profile';
import {NavigationContainer} from '@react-navigation/native';
import Test from './Test';
import Loading from '../Components/Loading';
import {RefreshControl} from 'react-native-gesture-handler';
import EditProfile from './HomePages/EditProfile';
import TestTopTab from './TestTopTab';
const UserStack = createStackNavigator();
const UserNavigation = () => {
  return (
    <NavigationContainer>
      <UserStack.Navigator
        initialRouteName={routes.user}
        detachInactiveScreens={true}
        screenOptions={{
          headerShown: false,
        }}>
        <UserStack.Screen
          name={routes.login}
          component={SignIn}></UserStack.Screen>
        <UserStack.Screen
          name={routes.register}
          component={SignUp}></UserStack.Screen>
        <UserStack.Screen
          name={routes.setupprofile}
          component={SetupProfile}></UserStack.Screen>
        <UserStack.Screen
          name={routes.choosegenre}
          component={ChooseGenre}></UserStack.Screen>
        <UserStack.Screen
          name={routes.home}
          component={HomeScreen}></UserStack.Screen>
        <UserStack.Screen
          name={routes.library}
          component={Libraryv1}></UserStack.Screen>
        <UserStack.Screen
          name={routes.manga}
          component={Manga}></UserStack.Screen>
        <UserStack.Screen
          name={routes.read}
          component={ReadManga}></UserStack.Screen>
        <UserStack.Screen
          name={routes.reader}
          component={DetailReader}></UserStack.Screen>
        <UserStack.Screen
          name={routes.user}
          component={Profile}></UserStack.Screen>
        <UserStack.Screen
          name={routes.editprofile}
          component={EditProfile}></UserStack.Screen>
        <UserStack.Screen name={'test'} component={Test}></UserStack.Screen>
      </UserStack.Navigator>
    </NavigationContainer>
  );
};

export default UserNavigation;
