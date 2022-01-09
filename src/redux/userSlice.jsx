import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'user',
  initialState: {
    userData: {

    },
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.userData = payload;
    },
    getUser: () => {
      return slice.state.userData;
    }
  },
})

export const { setUser, getUser } = slice.actions;

export const selectUser = state => state.payload;
  
export default slice.reducer;