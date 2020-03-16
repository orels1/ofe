import { Action, Routine } from './types';

const createAction = (type: string): Action => {
  const body = (payload: any) => ({
    type,
    payload
  });
  body.toString = () => type;
  return body;
};

const defaultRoutine = (type: string): Routine => {
  return {
    trigger: createAction(`${type.toUpperCase()}_TRIGGER`),
    success: createAction(`${type.toUpperCase()}_SUCCESS`),
    error: createAction(`${type.toUpperCase()}_ERROR`)
  };
};

export default {
  users: {
    fetchUsers: defaultRoutine('fetch_users')
  }
};
