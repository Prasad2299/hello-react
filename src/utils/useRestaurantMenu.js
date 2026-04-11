import { useEffect, useState } from "react";
import restList from "./mockData";

const useRestaurantMenu = (resId) =>{
  const [resInfo,setRestInfo] = useState(null)
  const newRestList = restList[0]?.card.card.gridElements.infoWithStyle.restaurants
  useEffect(()=>{ 
    fetchData()
  },[])

  async function fetchData( ){
    // const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5288974&lng=73.8665321&restaurantId={resId}&catalog_qa=undefined&submitAction=ENTER`);
    // const json = await data.json()
    // setRestInfo(json)
    // setRestInfo(restList)

    console.log("rest.info.id === resId",resId)
    const filterRest = newRestList.filter((rest) => rest.info.id === resId)
    setRestInfo(filterRest)
  }
  return resInfo;
}

export default useRestaurantMenu;