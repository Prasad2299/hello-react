import React, { useState } from "react";
import Item from "./Item";

function RestaurantCategory({ data }) {
  const [showItem, setShowItem] = useState(false);
  function handleClick() {
    console.log("clicked!!");
    setShowItem(!showItem)
  }
  // console.log(data)
  return (
    <div>
      {/* header */}
      <div
        className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <Item item={data.itemCards}></Item>}
      </div>
      {/* accordian body */}
      {/* {
        data.itemCards.map((item)=> <ItemList key={item?.card?.info?.id} item={item}></ItemList>)
      } */}
    </div>
  );
}

export default RestaurantCategory;
