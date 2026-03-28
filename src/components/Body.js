import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  const [listOfRest,setListOfRest] = useState([])
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async() =>{
    //fetch real api
    // const data = await fetch("https://foodbukka.herokuapp.com/api/v1/menu");
    // console.log("data",data)
    // const json = await data.json()
    // setListOfRest(json?.data)
    setTimeout(()=>{
      setListOfRest(resList)
    },2000)
  }

  //conditional rendering

  // if(listOfRest.length === 0){
  //   console.log("shimer")
  //   return <ShimmerUi></ShimmerUi>
  // }
  return listOfRest.length === 0 ? <ShimmerUi/> : (
    <div className="body">
      <div className="search">
        <button onClick={() => {
          const filterListOfRest = listOfRest.filter((rest)=> rest.rating > 4)
          console.log("filterListOfRest",filterListOfRest)
          setListOfRest(filterListOfRest)
        }}>CLICK TO GET MOST RATING HOTEL</button>
      </div>
      <div className="res-container">
        {
          listOfRest.map((rest,i) => 
            <RestaurantCard key={i} resObj = {rest} />
          )
        }

      </div>
    </div>
  );
};

export default Body;