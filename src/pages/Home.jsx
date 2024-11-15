import React, { useEffect } from 'react'
import { Link} from 'react-router-dom'
import { getProducts } from '../api/getProducts'
import { useDispatch } from 'react-redux'
import { setProducts  } from '../slices/ProudctSlice'
import { getCategories } from '../api/getProducts'
import { setCategories, setAllProducts } from '../slices/ProudctSlice'
import authService from '../appwrite/authService'
import {LogIn, setUserData} from '../slices/AuthSlice'
const Home = () => {
  const dispatch = useDispatch();
  console.log('home rendered');
  useEffect(()=>{
    (async () => {
      const [data , category , user] = await Promise.all([getProducts() , getCategories() , authService.getCurrentAccount()]);
      if(user){
        dispatch(LogIn());
        dispatch(setUserData(user));
      }
      dispatch(setProducts(data));
      dispatch(setAllProducts(data));
      dispatch(setCategories(category));
    })();
  } , [])
  return (
    <>
    <Link to={'/products'} className=' relative w-full text-[var(--text-color-primary)] font-bold '>
        Go to Product
    </Link>
    </>
  )
}

export default Home