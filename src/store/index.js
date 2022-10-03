import { combineReducers } from 'redux';
import users from './reducers/users';

const rootReducer = combineReducers({
  users: users,
});

export default rootReducer;