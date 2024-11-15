import {configureStore} from '@reduxjs/toolkit'
import productSlice from '../slices/ProudctSlice'
import authSlice from '../slices/AuthSlice'
const store = configureStore({
    reducer:{
        product: productSlice ,
        auth: authSlice 
    }
});
export default store ;