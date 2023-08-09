import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {AppColors} from '../Constants/AppColors';
import {Typographies} from '../Constants/Typographies';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
const Type = ['back', 'tools'];
const AppToolbar = props => {
  const {onPressBack, onPressOption, title, type, option1, option2, option3} =
    props;
  const [toolBarType, settoolBarType] = useState('');
  switch (type) {
    case Type[0]: {
      if (toolBarType == Type[0]) {
        break;
      }
      settoolBarType(Type[0]);
      break;
    }
    case Type[1]: {
      if (toolBarType == Type[1]) {
        break;
      }
      settoolBarType(Type[1]);
      break;
    }

    default:
      break;
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={onPressBack}>
        <FastImage
          source={require('../Images/ic_arrow.png')}
          style={{width: 20, height: 20}}
          resizeMode={FastImage.resizeMode.contain}></FastImage>
      </Pressable>
      <Text style={[Typographies.h4, {color: AppColors.primary_black}]}>
        {title}
      </Text>
      {toolBarType === Type[0] && <Pressable disabled></Pressable>}
      {toolBarType === Type[1] && (
        // <Pressable onPress={onPressOption}>
        //   <FastImage
        //     source={require('../Images/ic_3dots.png')}
        //     style={{width: 20, height: 20}}
        //     resizeMode={FastImage.resizeMode.contain}></FastImage>
        // </Pressable>
        <Menu
          onSelect={value => {
            switch (value) {
              case 1:
                option1();
                break;
              case 2:
                option2();
                break;
              case 3:
                option3();
                break;
              default:
                break;
            }
          }}>
          <MenuTrigger text="• • •" customStyles={triggerStyles}></MenuTrigger>
          <MenuOptions customStyles={optionsStyles}>
            <MenuOption value={1}>
              <Text style={[Typographies.h5, {color: AppColors.primary_black}]}>
                Home
              </Text>
            </MenuOption>
            <MenuOption value={2}>
              <Text style={[Typographies.h5, {color: AppColors.primary_black}]}>
                Library
              </Text>
            </MenuOption>
            {option3 != null && (
              <MenuOption value={3}>
                <Text
                  style={[Typographies.h5, {color: AppColors.primary_black}]}>
                  Chapter List
                </Text>
              </MenuOption>
            )}
          </MenuOptions>
        </Menu>
      )}
    </View>
  );
};

export default AppToolbar;
const triggerStyles = {
  triggerText: {
    color: 'black',
  },
  triggerOuterWrapper: {
    backgroundColor: 'white',
    width: 24,
    alignItems: 'center',
    paddding: 10,
  },
};

const optionsStyles = {
  optionsContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 40,
  },
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: AppColors.primary_white,
    paddingTop: 10,
    paddingBottom: 15,
  },
});
