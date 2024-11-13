import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [] 
}
const productSlice = createSlice({
    name: 'product',
    initialState , 
    reducers:{
        setCart: (state , action )=>{
            state.cart = [...state.cart , {...action.payload , count: 1}] ; 
        },
        removeFromCart: (state , action)=>{
            state.cart = state.cart.filter(pro=> pro.id !== action.payload)
        },
        increaseProductCount: (state , action)=>{
            state.cart = state.cart.map(pro=> {return pro.id == action.payload ?  {...pro , count: pro.count + 1} : pro});
        },
        decreaseProductCount: (state , action)=>{
            state.cart = state.cart.map(pro=> {return pro.id == action.payload ?  {...pro , count: pro.count - 1} : pro});
        }
    }
})

export const {setCart , removeFromCart , increaseProductCount , decreaseProductCount} =  productSlice.actions ;
export default productSlice.reducer ; 