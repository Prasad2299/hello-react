import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
  const [onlineStatus,setOnlineStatus] = useState(true);

  useEffect(() => {
    console.log("inside useffect of onlinestatus")
    window.addEventListener("offline", () => {
      console.log("inside evenetlistener offline of onlinestatus")
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      console.log("inside evenetlistener online of onlinestatus")
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
}

export default useOnlineStatus;