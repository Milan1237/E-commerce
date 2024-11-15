import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Authlayout = ({children}) => {
    const {isLoggedIn} = useSelector(state => state.auth);
    const navigate = useNavigate();
    useEffect(()=>{
        !isLoggedIn && navigate('/login')
    },[]);
  return (
    isLoggedIn ? children : null
  )
}

export default Authlayout