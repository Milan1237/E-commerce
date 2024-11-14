import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    allProducts: [] , 
    products: [],
    cart: [],
    categories: [],
    selectedCategory: 'all' 
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
        },
        setProducts: (state , action)=>{
            state.products = action.payload ; 
        },
        setCategories: (state, action)=>{
            state.categories = action.payload ;
        },
        setSelectedCategory: (state , action)=>{
            state.selectedCategory = action.payload ; 
        },
        setAllProducts: (state , action)=>{
            state.allProducts = action.payload ; 
        }
    }
})

export const {setAllProducts,setProducts,setCart ,setCategories , setSelectedCategory ,   removeFromCart , increaseProductCount , decreaseProductCount} =  productSlice.actions ;
export default productSlice.reducer ; 