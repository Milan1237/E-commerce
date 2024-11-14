import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setSelectedCategory } from "../slices/ProudctSlice";
import {
  filterProductByCategory,
  filterProductByRating,
  filterProductByBudget,
  sortProducts,
} from "../utils/filterFunctions";
import { localFilterReducer } from "../utils/localFilterReducer";

const initialFilterState = {
  rating: 1,
  sortOption: "null",
  budgetRange: 1000,
};

//rating filter
const filtersByRating = [
  "4 and above",
  "3 and above",
  "2 and above",
  "1 and above",
];

const Sidebar = () => {
  const { categories, selectedCategory, allProducts } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const [{ rating, sortOption, budgetRange }, sendToLocalFilterState] =
    useReducer(localFilterReducer, initialFilterState);

  const handleSidbarFilters = ({
    category = selectedCategory,
    rate = rating,
    sort = sortOption,
    budget = budgetRange,
  }) => {
    const products = category
      ? filterProductByCategory({ category, allProducts })
      : allProducts;
    const filterAfterRating = rate
      ? filterProductByRating({ rate, allProducts: products })
      : products;

    const filterAfterBudget = budget
      ? filterProductByBudget({ budget, allproducts: filterAfterRating })
      : filterAfterRating;

    const productsAfterSorting = sort ? sortProducts({sort , allProducts: filterAfterBudget }) : filterAfterBudget ; 

    dispatch(setProducts(productsAfterSorting));
  };

  return (
    <aside className="fixed overflow-y-scroll top-[3.75rem] z-10 border-[#333333] border-r-2 text-[var(--text-color-primary)] bg-[#1a1a1a] h-[calc(100vh-3.75rem)] py-2 px-6 w-fit">
      {/* price Section */}
      <div>
        <h1 className="text-2xl ">Price</h1>
        <div id="price">
          <div className=" flex justify-between w-[200px] text-[var(--text-color-primary)]">
            <span>$100</span>
            <span>$400</span>
            <span>$700</span>
            <span>$1000</span>
          </div>
          <input
            type="range"
            min={100}
            value={budgetRange}
            onChange={(event) => {
              sendToLocalFilterState({
                type: "BudgetChange",
                payload: event.target.value,
              });
              handleSidbarFilters({ budget: event.target.value });
            }}
            max={1000}
            step={300}
            className="w-[200px]"
            name="range"
          />
        </div>
        {/* Category section */}
        <h1 className="text-2xl">Categories</h1>
        <div id="Category" className=" flex flex-col">
          {categories.map((category, index) => (
            <label key={index} htmlFor={category} className="flex gap-4 py-1">
              <input
                type="radio"
                name="category"
                id={category}
                className="w-[15px]"
                checked={selectedCategory === category}
                onChange={() => {
                  dispatch(setSelectedCategory(category));
                  handleSidbarFilters({ category });
                }}
              />
              {category}
            </label>
          ))}
        </div>

        {/* sort by */}
        <h1 className="text-2xl">Sort By</h1>
        <div id="sortBy" className=" flex flex-col">
          <label htmlFor="high-to-low" className="flex gap-4 py-1">
            <input
              type="radio"
              name="sortBy"
              value={"high"}
              checked={sortOption == "high"}
              onChange={(event) => {
                sendToLocalFilterState({
                  type: "Sorting",
                  payload: event.target.value,
                });
                handleSidbarFilters({ sort: event.target.value });
              }}
              id="high-to-low"
              className="w-[15px]"
            />
            price-high to low
          </label>
          <label htmlFor="low-to-high" className="flex gap-4 py-2">
            <input
              type="radio"
              name="sortBy"
              value={"low"}
              onChange={(event) => {
                sendToLocalFilterState({
                  type: "Sorting",
                  payload: event.target.value,
                });
                handleSidbarFilters({ sort: event.target.value });
              }}
              checked={sortOption == "low"}
              id="low-to-high"
              className="w-[15px]"
            />
            price-low to hight
          </label>
        </div>
      </div>

      {/* rating */}
      <h1 className="text-2xl">Rating</h1>
      <div id="sortBy" className=" flex flex-col">
        {filtersByRating.map((filter, index) => (
          <label
            htmlFor={filtersByRating.length - index}
            className="flex gap-4 py-1"
            key={index}
          >
            <input
              type="radio"
              checked={rating == filtersByRating.length - index}
              name="rating"
              value={filtersByRating.length - index}
              onChange={(event) => {
                sendToLocalFilterState({
                  type: "rating",
                  payload: event.target.value,
                });
                handleSidbarFilters({ rate: event.target.value });
              }}
              id={filtersByRating.length - index}
              className="w-[15px]"
            />
            {filter}
          </label>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
