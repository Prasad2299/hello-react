import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btn,setBtn] = useState("login")
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="food-logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="btn" onClick={()=>btn === "login" ? setBtn("logout"):setBtn("login")}>{btn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;