import React, { useEffect } from "react";
import {Link, useNavigate } from "react-router-dom";
import { getProducts } from "../api/getProducts";
import { useDispatch } from "react-redux";
import { setProducts } from "../slices/ProudctSlice";
import { getCategories } from "../api/getProducts";
import { setSelectedCategory, setCategories, setAllProducts } from "../slices/ProudctSlice";
import authService from "../appwrite/authService";
import { LogIn, setUserData } from "../slices/AuthSlice";
import all from "../assets/CategoryImages/all.jpeg";
import men from "../assets/CategoryImages/men'sClothing.jpg";
import women from "../assets/CategoryImages/women'sClothing.jpg";
import electronic from "../assets/CategoryImages/electronics.jpeg";
import jwellery from "../assets/CategoryImages/jwellery.jpg";
import banner from '../assets/bannerImage/banner.jpg'

const homeCategory = [
  { id: 1, value: "all", category: `All`, image: all },
  { id: 2, value: "men's clothing", category: `Men's Clothing`, image: men },
  {
    id: 3,
    value: "women's clothing",
    category: `Women's Clothing`,
    image: women,
  },
  { id: 4, value: "jewelery", category: `Jwellery`, image: jwellery },
  { id: 5, value: "electronics", category: `Electronics`, image: electronic },
];

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleCategoryClick(value) {
    dispatch(setSelectedCategory(value));
    navigate('/products');
  }
  useEffect(() => {
    (async () => {
      const [data, category, user] = await Promise.all([
        getProducts(),
        getCategories(),
        authService.getCurrentAccount(),
      ]);
      if (user) {
        dispatch(LogIn());
        dispatch(setUserData(user));
      }
      dispatch(setProducts(data));
      dispatch(setAllProducts(data));
      dispatch(setCategories(category));
    })();
  }, []);
  return (
    <>

      <div
        id="categories"
        className=" flex flex-wrap  gap-4 p-4 margin-auto justify-center"
      >
        {homeCategory.map(({ image, id, category , value }) => (
          <div
            key={id}
            className="relative cursor-pointer"
            onClick={() => handleCategoryClick(value)}
          >
            <img
              className=" h-[200px] rounded-md object-contain"
              src={image}
              alt={category}
            />
            <h1 className="whitespace-nowrap absolute bottom-4 rounded-lg -translate-x-1/2 left-1/2 w-fit bg-white leading-none px-4 py-4 ">
              {category}
            </h1>
          </div>
        ))}
      </div>

      {/* banner image */}
      <Link to={'/products'} id="bannerImage" className="m-auto">
        <img src={banner} alt="banner" />
      </Link>
    </>
  );
};

export default Home;
