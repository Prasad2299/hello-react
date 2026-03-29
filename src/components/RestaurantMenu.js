import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";

 
const RestaurantMenu = () => {
  const [restInfo,setRestInfo] = useState(null)
  useEffect(()=>{
      fetchMenu()
  },[])

  const fetchMenu = async () =>{
        let data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5288974&lng=73.8665321&restaurantId=39942&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json()
        console.log(json);
        setRestInfo(json.data)
  }
  if(restInfo === null) {
    console.log("rest",restInfo);
    
    return <ShimmerUi></ShimmerUi>
  }
  return (
    <div>
      <h1>Name of Hotel</h1>
      <h2>Menu</h2>
    </div>
  )
}

export default RestaurantMenu;
