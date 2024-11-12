import React from "react";
import NavLogo from "../assets/NavLogo/NavLogo.png";
const Navbar = () => {
  return (
    <header className=" fixed z-10 w-full top-0 flex items-center px-[20px] justify-between bg-[#1a1a1a] border-[#333333] border-b-2">
      <div className=" flex items-center ">
        <img src={NavLogo} alt="NavLogo" className="w-[70px] " />
        <h1
          className={` font-['Montserrat'] text-[var(--text-color-primary)] text-3xl`}
        >
          NexCart
        </h1>
      </div>
      <div className=" flex gap-4">
        <span class="material-icons cursor-pointer transition duration-500 text-[var(--text-color-primary)] text-3xl hover:text-[var(--primary-color)]  hover:scale-125">shopping_cart</span>
        <span class="material-icons cursor-pointer transition duration-500 hover:text-[var(--primary-color)] text-[var(--text-color-primary)] text-3xl  hover:scale-125">favorite</span>
        <span class="material-icons cursor-pointer text-[var(--text-color-primary)] text-3xl ease-in-out transition duration-500 hover:text-[var(--primary-color)]  hover:scale-125">person</span>
      </div>
    </header>
  );
};

export default Navbar;
