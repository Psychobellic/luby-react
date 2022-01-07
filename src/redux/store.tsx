import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    email: emailReducer,
    password: passwordReducer,
    token: tokenReducer,
    remember: rememberReducer,
  }
});

export default store;
