import { State } from './types';

const Selectors = {
  users: (state: State) => state.users,
  userData: (state: State) => state.users.list
};

export default Selectors;
