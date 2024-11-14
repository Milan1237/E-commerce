import axios from 'axios'
export const getProducts = async ()=>{
    const {data} = await axios.get('https://fakestoreapi.com/products');
    return data ; 
}


export const getCategories = async ()=>{
    const {data} = await axios.get('https://fakestoreapi.com/products/categories');
    const updatedData = [ 'all' , ...data ]
    return updatedData ;
}