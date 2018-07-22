import { takeLatest, takeEvery, fork, all } from 'redux-saga/effects';

import { getAuth, signInAnonymously } from './auth';

import { getData, updateData, setData, pushData, goOffline, goOnline } from './database';

import { logError } from './errors';

export default function* sagas() {
  yield all([
    fork(takeLatest, 'getAuth', getAuth),
    fork(takeLatest, 'signInAnonymously', signInAnonymously),

    fork(takeEvery, 'getData', getData),
    fork(takeEvery, 'updateData', updateData),
    fork(takeEvery, 'setData', setData),
    fork(takeEvery, 'pushData', pushData),
    fork(takeEvery, 'goOffline', goOffline),
    fork(takeEvery, 'goOnline', goOnline),

    fork(takeLatest, 'logError', logError),
  ]);
}
