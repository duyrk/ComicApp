import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopBar} from '../Components/TopBar';
const TopTab = createMaterialTopTabNavigator();
const TestTopTab = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Video"
      tabBar={props => <TopBar {...props} />}>
      <TopTab.Screen name="Video" component={Component} />
      <TopTab.Screen name="Post" component={Component} />
    </TopTab.Navigator>
  );
};

export default TestTopTab;

const Component = () => {
  return (
    <View>
      <Text>TestTopTab</Text>
    </View>
  );
};
