import { MENU_IMG } from "../utils/constant";

const MenuItemList = ({itemList}) => {
    // console.log(itemList);
    
    return (
        <div className="w-full rounded-md px-5">
            {itemList.map(item => (
                <div key={item.card.info.id} className="w-full h-fit  flex items-center   py-10 relative border-b-2 border-zinc-400 ">
                    <div className="w-9/12">
                        <h2 className="text-lg font-semibold">{item.card.info.name}</h2>
                        <h3 className="text-lg font-semibold"> ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</h3>
                        <p className="text-sm">{item.card.info.description}</p>
                    </div>
                    {item.card.info.imageId && (
                        <img src={MENU_IMG + item.card.info.imageId} alt={item.card.info.name} className="h-40 w-3/12 object-cover rounded-md " />
                    )}
                    <button className="absolute right-[4.5rem] bottom-10 px-1 border-2 border-black bg-black text-white font-semibold rounded-lg">Add +</button>

                    
                </div>
            ))}
        </div>
    );
}

export default MenuItemList;
