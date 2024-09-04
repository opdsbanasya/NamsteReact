import { useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    
    return (
        <div className="w-full px-10 flex items-center justify-center flex-col">
            <h1 className="text-3xl font-bold">Cart</h1>
            <div className="w-[70%]">
                <MenuItemList itemList={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;