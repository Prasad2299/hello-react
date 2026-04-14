import RestaurantCard ,{withPromotedLable} from "./RestaurantCard";
import restList from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterListOfRest, setFilterListOfRest] = useState([]);
  const RestaurantCardPromoted = withPromotedLable(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);



  const fetchData = async () => {
    // fetch real api
    //swiggy api not working so we use constant data

    const data = await fetch("http://localhost:3000/swiggy/restaurant/lists");
    console.log("data",data)
    const json = await data.json()
    console.log("jsondaata=>",json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    const restListData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setListOfRest(restListData)
    setFilterListOfRest(restListData)
    // const newRestList = restList[0]?.card.card.gridElements.infoWithStyle.restaurants
    // console.log("body component rendering",restList[0]?.card.card.gridElements.infoWithStyle.restaurants);
    // setTimeout(() => {
    //   //it implement to show shimmer effect
    //   setListOfRest(newRestList);
    //   setFilterListOfRest(newRestList);
    // }, 2000);
    // console.log(restList?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // const restData = restList?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // setListOfRest(restData)
  };

  //conditional rendering

  // if(listOfRest.length === 0){
  //   console.log("shimer")
  //   return <ShimmerUi></ShimmerUi>
  // }
  return listOfRest.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="filter m-4 flex">
        <input
          type="text"
          className="border border-solid border-black mx-4 my-1"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(searchText);
          }}
        ></input>
        <button className="bg-green-400 px-4 mx-4 rounded-lg"
          onClick={() => {
            const filterRest = listOfRest.filter((rest) =>
              rest.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            console.log(filterRest);
            setFilterListOfRest(filterRest)
          }}
        >
          SEARCH
        </button>
        <div className="bg-gray-300 px-4 mx-4 rounded-lg items-center">
          <button className="p-2"
            onClick={() => {
              const filterListOfRest = listOfRest.filter(
                (rest) => rest.info.avgRating > 4,
              );
              console.log("filterListOfRest", filterListOfRest);
              setFilterListOfRest(filterListOfRest);
            }}
          >
            TOP RATING HOTEL
          </button>
        </div>
      </div>

      <div className="p-[5px] flex flex-wrap">
        {filterListOfRest.map((rest, i) => (
          
          <Link key={rest.info.id} to={"/restaurant/"+rest.info.id}>{
            rest?.info?.promoted ? <RestaurantCardPromoted resObj={rest}/> :<RestaurantCard  resObj={rest} />
          }</Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
