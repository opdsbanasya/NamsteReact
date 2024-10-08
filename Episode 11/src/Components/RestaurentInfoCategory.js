import { useState } from "react";
import MenuItemList from "./MenuItemList";

const RestaurentInfoCategory = ({data, showItems, setShowItems}) => {
    // console.log(data);

    const handleClick = () => {
        setShowItems();
    }
    
    return (
        <section className="w-full bg-zinc-100 rounded-md">
            <div onClick={handleClick} className="cursor-pointer w-full flex justify-between items-center gap-5 px-5 py-3 rounded-md  mb-2">
                <h2 className="text-xl font-bold">{data?.title} ({data?.itemCards.length})</h2>
                <h4 className={`text-xl font-bold ${showItems && "rotate-180"}`}>⬇️</h4>
            </div>
            
            {showItems && <MenuItemList itemList={data.itemCards}/>}
        </section>
    );
}

export default RestaurentInfoCategory;
