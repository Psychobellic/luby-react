import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import storeReducer from './slice';

const middleware = [thunk];

export default configureStore({
  reducer: {
    store: storeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(middleware),
});