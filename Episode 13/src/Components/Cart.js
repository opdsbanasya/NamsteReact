import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { clearCart } from "../store/cartSlice";
const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="w-full px-10 flex items-center justify-center flex-col">
            <div className="w-[70%] flex justify-between px-10">
                <h1 className="text-3xl font-bold">Cart</h1>
                <button className={`px-2 py-1 bg-red-500 text-white font-semibold rounded-md ${cartItems.length === 0 && "hidden"}`}
                    onClick={()=>{handleClearCart()}}
                >Clear Cart</button>
            </div>
            {cartItems.length === 0 && <h1 className="w-[65%] text-2xl mt-4 pt-4 font-semibold border-t-2 border-t-slate-200 text-center">No Item !</h1>}
            <div className="w-[70%]">
                <MenuItemList itemList={cartItems} btnType={"remove"}/>
            </div>
        </div>
    )
}
export default Cart;