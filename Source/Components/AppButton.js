import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppColors} from '../Constants/AppColors';
import {Typographies} from '../Constants/Typographies';
import DropShadow from 'react-native-drop-shadow';
const Type = ['normal', 'active', 'disabled'];
const AppButton = props => {
  const {onPress, value, type} = props;
  const [buttonType, setbuttonType] = useState('');
  switch (type) {
    case Type[0]: {
      if (buttonType == Type[0]) {
        break;
      }
      setbuttonType(Type[0]);
      break;
    }
    case Type[1]: {
      if (buttonType == Type[1]) {
        break;
      }
      setbuttonType(Type[1]);
      break;
    }
    case Type[2]: {
      if (buttonType == Type[2]) {
        break;
      }
      setbuttonType(Type[2]);
      break;
    }
    default:
      break;
  }
  return (
    <DropShadow
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
      }}>
      <View style={{borderRadius: 25, overflow: 'hidden'}}>
        {buttonType === Type[0] && (
          <Pressable
            android_ripple={{color: AppColors.primary_white}}
            style={styles.button}
            onPress={onPress}>
            <DropShadow
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              <Text style={[styles.buttonText, Typographies.h4]}>{value}</Text>
            </DropShadow>
          </Pressable>
        )}
        {buttonType === Type[1] && (
          <Pressable
            android_ripple={{color: AppColors.primary_white}}
            style={[styles.button, {backgroundColor: AppColors.primary}]}
            onPress={onPress}>
            <DropShadow
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              <Text style={[styles.buttonText, Typographies.h4]}>{value}</Text>
            </DropShadow>
          </Pressable>
        )}
        {buttonType === Type[2] && (
          <Pressable
            disabled={true}
            android_ripple={{color: AppColors.primary_white}}
            style={[styles.button, {backgroundColor: AppColors.secondary_gray}]}
            onPress={onPress}>
            <DropShadow
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              <Text style={[styles.buttonText, Typographies.h4]}>{value}</Text>
            </DropShadow>
          </Pressable>
        )}
      </View>
    </DropShadow>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 25,
    padding: 12,
    backgroundColor: AppColors.primary,
  },
  buttonText: {
    color: AppColors.primary_white,
  },
});
