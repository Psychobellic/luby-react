export const setState = (state: Object) => {
  return {
    type: "SET_STATE",
    payload: state,
  }
};

export const getUser = (state: Object) => {
  return {
    type: 'GET_USER',
  };
};

export const getUserName = (state: string) => {
  return {
    type: "GET_USER_NAME",
  }
};

export const getUserToken = (state: number) => {
  return {
    type: "GET_USER_TOKEN",
  }
};

export const getVehicles = (state: number) => {
	return {
		type: 'GET_USER_VEHICLES',
	};
};


export const getTotalEmployees = (state: number) => {
  return {
    type: "GET_TOTAL_EMPLOYEES",
  }
};


export const getTotalVehicles = (state: number) => {
   return {
    type: "GET_TOTAL_VEHICLES",
  }
};

export const getTotalVehiclesLoggedUser = (state: number) => {
  return {
    type: "GET_TOTAL_VEHICLES_BY_USER",
  }
};


