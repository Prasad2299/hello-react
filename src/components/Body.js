import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRest,setListOfRest] = useState(resList)
  return (
    <div className="body">
      <div className="search">
        <button onClick={() => {
          const filterListOfRest = listOfRest.filter((rest)=> rest.rating > 4)
          console.log("filterListOfRest",filterListOfRest)
          setListOfRest(filterListOfRest)
        }}>CLICK TO GET MOST RATING HOTEL</button>
      </div>
      <div className="res-container">
        {
          listOfRest.map((rest,i) => 
            <RestaurantCard key={i} resObj = {rest} />
          )
        }

      </div>
    </div>
  );
};

export default Body;