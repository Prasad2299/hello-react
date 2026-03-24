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
const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)