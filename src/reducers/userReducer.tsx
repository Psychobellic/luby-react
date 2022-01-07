import { AnyAction } from 'redux';

export const userReducer = (state = user, action: AnyAction) => {
	switch (action.type) {
		case 'SET_STATE':
			return (state = action.payload);
		case 'GET_USER':
			return (state.message.user = action.payload.message.user);
		case 'GET_USER_NAME':
			return state.message.user.name;
		case 'GET_USER_TOKEN':
			return state.message.token;
		case 'GET_USER_VEHICLES':
			return state.message.user.vehicles;
		case 'GET_TOTAL_EMPLOYEES':
			return state.message.totalEmployees;
		case 'GET_TOTAL_VEHICLES':
			return state.message.totalVehicles;
		case 'GET_TOTAL_VEHICLES_BY_USER':
			return state.message.totalVehiclesLoggedUser;
		default:
			return state;
	}
};

const user = {
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
};
