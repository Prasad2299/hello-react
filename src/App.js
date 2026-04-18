import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider , Outlet} from "react-router";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";

const AppLayout = () => {
  const [userName,setUserName] = useState("")
  //authentication of user - make an api call to get data
  useEffect(()=>{
    const data = {
      name:'Prasad'
    }
    setUserName(data.name)
  },[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
      <div className="app">
        <Header></Header>
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};


//LAZY LOADING /ON DEMAND LOADING / CODE SPLITING / DYNAMIC LOADING/CHUNKING => same concept different name
const Grocery = lazy(()=>import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>LOADING...</h1>}><Grocery/></Suspense>
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
