import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { MENU_IMG } from "../utils/constant.js";

const RestuarentInfo = () => {

    const {id} = useParams();
    
    const resMenuInfo = useRestaurentMenu(id);
    

    if(resMenuInfo === null) return <Shimmer />
    const {name, avgRating, costForTwoMessage, cuisines, sla, areaName
    } = resMenuInfo?.data?.cards[2]?.card?.card?.info;

    const { itemCards} = resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card


    return <div className="res-menu w-full h-full px-[10vw] py-[0.5vw] flex items-center flex-col justify-center">
        <h2 className="text-xl font-semibold text-left w-[70%] mb-[10]">{name}</h2>
        <div className="res-menu-about w-[70%] h-[10%] bg-blue-50 px-16 py-5">
            <section className="res-menu-about-left">
                <p className="font-semibold text-lg">{cuisines.join(", ")}</p>
                <p className="flex gap-2 items-center"><span className="starIcon text-yellow-500 text-lg leading-4">★</span>{avgRating} • {costForTwoMessage}</p>
                <p className="delivery-time">{sla?.slaString} • {areaName} • {sla?.lastMileTravelString}</p>
            </section>
        </div>
        <div className="menu w-[70%] py-[2vw] space-y-4">
            <h3 className="text-xl font-bold">Menu Items</h3>
            <div className="menu-item-box w-full space-y-5">
                {itemCards.map(item => {
                    return <div className="menu-item w-full h-[25vh] flex items-center justify-between shadow-md rounded-md overflow-hidden p-5 " key={item?.card?.info?.id}>
                        <ul>
                            <li>{item?.card?.info?.name}</li>
                            <li>₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>
                        </ul>
                        <img className="h-full object-cover aspect-[5/4]" src={MENU_IMG + item?.card?.info?.imageId} />
                    </div>
                })}
            </div>
        </div>
    </div>
}
export default RestuarentInfo;