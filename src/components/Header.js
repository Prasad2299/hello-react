import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn,setBtn] = useState("login")
  const onlineStatus = useOnlineStatus()
  console.log("header component rendering")
  return (
    <div className="header h-40 flex justify-between bg-pink-300 shadow-xl">
      <div className="logo-container w-40">
        <img
          className="logo"
          src={LOGO_URL}
          alt="food-logo"
        ></img>
      </div>
      <div className="nav-items p-10 items-center">
        <ul className="flex items-center p-8">
          <li className="mx-4">{onlineStatus ? <h2>Online</h2>:<h2>offline</h2>}</li>
          <li className="mx-4"><Link to={"/"}>Home</Link></li>
          <li className="mx-4"><Link to={"/about"}> About Us </Link></li>
          <li className="mx-4"><Link to={"/contact"}>Contact Us</Link></li>
          <li className="mx-4"><Link to={"/grocery"}>Grocery</Link></li>
          <li className="mx-4">Cart</li>
          <button className="btn" onClick={()=>btn === "login" ? setBtn("logout"):setBtn("login")}>{btn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;