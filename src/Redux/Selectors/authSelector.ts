import { RootState } from '../store';

export default {
    getVisible:(state:RootState)=>state.authReducer.isModalVisible
};
