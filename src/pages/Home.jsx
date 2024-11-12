import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  return (
    <Link to={'/products'} className='ml-[270px] top-[4rem] relative text-[var(--text-color-primary)]'>
        Go to Product
    </Link>
  )
}

export default Home