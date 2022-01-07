import { userReducer } from "./reducers";

const SET_USER = 'SET_USER';

export const setUser = (state: any, apiResponse: any) => {
  userReducer({...state}, {...apiResponse})
}
