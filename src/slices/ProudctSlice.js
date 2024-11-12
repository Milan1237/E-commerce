import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [] 
}
const productSlice = createSlice({
    name: 'product',
    initialState , 
    reducers:{
        setCart: (state , action )=>{
            state.cart = action.payload ; 
        }
    }
})

export const {setCart} =  productSlice.actions ;
export default productSlice.reducer ; 