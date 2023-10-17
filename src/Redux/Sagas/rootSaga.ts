import { all } from 'redux-saga/effects';
import companiesSaga from './companiesSaga';

export default function* rootSaga () {
    yield all ([ companiesSaga()])
}