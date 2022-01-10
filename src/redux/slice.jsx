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
        data: {
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
          }
        },
        status: null,
      },
    },
    fetchedEmployees: {
      perPage: 0,
      currentPage: 1,
      totalRecords: 9,
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
      state.value.fetchedData.data = {...action.payload};
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
    fetchEmployees: (state, action) => {
      state.value.fetchedEmployees = {...action.payload}
    }
  }
})

export const { login, setEmail, setPassword, setRemember, setToken } = slice.actions;

export const selectGlobal = state => state.payload;

export default slice.reducer;