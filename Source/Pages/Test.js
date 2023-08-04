import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import DatePicker from 'react-native-date-picker';
import LottieView from 'lottie-react-native';
import {Image} from 'react-native';
import TestTopTab from './TestTopTab';
const Test = () => {
  const [date, setDate] = useState(new Date());
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
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);
  useEffect(() => {
    console.log('Date' + date);
  }, [date]);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />
        <Button
          onPress={handleDismissModalPress}
          title="Dismiss Modal"
          color="black"
        />
        <View style={{flex: 1}}>
          <TestTopTab></TestTopTab>
        </View>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enableDismissOnClose>
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
            <DatePicker date={date} onDateChange={setDate} mode="date" />
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Test;
