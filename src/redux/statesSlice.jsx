import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'states',
  initialState: {
    email: '',
    password: '',
    remember: false,
    token: '',
    passFormData: '',
  },
  reducers: {
    setEmail: (state, { payload }) => {
      state.email = payload;
    },
    getEmail: (state) => {
      return state.email
    },
    setPassword: (state, { payload }) => {
      state.password = payload;
    },
    getPassword: (state) => {
      return state.password;
    },
    setRemember: (state, { payload }) => {
      state.remember = payload;
    },
    getRemember: (state) => {
      return state.remember;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    getToken: (state) => {
       return state.token;
    },
    setPassFormData: (state, { payload }) => {
      state.passFormData = payload;
    },
    getPassFormData: (state) => {
      return state.passFormData;
    }
  }
})

export const { setEmail, getEmail, setPassword, getPassword, setRemember, getRemember, setToken, getToken, setPassFormData, getPassFormData } = slice.actions;

export const selectGlobal = state => state.payload;

export default slice.reducer;