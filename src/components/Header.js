import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn,setBtn] = useState("login")
  const onlineStatus = useOnlineStatus()
  console.log("header component rendering")
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
          <li>{onlineStatus ? <h2>Online</h2>:<h2>offline</h2>}</li>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}> About Us </Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li>Cart</li>
          <button className="btn" onClick={()=>btn === "login" ? setBtn("logout"):setBtn("login")}>{btn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;