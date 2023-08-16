import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import mangaReducer from '../slices/mangaSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 30000,
};
const reducer = combineReducers({
  auth: authReducer,
  manga: mangaReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
