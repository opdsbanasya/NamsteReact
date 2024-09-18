import { useDispatch } from "react-redux";
import { MENU_IMG } from "../utils/constant";
import { addItem, removeItem } from "../store/cartSlice";

const MenuItemList = ({ itemList, btnType }) => {
    console.log(btnType);
    const dispatch = useDispatch();

    const handleClickItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));
    }
    const handleRemoveItem = (index) => {
        console.log(`${index} was removed`);
        dispatch(removeItem(index));
    }

    return (
        <div className="w-full rounded-md px-5">
            {itemList.map((item, index) => (
                <div data-testid="foodItems" key={item.card.info.id} className="w-full h-fit flex items-center justify-center py-10 relative border-t-2 mt-5 border-zinc-400 ">
                    <div className="w-9/12">
                        <h2 className="text-lg font-semibold">{item.card.info.name}</h2>
                        <h3 className="text-lg font-semibold"> ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h3>
                        <p className="text-sm w-[95%] text-justify">{item.card.info.description}</p>
                    </div>
                    {item.card.info.imageId && (
                        <img src={MENU_IMG + item.card.info.imageId} alt={item.card.info.name} className="h-40 w-3/12 object-cover rounded-md " />
                    )}
                    {btnType === "add" ? (
                        <button className="absolute right-[4.5rem] bottom-10 px-1 bg-slate-600 text-white font-semibold rounded-lg"
                        onClick={() => { handleClickItem(item) }}
                    >Add +</button>
                ) : (
                    <button className="absolute right-[4.5rem] bottom-11 px-1  bg-red-600 text-white font-semibold rounded-lg"
                    onClick={() => { handleRemoveItem(index) }}
                    >Remove</button>
                )}
                    
                </div>
            ))}
        </div>
    );
}

export default MenuItemList;
