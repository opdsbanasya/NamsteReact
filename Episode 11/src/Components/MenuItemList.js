import { MENU_IMG } from "../utils/constant";

const MenuItemList = ({itemList}) => {
    console.log(itemList);
    
    return (
        <div className="w-full rounded-md space-y-6">
            {itemList.map(item => (
                <div key={item.card.info.id} className="w-full h-fit  bg-zinc-100 flex items-center p-5 rounded-md relative">
                    <div className="w-9/12">
                        <h2 className="text-lg font-semibold">{item.card.info.name}</h2>
                        <h3 className="text-lg font-semibold"> ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</h3>
                        <p className="text-sm">{item.card.info.description}</p>
                    </div>
                    {item.card.info.imageId && (
                        <img src={MENU_IMG + item.card.info.imageId} alt={item.card.info.name} className="h-40 w-3/12 object-cover rounded-md " />
                    )}
                    <button className="absolute right-[5.5rem] bottom-4 px-1 border-2 border-black hover:bg-black hover:text-white font-bold rounded-lg">Add</button>

                    
                </div>
            ))}
        </div>
    );
}

export default MenuItemList;
