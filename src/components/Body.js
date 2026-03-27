import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {


  return (
    <div className="body">
      <div className="search">SEARCH</div>
      <div className="res-container">
        {
          resList.map((rest,i) => <RestaurantCard key={i} resObj = {rest} />)
        }
      </div>
    </div>
  );
};

export default Body;