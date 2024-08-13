import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constant";

const RestuarentInfo = ()=>{

    const [resInfo, setResInfo] = useState(null);

    const {id} = useParams();
    

    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async ()=>{
        const data = await fetch(API_URL + id);

        const json = await data.json();

        setResInfo(json)
    }

    if(resInfo === null) return <Shimmer />
    const {name, avgRating, costForTwoMessage, cuisines} = resInfo?.data?.cards[2]?.card?.card?.info;

    const { itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card


    return <div>
        <h1>{name}</h1>
        <div>
            <p>{avgRating} - {costForTwoMessage}</p>
            <p>{cuisines.join(", ")}</p>
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