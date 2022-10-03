import * as type from '../types';



export function getUsers() {
  console.log("Hi from getuser...");
    return {
      type: type.GET_USERS_REQUESTED,
    }
  }