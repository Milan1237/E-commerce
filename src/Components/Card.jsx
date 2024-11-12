import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../slices/ProudctSlice";

const Card = ({product}) => {
     const dispatch = useDispatch();
     const {cart} = useSelector(state=>state.product);
     console.log(product);
     const { image, title, price, category, rating } = product ; 
     
  return (
    <div className="card card-vertical d-flex direction-column relative bg-[#1a1a1a] text-[var(--text-color-primary)]">
      <div className="card-image-container relative flex justify-center">
        <img className="card-image object-contain h-[250px]" src={image} alt="card" />
      </div>
      <div className="card-details">
        <div className="card-title">
          {title?.length > 20 ? title.substring(0, 20) + "..." : title}
        </div>
        <div className="card-description">
          <p className="card-des">{category}</p>
          <div className="flex justify-between">
            <p className="card-price">$ {price}</p>
            <p className="card-rating flex items-center">
              {" "}
              <span class="material-icons-outlined text-[orange]">star</span> {rating.rate}
            </p>
          </div>
        </div>
        <div className="cta-btn">
          <button onClick={()=> dispatch(setCart())} className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
