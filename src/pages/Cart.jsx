import React from "react";
import { useSelector } from "react-redux";
import HorizontalCard from "../Components/HorizontalCard";
import { Link } from "react-router-dom";
import PriceDetails from "../Components/PriceDetails";

const Cart = () => {
  const { cart } = useSelector((state) => state.product);
  return (
    <>
      <div className="top-[4rem] relative flex justify-between w-full px-6">
        {cart.length === 0 && (
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className=" text-[var(--text-color-primary)] text-3xl">
              No products has been added to cart
            </h1>
            <Link
              to={"/products"}
              className="text-[var(--primary-color)] underline"
            >
              Go to Prouducts
            </Link>
          </div>
        )}

        <div className=" flex gap-4 flex-col">
          {cart.map((pro, index) => (
            <HorizontalCard key={index} product={pro} />
          ))}
        </div>
        {cart.length > 0 && <PriceDetails />}
      </div>
    </>
  );
};

export default Cart;
