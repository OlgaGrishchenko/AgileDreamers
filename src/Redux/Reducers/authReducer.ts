import { createSlice, PayloadAction } from '@reduxjs/toolkit';



type authReducerState = {
isModalVisible:boolean
};
const initialState: authReducerState = {
    isModalVisible:false
};

const authSlice = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        isMobileVisible:(state,action:PayloadAction<boolean>)=>{
            state.isModalVisible=action.payload
        }
},});
export const {
    isMobileVisible
} = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
