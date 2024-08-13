import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestuarentInfo = ()=>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=45977&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();

        console.log(json);
        setResInfo(json)
    }

    if(resInfo === null) return <Shimmer />
    const {name, avgRating, costForTwoMessage, cuisines} = resInfo?.data?.cards[2]?.card?.card?.info;

    const { itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    console.log(itemCards);
    

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
                    return <li>{item?.card?.info?.name} - ₹{item?.card?.info?.price || item?.card?.info?.defaultPrice}</li>
                })}
            </ul>
        </div>
    </div>
}
export default RestuarentInfo;