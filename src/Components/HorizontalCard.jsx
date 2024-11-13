import React from "react";
import { useDispatch } from "react-redux";
import { decreaseProductCount, increaseProductCount, removeFromCart } from "../slices/ProudctSlice";

const HorizontalCard = ({ product }) => {
  const { image, title, price, category, rating , id, count } = product;
  const dispatch = useDispatch();
  return (
    <>
      <div className="min-w-[350px] card-horizontal h-fit d-flex shadow text-[var(--text-color-primary)] bg-[#1a1a1a]">
        <div className="card-hori-image-container flex items-center relative">
          <img className="card-image h-[200px] object-contain" src={image} alt="shoes"  />
        </div>
        <div className="card-details d-flex direction-column">
          <div className="card-title">{title?.length > 20 ? title.substring(0 , 20) + '...' : title}</div>
          <div className="card-description">
            <p className="card-des">{category}</p>
            <p className="card-price">$ {price}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="d-flex gap">
              <p className="q-title">Quantity: </p>
              <div className="count-container d-flex align-center gap">
                <button className="count" onClick={()=> count > 1 && dispatch(decreaseProductCount(id))}>-</button>
                <span className="w-[4px]">{count}</span>
                <button className="count" onClick={()=> count < 10  && dispatch(increaseProductCount(id))}>+</button>
              </div>
            </div>
            <p className="card-rating flex items-center">
              <span className="material-icons-outlined text-[orange]">
                star
              </span>{" "}
              {rating.rate}
            </p>
          </div>
          <div className="cta-btn flex gap">
            <div className="cta-btn">
              <button onClick={()=> dispatch(removeFromCart(id))} className="bg-[var(--primary-color)] button hori-btn text-[var(--text-color-primary)] font-bold btn-icon d-flex align-center justify-center gap cursor btn-margin">
                Remove From Cart
              </button>
            </div>
            <div className="cta-btn ">
              <button className=" button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
                Move to ❤️
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalCard;
