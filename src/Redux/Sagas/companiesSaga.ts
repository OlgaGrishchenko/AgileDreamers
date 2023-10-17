import { all, call, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getCompanies,
  setCompanies,
  getSingleCompany,
  setSingleCompany,
} from "../Reducers/companiesReducer";

import API from "../utils/api";

function* getAllCompaniesWorker(action: PayloadAction<undefined>) {
   const { ok, data, problem } = yield call(API.getCompanies);
   console.log("руддщ")
   if (ok && data) {
      yield put(setCompanies(data));
      
   } else {
      console.warn("Error fetching posts: ", problem);
   }
}

export default function* companiesSaga() {
  yield all([takeLatest(getCompanies, getAllCompaniesWorker)]);
}
