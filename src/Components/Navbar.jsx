import React from "react";
import NavLogo from "../assets/NavLogo/NavLogo.png";
const Navbar = () => {
  return (
    <header className="flex items-center px-[20px] justify-between bg-[#1a1a1a] border-[#333333] border-b-2">
      <div className=" flex items-center ">
        <img src={NavLogo} alt="NavLogo" className="w-[70px] " />
        <h1
          className={` font-['Montserrat'] text-[var(--text-color-primary)] text-3xl`}
        >
          NexCart
        </h1>
      </div>
      <div className=" flex gap-4">
        <span class="material-icons text-[var(--text-color-primary)] text-3xl">shopping_cart</span>
        <span class="material-icons text-[var(--text-color-primary)] text-3xl">favorite</span>
        <span class="material-icons text-[var(--text-color-primary)] text-3xl">person</span>
      </div>
    </header>
  );
};

export default Navbar;
