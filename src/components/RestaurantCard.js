import { useContext } from "react";
import { CDN_URL ,REST_IMAGE_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const {loggedInUser} = useContext(UserContext)
  console.log(props)
  const { name,cuisines,avgRating,id,cloudinaryImageId} = props.resObj.info;
  const { deliveryTime} = props.resObj.info.sla;
  return (
    <div className="res-card m-4 p-4 w-[250px] rounded-lg hover:bg-green-200">
      <img className="rounded-lg"
        alt="res-logo"
        src={CDN_URL}
        // src={REST_IMAGE_URL+cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2">{id}</h3>
      <h3 className="font-bold py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLable = (RestaurantCard) =>{
  return (props) =>{
    return <div>
      <label  className="absolute bg-black text-white p-2 m-2 roundd-lg">Promoted</label>
      <RestaurantCard {...props}/>
    </div>
  }
}

export default RestaurantCard;