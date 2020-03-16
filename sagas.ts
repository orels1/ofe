import { all, fork, call, put, takeEvery } from 'redux-saga/effects';

import Actions from './actions';

function* fetchUsers({ payload }) {
  try {
    const resp = yield call(
      fetch,
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = yield resp.json();
    yield put(Actions.users.fetchUsers.success(users));
  } catch (e) {
    yield put(Actions.users.fetchUsers.error(e));
    console.error(e);
  }
}

function* userSagas() {
  yield takeEvery(Actions.users.fetchUsers.trigger, fetchUsers);
}

export default function* sagas() {
  yield all([fork(userSagas)]);
}
