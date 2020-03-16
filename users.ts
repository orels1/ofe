import Actions from './actions';
import { ActionObject as Action, UserState } from './types';

const initialState: UserState = {
  list: [],
  error: null
};

const users = (state: UserState = initialState, action: Action) => {
  switch (action.type) {
    case Actions.users.fetchUsers.success.toString():
      return {
        ...state,
        list: action.payload,
        error: null
      };
    case Actions.users.fetchUsers.error.toString():
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default users;
