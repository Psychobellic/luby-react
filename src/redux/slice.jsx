import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'store',
  initialState: {
    value: {
      email: 'admin@luby.com.br',
      password: 'admin',
      remember: false,
      token: '',
      fetchedData: {
     
      },
    }
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },
    setEmail: (state, action) => {
      state.value.email = action.payload
    },
    setPassword: (state, action) => {
      state.value.password = action.payload
    },
    setRemember: (state, action) => {
      state.value.remember = action.payload
    },
    setToken: (state, action) => {
      state.value.token = action.payload
    },
    setFetchedData: (state, action) => {
      state.value.fetchedData = action.payload
    },

  }
})

export const { login, setEmail, setPassword, setRemember, setToken, setFetchedData } = slice.actions;

export const selectGlobal = state => state.payload;

export default slice.reducer;