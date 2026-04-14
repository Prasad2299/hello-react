import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) =>{
  const [resInfo,setRestInfo] = useState(null)
  useEffect(()=>{ 
    fetchData()
  },[])

  async function fetchData( ){
    // const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5288974&lng=73.8665321&restaurantId={resId}&catalog_qa=undefined&submitAction=ENTER`);
    console.log("rest.info.id === resId before",resInfo)

    const resData = await fetch(`http://localhost:3000/swiggy/restaurant/21001/menu`)
    const json = await resData.json()
    setRestInfo(json.data)
 }
  return resInfo;
}

export default useRestaurantMenu;