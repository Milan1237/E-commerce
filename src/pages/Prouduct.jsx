import React, { useRef } from "react";
import { useEffect } from "react";
import { getProducts } from "../api/getProducts";
import Card from "../Components/Card";
import Sidebar from "../Components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setCategories,
  setAllProducts,
} from "../slices/ProudctSlice";
import { getCategories } from "../api/getProducts";

const Prouduct = () => {
  const { products: product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length === 0) {
      (async () => {
        const [data, category] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);
        // const data = await getProducts();
        // const category = await getCategories();
        dispatch(setProducts(data));
        dispatch(setAllProducts(data));
        dispatch(setCategories(category));
      })();
    }
  }, []);
  return (
    <>
      <Sidebar />
      {/* products part starts here */}
      <div className="flex flex-wrap gap-4 ml-[280px]">
        {product.map((pro, index) => (
          <Card key={index} product={pro} />
        ))}
      </div>
      {/* products part ends here */}
    </>
  );
};

export default Prouduct;
