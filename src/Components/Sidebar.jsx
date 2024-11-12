import React from "react";

const Sidebar = () => {
  return (
    <aside className="fixed top-14 border-[#333333] border-r-2 text-[var(--text-color-primary)] bg-[#1a1a1a] py-2 px-6 w-fit"  >
      {/* price Section */}
      <div>
        <h1 className="text-2xl ">Price</h1>
        <div id="price">
          <div className=" flex justify-between w-[200px] text-[var(--text-color-primary)]">
            <span>$10</span>
            <span>$40</span>
            <span>$70</span>
            <span>$100</span>
          </div>
          <input
            type="range"
            min={10}
            defaultValue={100}
            max={100}
            step={30}
            className="w-[200px]"
            name="range"
          />
        </div>
        {/* Category section */}
        <h1 className="text-2xl">Categories</h1>
        <div id="Category" className=" flex flex-col">
            <label htmlFor="all" className="flex gap-4 py-1">
                <input type="radio" name="category" id="all" className="w-[15px]" />
                all
            </label>
            <label htmlFor="male" className="flex gap-4 py-2">
                <input type="radio" name="category" id="male" className="w-[15px]" />
                male
            </label>
            <label htmlFor="female" className="flex gap-4 py-2">
                <input type="radio" name="category" id="female" className="w-[15px]"  />
                female
            </label>
            <label htmlFor="boys" className="flex gap-4 py-2">
                <input type="radio" name="category" id="boys" className="w-[15px]" />
                boys
            </label>
            <label htmlFor="girls" className="flex gap-4 py-2">
                <input type="radio" name="category" id="girls" className="w-[15px]" />
                girls
            </label>
        </div>

        {/* sort by */}
        <h1 className="text-2xl">Sort By</h1>
        <div id="sortBy" className=" flex flex-col">
            <label htmlFor="high-to-low" className="flex gap-4 py-1">
                <input type="radio" name="sortBy" id="high-to-low" className="w-[15px]" />
               price-high to low
            </label>
            <label htmlFor="low-to-high" className="flex gap-4 py-2">
                <input type="radio" name="sortBy" id="low-to-high" className="w-[15px]" />
                price-low to hight
            </label>
        </div>
      </div>

      {/* rating */}
      <h1 className="text-2xl">Rating</h1>
      <div id="sortBy" className=" flex flex-col">
            <label htmlFor="four" className="flex gap-4 py-1">
                <input type="radio" name="rating" id="four" className="w-[15px]" />
               4 stars and above
            </label>
            <label htmlFor="three" className="flex gap-4 py-2">
                <input type="radio" name="rating" id="three" className="w-[15px]" />
                3 stars and above
            </label>
            <label htmlFor="two" className="flex gap-4 py-2">
                <input type="radio" name="rating" id="two" className="w-[15px]" />
                2 stars and above
            </label>
            <label htmlFor="one" className="flex gap-4 py-2">
                <input type="radio" name="rating" id="one" className="w-[15px]" />
                1 stars and above
            </label>
        </div>
    </aside>
  );
};

export default Sidebar;
