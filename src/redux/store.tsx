/* Holds application's state 
App => Action => Reducer => Store 
access state via getState()
update state via dispatch(action)
register listeners via subscribe(listener)
unsubscribe to store
*/
import {  createStore } from 'redux';
import { userReducer } from './reducers';


const userStore = createStore(userReducer);

export default userStore;