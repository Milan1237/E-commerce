import React from "react";
import NavLogo from "../assets/NavLogo/NavLogo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const {cart} = useSelector(state=> state.product);
  return (
    <header className=" fixed z-10 w-full top-0 flex items-center px-[20px] justify-between bg-[#1a1a1a] border-[#333333] border-b-2">
      <Link to={'/'} className=" flex items-center ">
        <img src={NavLogo} alt="NavLogo" className="w-[70px] " />
        <h1
          className={` font-['Montserrat'] text-[var(--text-color-primary)] text-3xl`}
        >
          NexCart
        </h1>
      </Link>
      <div className=" flex gap-4 ">
        <NavLink to={"/cart"} className='relative'>
          {({ isActive }) => (
            <>
            <span
              className={`  material-icons cursor-pointer transition duration-500 text-3xl hover:text-[var(--primary-color)]  hover:scale-125 ${
                isActive ? "text-[var(--primary-color)] scale-125" : "text-[var(--text-color-primary)]"
              }`}
            >
              shopping_cart
            </span>
            <p className=" top-[-8px] h-[1.25rem] w-[1.25rem] absolute bg-red-600 rounded-[50%] flex justify-center items-center font-bold text-[var(--text-color-primary)] right-[-8px] ">{cart.length}</p>
            </>
          )}
          
        </NavLink>
        <NavLink to={"/wishlist"}>
          <span className="material-icons cursor-pointer transition duration-500 hover:text-[var(--primary-color)] text-[var(--text-color-primary)] text-3xl  hover:scale-125">
            favorite
          </span>
        </NavLink>
        <NavLink to={"/profile"}>
          <span className="material-icons cursor-pointer text-[var(--text-color-primary)] text-3xl ease-in-out transition duration-500 hover:text-[var(--primary-color)]  hover:scale-125">
            person
          </span>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
