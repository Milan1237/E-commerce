import {configureStore} from '@reduxjs/toolkit'
import productSlice from '../slices/ProudctSlice'
const store = configureStore({
    reducer:{
        product: productSlice 
    }
});
export default store ;