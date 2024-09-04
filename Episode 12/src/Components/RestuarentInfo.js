import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentInfoCategory from "./RestaurentInfoCategory.js";
import { useState } from "react";

const RestuarentInfo = () => {

    const {id} = useParams();
    
    const resMenuInfo = useRestaurentMenu(id);
    
    const [showItems, setShowItems] = useState(null);

    const [toggle, setToggle] = useState(false);

    if(resMenuInfo === null) return <Shimmer />
    const {name, avgRating, costForTwoMessage, cuisines, sla, areaName
    } = resMenuInfo?.data?.cards[2]?.card?.card?.info;

    const { itemCards} = resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    
    const menuCategories = resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category => (
        category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ));

    return <div className="res-menu w-full h-full px-[10vw] py-[0.5vw] flex items-center flex-col justify-center">
        <h2 className="text-xl font-semibold text-left w-[70%] mb-[10]">{name}</h2>
        <div className="res-menu-about w-[70%] h-[10%] bg-blue-50 px-16 py-5">
            <section className="res-menu-about-left">
                <p className="font-semibold text-lg">{cuisines.join(", ")}</p>
                <p className="flex gap-2 items-center"><span className="starIcon text-yellow-500 text-lg leading-4">★</span>{avgRating} • {costForTwoMessage}</p>
                <p className="delivery-time">{sla?.slaString} • {areaName} • {sla?.lastMileTravelString}</p>
            </section>
        </div>
        <div className="menu w-[70%] py-[2vw] space-y-8">
            {menuCategories.map((menuCategory, index) => (
                <RestaurentInfoCategory key={index} 
                data={menuCategory?.card?.card}
                showItems={showItems == index ? true : false}
                setShowItems={()=>setShowItems(index)}
                toggle={toggle}
                setToggle={()=>setToggle(!toggle)}
                />
            ))}
        </div>
    </div>
}
export default RestuarentInfo;