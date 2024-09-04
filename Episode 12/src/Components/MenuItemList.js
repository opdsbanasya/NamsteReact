import { useDispatch } from "react-redux";
import { MENU_IMG } from "../utils/constant";
import { addItem } from "../store/cartSlice";

const MenuItemList = ({ itemList }) => {
    // console.log(itemList);
    const dispatch = useDispatch();

    const handleClickItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));
    }

    return (
        <div className="w-full rounded-md px-5">
            {itemList.map(item => (
                <div key={item.card.info.id} className="w-full h-fit flex items-center justify-center py-10 relative border-t-2 mt-5 border-zinc-400 ">
                    <div className="w-9/12">
                        <h2 className="text-lg font-semibold">{item.card.info.name}</h2>
                        <h3 className="text-lg font-semibold"> ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h3>
                        <p className="text-sm">{item.card.info.description}</p>
                    </div>
                    {item.card.info.imageId && (
                        <img src={MENU_IMG + item.card.info.imageId} alt={item.card.info.name} className="h-40 w-3/12 object-cover rounded-md " />
                    )}
                    <button className="absolute right-[4.5rem] bottom-10 px-1 border-2 border-black bg-black text-white font-semibold rounded-lg"
                        onClick={() => { handleClickItem(item) }}
                    >Add +</button>
                </div>
            ))}
        </div>
    );
}

export default MenuItemList;
