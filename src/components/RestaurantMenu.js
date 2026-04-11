import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const restInfo = useRestaurantMenu(resId)
  
  console.log("resinfo=>",restInfo)
  if(restInfo === null) {
    console.log("rest",restInfo);
    
    return <ShimmerUi></ShimmerUi>
  }
  return (
    <div className="text-center">
      <h1 className="font-bold my-8 text-2xl">{restInfo[0].info.name}</h1>
      <p className="font-bold text-lg">{restInfo[0].info.cuisines.join(",")} - {restInfo[0].info.costForTwo}</p>
      {/* categories accordian */}
    </div>
  )
}

export default RestaurantMenu;
