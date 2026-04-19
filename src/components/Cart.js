import { clearCart } from "../utils/cartSlice.js";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()
  console.log("cart item inside cart", cart);

  function handleClearCart(){
    dispatch(clearCart())
  }
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold">CART</h1>
      <div className="w-6/12 mx-auto">
        <button onClick={handleClearCart} className="text-white bg-black p-2 m-2 rounded-2xl">Clear Cart</button>
        <Item item={cart}></Item>
      </div>
    </div>
  );
};

export default Cart;
