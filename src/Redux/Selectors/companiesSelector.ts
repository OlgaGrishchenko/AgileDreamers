import { RootState } from "../store";

export default {
   getAllCompanies: (state: RootState) => state.companiesReducer.allCompanies,
};