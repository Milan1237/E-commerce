import React, { useEffect } from 'react'
import { Link} from 'react-router-dom'
import { getProducts } from '../api/getProducts'
import { useDispatch } from 'react-redux'
import { setProducts  } from '../slices/ProudctSlice'
import { getCategories } from '../api/getProducts'
import { setCategories, setAllProducts } from '../slices/ProudctSlice'
import authService from '../appwrite/authService'
import {LogIn} from '../slices/AuthSlice'
const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    (async () => {
      const data = await getProducts();
      const category = await getCategories();
      const user = await authService.getCurrentAccount();
      console.log(user)
      if(user){
        dispatch(LogIn());
      }
      dispatch(setProducts(data));
      dispatch(setAllProducts(data));
      dispatch(setCategories(category));
    })();
  })
  return (
    <>
    <Link to={'/products'} className=' relative w-full text-[var(--text-color-primary)] font-bold '>
        Go to Product
    </Link>
    </>
  )
}

export default Home