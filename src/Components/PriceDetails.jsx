import React from "react";
import { useSelector } from "react-redux";

const PriceDetails = () => {
  const {cart} = useSelector(state=> state.product);
  return (
    <>
      <div className=" flex flex-col gap-4 bg-[#1a1a1a] min-w-[350px] h-fit p-4 text-[var(--text-color-primary)]">
        <div>Price Details</div>
        <div className="flex items-center justify-between">
          <span>
            {cart.length} items breakups
          </span>
        </div>
        {
          cart.map(({title , price, count})=>
            <div className="flex items-center justify-between">
          <span className=" text-[var(--text-color-secondary)] text-[13px]">
            {title.length > 20 ? title.substring(0 , 20) + '...' : title} ({count})
          </span>
          <span className="text-[var(--text-color-secondary)] text-[13px]">
            $<span>{price}</span>
          </span>
        </div>
          )
        }
        <div className="d-flex align-center justify-space-between">
          <span>Delivery Charge</span>
          <span>$ 5</span>
        </div>
        <div className="d-flex align-center justify-space-between">
          <span>Total Amount</span>
          <span>$ {(cart.reduce((acc , pro)=>acc + (pro.price * pro.count) , 0) + 5).toFixed(2)}</span>
        </div>

        <button className="button btn-primary text-[var(--text-color-primary)] cursor">Place Order</button>
      </div>
    </>
  );
};

export default PriceDetails;
