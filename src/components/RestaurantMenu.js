import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);
  console.log("resinfo=>", restInfo?.cards[2]?.card?.card?.info?.name);
  console.log("resinfo=>", restInfo?.cards[2]?.card?.card?.info?.cuisines);
  console.log(
    "resinfo=>",
    restInfo?.cards[2]?.card?.card?.info?.costForTwoMessage,
  );

  // const {name} = restInfo?.cards[2]?.card?.card?.info
  // console.log("restaurantnaem",name)
  // const {itemCards} =  restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card
  // console.log("itemCart=>",itemCards)
  const categories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  console.log("categories", categories);
  if (restInfo === null) {
    console.log("rest", restInfo);

    return <ShimmerUi></ShimmerUi>;
  }
  return (
    <div className="text-center">
      <h1 className="font-bold my-8 text-2xl">
        {restInfo?.cards[2]?.card?.card?.info?.name}
      </h1>
      <p className="font-bold text-lg">
        {restInfo?.cards[2]?.card?.card?.info?.cuisines.join(",")} -{" "}
        {restInfo?.cards[2]?.card?.card?.info?.costForTwo / 100}
      </p>

      {/* categories accordian */}
      {categories.map((category, i) => (
        // RestaurantCategory is now controlled component before it was not
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItem = {i === 1 ? true :false}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
