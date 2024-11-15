import React, { useEffect } from "react";
import AuthForm from "../Components/AuthForm";
import authService from "../appwrite/authService";
const Login = () => {
    
  return (
    <>
      <AuthForm pageType={'login'}/>
    </>
  );
};

export default Login;
