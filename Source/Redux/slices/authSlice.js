import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: {
      currentUser: null,
    },
    token: {
      access_token: '',
    },
  },
  reducers: {
    login: (state, action) => {
      state.login.currentUser = action.payload;
    },
    accessToken: (state, action) => {
      state.token.access_token = action.payload;
    },
  },
});
export const {login, accessToken} = authSlice.actions;
export default authSlice.reducer;
