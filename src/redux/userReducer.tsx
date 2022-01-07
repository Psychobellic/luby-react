import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		message: {
			message: '',
			token: 0,
			totalEmployees: 0,
			totalVehicles: 0,
			totalVehiclesLoggedUser: 0,
			user: {
				bio: '',
				cpf: 0,
				email: '',
				name: '',
				salary: 0,
				vehicles: {
					0: {
						brand: '',
						model: '',
						yer: 0,
						km: 0,
						color: '',
						status: '',
					},
					1: {
						brand: '',
						model: '',
						yer: 0,
						km: 0,
						color: '',
						status: '',
					},
					2: {
						brand: '',
						model: '',
						yer: 0,
						km: 0,
						color: '',
						status: '',
					},
				},
			},
		},
	},
	reducers: {
		getUserName: (state) => {
      
    },
    getUserToken: (state) => {},
		getTotalEmployees: (state) => {},
		getTotalVehicles: (state) => {},
		getTotalVehiclesLoggedUser: (state) => {},
    getVehicles: (state) => {},
	},
});

export const { getUserName, getUserToken, getTotalEmployees, getTotalVehicles, getTotalVehiclesLoggedUser, getVehicles } = userSlice.actions;
export default userSlice.reducer;