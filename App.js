/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import UserNavigation from './Source/Pages/UserNavigation';
import {store} from './Source/Redux/store/store';
import persistStore from 'redux-persist/es/persistStore';
import {MenuProvider} from 'react-native-popup-menu';
import {initializeApp} from 'firebase/app';
import firebaseConfig from './firebaseConfig';
let persistor = persistStore(store);
initializeApp(firebaseConfig);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider
          initialMetrics={{
            frame: {x: 0, y: 0, width: 0, height: 0},
            insets: {top: 0, left: 0, right: 0, bottom: 0},
          }}>
          <MenuProvider>
            <UserNavigation />
          </MenuProvider>

          {/* <HomeScreen></HomeScreen> */}
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={'#FFF'}></StatusBar>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
