import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestuarentInfo = () => {

    const {id} = useParams();
    
    const resMenuInfo = useRestaurentMenu(id);

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
            <ul>
                {itemCards.map(item => {
                    return <li key={item?.card?.info?.id}>{item?.card?.info?.name} - ₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>
                })}
            </ul>
        </div>
    </div>
}
export default RestuarentInfo;