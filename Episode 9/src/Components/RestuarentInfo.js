import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { MENU_IMG } from "../utils/constant.js";

const RestuarentInfo = () => {

    const {id} = useParams();
    
    const resMenuInfo = useRestaurentMenu(id);
    console.log(resMenuInfo);
    

    if(resMenuInfo === null) return <Shimmer />
    const {name, avgRating, costForTwoMessage, cuisines, sla, areaName
    } = resMenuInfo?.data?.cards[2]?.card?.card?.info;

    const { itemCards} = resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card


    return <div className="res-menu">
        <h2>{name}</h2>
        <div className="res-menu-about">
            <section className="res-menu-about-left">
                <p><span className="starIcon">★</span>{avgRating} • {costForTwoMessage}</p>
                <p>{cuisines.join(", ")}</p>
                <p className="delivery-time">{sla?.slaString} • {areaName} • {sla?.lastMileTravelString}</p>
            </section>
        </div>
        <div className="menu">
            <h3>Menu Items</h3>
            <div className="menu-item-box">
                {itemCards.map(item => {
                    return <div className="menu-item" key={item?.card?.info?.id}>
                        <ul>
                            <li>{item?.card?.info?.name}</li>
                            <li>₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>
                        </ul>
                        <img src={MENU_IMG + item?.card?.info?.imageId} />
                    </div>
                })}
            </div>
        </div>
    </div>
}
export default RestuarentInfo;