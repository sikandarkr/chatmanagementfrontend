import * as type from '../types';
const initialState = {
    users: [],
    loading: false,
    error: null,
    dataItem:[],
    userName:[]
    
  }
  
  
  export default function users(state = initialState, action) {
    switch (action.type) {
      case type.GET_USERS_REQUESTED:
        return {
          ...state,
          loading: true,
        }
      case type.GET_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.users
        }
      case type.GET_USERS_FAILED:
        return {
          ...state,
          loading: false,
          error: action.message,
        }
    // from get git new users
      case type.GET_GIT_USERS:
         return {
          ...state,
          dataItem:action.data

 }
      default:
        return state
    }
  }