import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'store',
  initialState: {
    value: {
      email: 'admin@luby.com.br',
      password: 'admin',
      remember: false,
      status: null,
    },
    fetchedData: {
        message: '',
        token: '',
        totalEmployees: 0,
        totalVehicles: 0,
        totalVehiclesLoggedUser: 0,
        user: {
          bio: '',
          cpf: '',
          name: '',
          email: '',
          salary: 0,
          vehicles: [
            {
              brand: '',
              model: '',
              yer: '',
              km: 0,
              color: '',
              chassi: '',
              value: 0,
              status: '',
            }
          ]
        },
    },
    fetchedEmployees: {
      perPage: 0,
      currentPage: 0,
      totalRecords: 0,
      employees: [
        {
          name: '',
          email: '',
          cpf: '',
          salary: 0,
          bio: '',
        }
      ]
    },
    fetchedVehicles: {
      perPage: 0,
      currentPage: 0,
      totalRecords: 0,
      vehicles: [
        {
          brand: '',
          model: '',
          yer: '',
          km: 0,
          color: '',
          status: '',
          chassi: '',
          value: 0,
        }
      ]
    }
  },
  reducers: {
    login: (state, action) => {
      state.fetchedData = {...action.payload};
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
      state.fetchedData.token = action.payload
    },
    setEmployees: (state, action) => {
      state.fetchedEmployees = action.payload;
    },
    setVehicles: (state, action) => {
      state.fetchedVehicles = action.payload;
    },
  }
})

export const { login, setEmail, setPassword, setRemember, setToken, setEmployees } = slice.actions;

export const selectGlobal = state => state.payload;

export default slice.reducer;