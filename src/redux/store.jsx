import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './userSlice';
import statesReducer from './statesSlice';

const middleware = [thunk];

export default configureStore({
  reducer: {
    user: userReducer,
    states: statesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(middleware),
});