import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn,setBtn] = useState("login")
  const onlineStatus = useOnlineStatus()
  const {loggedInUser} = useContext(UserContext)
  console.log("data from context=>",loggedInUser)
  
  //sucbscribing the store using selector hook

  const cart =  useSelector((store) => store.cart.items)
  console.log("Cart",cart)

  console.log("header component rendering")
  return (
    <div className="header h-40 flex justify-between bg-pink-300 shadow-xl sm:bg-blue-300">
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
          <li className="mx-4 font-bold text-xl">Cart - ({cart.length} items)</li>
          <button className="btn" onClick={()=>btn === "login" ? setBtn("logout"):setBtn("login")}>{btn}</button>
          <li className="mx-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;