import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'user',
  initialState: {
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.userData = payload;
    },
  },
})

export const { setUser } = slice.actions;

export const selectUser = state => state.payload;
  
export default slice.reducer;