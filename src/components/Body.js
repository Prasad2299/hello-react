import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterListOfRest, setFilterListOfRest] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  console.log("body component rendering");

  const fetchData = async () => {
    // fetch real api
    //swiggy api not working so we use constant data
    // const data = await fetch("https://corsproxy.io/?url="+"https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52&lng=73.85&page_type=DESKTOP_WEB_LISTING");
    // console.log("data",data)
    // const json = await data.json()
    // console.log("jsondaata=>",json)
    // setListOfRest(json?.data)
    setTimeout(() => {
      setListOfRest(restList);
      setFilterListOfRest(restList);
    }, 2000);
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
              rest.resName.toLowerCase().includes(searchText.toLowerCase()),
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
                (rest) => rest.rating > 4,
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
          <Link key={i} to={"/restaurant"+rest.id}><RestaurantCard  resObj={rest} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
