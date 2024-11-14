import React, { useEffect } from 'react'
import { Link} from 'react-router-dom'
import { getProducts } from '../api/getProducts'
import { useDispatch } from 'react-redux'
import { setProducts  } from '../slices/ProudctSlice'
import { getCategories } from '../api/getProducts'
import { setCategories, setAllProducts } from '../slices/ProudctSlice'

const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    (async () => {
      const data = await getProducts();
      const category = await getCategories();
      dispatch(setProducts(data));
      dispatch(setAllProducts(data));
      dispatch(setCategories(category));
    })();
  })
  return (
    <Link to={'/products'} className=' relative text-[var(--text-color-primary)]'>
        Go to Product
    </Link>
  )
}

export default Home