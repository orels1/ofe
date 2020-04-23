import { Action, Routine } from './types';

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const fetchUsersRequest: Action = (payload) => ({
  type: FETCH_USERS_REQUEST,
  payload
});
fetchUsersRequest.toString = () => FETCH_USERS_REQUEST;

const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
const fetchUsersError: Action = (payload) => ({
  type: FETCH_USERS_ERROR,
  payload
});
fetchUsersError.toString = () => FETCH_USERS_ERROR;

const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const fetchUsersSuccess: Action = (payload) => ({
  type: FETCH_USERS_SUCCESS,
  payload
});
fetchUsersSuccess.toString = () => FETCH_USERS_SUCCESS;

const requestUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest());
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(
      response => response.json(),
      error => {
        console.error(error);
        dispatch(fetchUsersError(error))
      }
    )
    .then(json => dispatch(fetchUsersSuccess(json)));
}

export default {
  users: {
    fetchUsers: {
      trigger: requestUsers,
      request: fetchUsersRequest,
      error: fetchUsersError,
      success: fetchUsersSuccess
    }
  }
};
