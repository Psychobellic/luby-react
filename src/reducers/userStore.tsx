import { configureStore } from '@reduxjs/toolkit';
import {  userReducer } from './userReducer';

const userStore = configureStore({
  reducer: {
    user: userReducer,
  }
});

export type RootState = ReturnType<typeof userStore.getState>;

export default userStore;