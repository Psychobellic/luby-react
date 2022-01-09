import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import storeReducer from './slice';

const middleware = [thunk];

const store = configureStore({
  reducer: {
    store: storeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(middleware),
});

export default store;