import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resName,cuisine,rating,time } = props.resObj;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-logo"
        src={CDN_URL}
      ></img>
      <h3>{resName}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{rating}stars</h4>
      <h4>{time} minutes</h4>
    </div>
  );
};

export default RestaurantCard;