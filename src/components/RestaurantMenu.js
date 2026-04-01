import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const restInfo = useRestaurantMenu(resId)
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
