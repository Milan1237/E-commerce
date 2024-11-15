import React from "react";
import authService from "../appwrite/authService";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {LogIn} from '../slices/AuthSlice'

const AuthForm = ({pageType}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function formSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    let formData = {};

    for (const [key, value] of data.entries()) {
        formData = {...formData , [key]: value} ; 
    }
    console.log(formData);
    if(pageType=='login'){
      try {
        const data = await authService.Login(formData);
        dispatch(LogIn());
        data && navigate('/') ; 
      } catch (error) {
        console.log(error);
      }
      
    }
    else{
      await authService.createUser(formData);
    }
    
  }

  return (
    <div className="flex min-h-full m-auto flex-col justify-center py-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-indigo-600">
          {pageType == 'login' ? 'Login' : 'Create Your Account'}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-2"
          action="#"
          method="POST"
          onSubmit={formSubmit}
        >
          <div className={pageType == 'login' && 'hidden' }>
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-indigo-600"
            >
              name
            </label>
            <div>
              <input
                id="name"
                name="name"
                type="name"
                required = {pageType == 'signup'}
                disabled = {pageType == 'login'}
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-indigo-600"
            >
              Email address
            </label>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-indigo-600"
              >
                Password
              </label>
            </div>
            <div className=" ">
              <input
                id="password"
                name="password"
                type="password"
                required
                className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex mt-4 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>

          <p className="mt-5 text-center text-sm/6 text-gray-500">
          {pageType == 'login' ? "don't Have an Account ? " : 'Already Have an account' }
            
            <Link
              to={pageType == 'login' ? '/signup' : '/login' }
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {pageType == 'login' ? ' SignUp' : ' Login'}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
