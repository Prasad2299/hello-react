import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
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
    //fetch real api
    // const data = await fetch("https://foodbukka.herokuapp.com/api/v1/menu");
    // console.log("data",data)
    // const json = await data.json()
    // setListOfRest(json?.data)
    setTimeout(() => {
      setListOfRest(resList);
      setFilterListOfRest(resList);
    }, 2000);
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
      <div className="filter">
        <input
          type="text"
          className="search-bar"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(searchText);
          }}
        ></input>
        <button
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
        <div className="search">
          <button
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

      <div className="res-container">
        {filterListOfRest.map((rest, i) => (
          <Link key={i} to={"/restaurant"+rest.id}><RestaurantCard  resObj={rest} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
