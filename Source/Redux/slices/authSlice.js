import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: {
      currentUser: null,
    },
  },
  reducers: {
    login: (state, action) => {
      state.login.currentUser = action.payload;
    },
  },
});
export const {login} = authSlice.actions;
export default authSlice.reducer;
