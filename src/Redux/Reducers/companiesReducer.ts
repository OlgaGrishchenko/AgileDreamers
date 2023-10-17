import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompanyCardType, CompanyCardListType } from "../../Constants/@types";

type FilmsReducerState = {
   allCompanies: CompanyCardListType;
   singleCompany: CompanyCardType | null;
};

const initialState: FilmsReducerState = {
   allCompanies: [],
   singleCompany: null,
};

const companiesSlice = createSlice({
   name: "companiesReducer",
   initialState,
   reducers: {

      getCompanies: (state, action: PayloadAction<undefined>) => {},
      setCompanies: (state, action: PayloadAction<CompanyCardListType>) => {state.allCompanies = action.payload;},

      getSingleCompany: (state, action: PayloadAction<string>) => {},
      setSingleCompany: (state, action: PayloadAction<CompanyCardType>) => {state.singleCompany = action.payload;},

   }
}
);

   export const { 
      getCompanies,
      setCompanies,
      getSingleCompany,
      setSingleCompany,
   } = companiesSlice.actions;

   const companiesReducer = companiesSlice.reducer;
   export default companiesReducer;