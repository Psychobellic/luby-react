/* Holds application's state 
App => Action => Reducer => Store 
access state via getState()
update state via dispatch(action)
register listeners via subscribe(listener)
unsubscribe to store
*/
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';


export default configureStore({
  reducer: {
    payload: userReducer
  }
});