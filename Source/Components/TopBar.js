import {useEffect, useState} from 'react';
import {Animated, View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {AppColors} from '../Constants/AppColors';
import {Typographies} from '../Constants/Typographies';
import DropShadow from 'react-native-drop-shadow';
const {width} = Dimensions.get('screen');

const TabBarIndicator = ({state, length}) => {
  const padding = 20 / length;
  const ITEM_WIDTH = width / length - padding;
  const [translateValue, setTranslateValue] = useState(
    new Animated.Value(ITEM_WIDTH),
  );

  useEffect(() => {
    slide(state.index);
  }, [state]);
  const slide = index => {
    const toValue = ITEM_WIDTH * index;
    Animated.timing(translateValue, {
      toValue: toValue,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: ITEM_WIDTH,
        backgroundColor: 'transparent',
        height: '100%',
        borderRadius: 20,
        transform: [{translateX: translateValue}],
        marginStart: 10,
        borderWidth: 1,
        borderColor: '#EBECF0',
      }}
    />
  );
};

export function TopBar({state, descriptors, navigation, position}) {
  return (
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
        paddingVertical: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          borderRadius: 20,
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              activeOpacity={1}
              style={[
                {
                  flex: 1,
                  backgroundColor: AppColors.primary_white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                  padding: 8,
                },
                index == 0
                  ? {borderBottomEndRadius: 0, borderTopEndRadius: 0}
                  : {borderBottomStartRadius: 0, borderTopStartRadius: 0},
              ]}>
              <Text
                style={[
                  Typographies.h4,
                  isFocused
                    ? {color: AppColors.primary_black}
                    : {color: AppColors.secondary_gray},
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
        <TabBarIndicator state={state} length={state.routes.length}>
          {' '}
        </TabBarIndicator>
      </View>
    </DropShadow>
  );
}
