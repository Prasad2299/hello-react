import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) =>{
  const [resInfo,setRestInfo] = useState(null)
  useEffect(()=>{ 
    fetchData()
  },[])

  async function fetchData(){
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5288974&lng=73.8665321&restaurantId={resId}&catalog_qa=undefined&submitAction=ENTER`);
    const json = await data.json()
    setRestInfo(json)
  }
  return resInfo;
}

export default useRestaurantMenu;