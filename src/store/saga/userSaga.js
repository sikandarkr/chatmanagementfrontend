import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `https://jsonplaceholder.typicode.com/users`;
function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}


function* fetchUsers(action) {
   console.log("hi this is sagagenerater",action.payload)
   try {
      const data = yield call(getApi);
      console.log("mydata",data);
      yield put({type: 'GET_USERS_SUCCESS', data: data});
      
   } catch (e) {
      yield put({type: 'GET_USERS_FAILED', message: e.message});
   }
}



function* userSaga() {
   yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
  

}

export default userSaga;