import { takeEvery, delay } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import * as actions from './actions'
import Api from './Api';

const { saveScoreSucceeded, saveScoreFailed, FETCH_DATA } = actions

export function* fetchAsync(action) {
  try {
    const apiData = yield call(Api.fetchData, action.url)
    yield put(saveScoreSucceeded(apiData.results))
  }
  catch (err) {
    console.log("ERROR", err);
    yield put (saveScoreFailed(err))
  }
}

export function* watchfetchAsync() {
  yield takeEvery('FETCH_DATA', fetchAsync)
}

export default function* rootSaga() {
  yield [
    watchfetchAsync(),
  ]
}
