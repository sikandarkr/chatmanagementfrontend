import * as type from '../types';
import { GET_GIT_USERS } from '../types';



export function getUsers(users) {
  console.log("Hi from getuser ACTION...");
    return {
      type:type.GET_USERS_REQUESTED,
      // payload:userName,
      payload:users
  }
}


