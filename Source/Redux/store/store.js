import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const reducer = combineReducers({
  auth: authReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: {
    persistedReducer,
  },
});
