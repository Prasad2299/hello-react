import React from "react";
import ReactDOM from "react-dom/client";





const Header = () => {
  return <div className="header">
    <div className="logo-container"> 
      <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dTxNR_0zHhTPOuAwTwub2XlttD4xLAP9mw&s" alt="food-logo"></img>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
}

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img alt="res-logo" src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/12/19/8a3cdbf9-91e7-43b1-89a7-c90444fee7ac_image3a8aaa2225c674637a5083fc6e59d66d7.JPG"></img>
      <h3>Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">SEARCH</div>
      <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)