import {createSlice} from '@reduxjs/toolkit';

const mangaSlice = createSlice({
  name: 'auth',
  initialState: {
    manga: {
      current: null,
    },
  },
  reducers: {
    setCurrentManga: (state, action) => {
      state.manga.current = action.payload;
    },
  },
});
export const {setCurrentManga} = mangaSlice.actions;
export default mangaSlice.reducer;
