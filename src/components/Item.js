import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const Item = ({ item }) => {
  const dispatch = useDispatch()
  function handleAddBtn(){
    //Dispatch an action 
    dispatch(addItem("pizza"))
  }
  console.log("item=>", item);
  return (
    <div>
      {item.map((i) => (
        <div
          key={i.card.info.id}
          className="p-2 m-2 text-left border-gray-200 border-b-2 flex justify-between"
        >
          {/* src={CDN_URL + i.card.info.imageId} not working */}
          <div className="w-9/12">
            {" "}
            <div className="py-2">
              <span>{i.card.info.name}</span>
              <span> - ₹ {i.card.info.price / 100}</span>
              <p className="text-xs">{i.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              {" "}
              <button onClick={handleAddBtn} className=" bg-black text-white p-2 rounded-lg mx-10">
                Add +
              </button>
            </div>
            <img src={CDN_URL} className="h-[100px]"></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
