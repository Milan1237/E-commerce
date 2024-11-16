import React from "react";
import NavLogo from "../assets/NavLogo/navLogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogOut } from "../slices/AuthSlice";
import authService from "../appwrite/authService";
const Navbar = () => {
  console.log('navbar rendered');
  const { cart } = useSelector((state) => state.product);
  const { isLoggedIn, userData } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function logOut() {
    dispatch(LogOut());
    await authService.logOut();
  }
  return (
    <header className=" fixed z-10 w-full top-0 flex items-center px-[20px] justify-between bg-[#1a1a1a] border-[#333333] border-b-2">
      <Link to={"/"} className=" flex items-center ">
        <img src={NavLogo} alt="NavLogo" className="w-[70px] " />
        <h1
          className={` font-['Montserrat'] text-[var(--primary-color)] font-bold text-3xl`}
        >
          NexCart
        </h1>
      </Link>

      <div className=" flex gap-4 ">
        {userData && (
          <div>
            <h2 className="text-[var(--primary-color)] font-bold ">
              HI! {userData?.name}
            </h2>
          </div>
        )}

        <div>
          <button
            onClick={() => (isLoggedIn ? logOut() : navigate("/login"))}
            className="bg-[var(--primary-color)] py-[.5rem] px-4 mr-4 rounded-[.25rem] text-[var(--text-color-primary)] font-bold"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>

        <NavLink to={"/cart"} className="relative">
          {({ isActive }) => (
            <>
              <span
                className={`  material-icons cursor-pointer transition duration-500 text-3xl hover:text-[var(--primary-color)]  hover:scale-125 ${
                  isActive
                    ? "text-[var(--primary-color)] scale-125"
                    : "text-[var(--text-color-primary)]"
                }`}
              >
                shopping_cart
              </span>
              {isLoggedIn && (
                <p className=" top-[-8px] h-[1.25rem] w-[1.25rem] absolute bg-red-600 rounded-[50%] flex justify-center items-center font-bold text-[var(--text-color-primary)] right-[-8px] ">
                  {cart.length}
                </p>
              )}
            </>
          )}
        </NavLink>
        <NavLink to={"/wishlist"}>
          <span className="material-icons cursor-pointer transition duration-500 hover:text-[var(--primary-color)] text-[var(--text-color-primary)] text-3xl  hover:scale-125">
            favorite
          </span>
        </NavLink>
        
      </div>
    </header>
  );
};

export default Navbar;
