/* pure reducers = (previousState, action) => newState */

const SET_USER = 'SET_USER';

const initialState = {
  
}

export const userReducer = (state = initialState, action: any) => {
  switch(action.type){
    case SET_USER: return {
      ...state,
      data: {...action.payload}
    }

    default: return state;
  }
}