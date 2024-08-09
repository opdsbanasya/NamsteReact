import RestruatantCard from "./RestruatantCard";
import resData from "../utils/mockData";
import { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";

const Body = () => {

    const [restaurant, setRestaurant] = useState(resData);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=26.9124336&lng=75.7872709");

        const json = await data.json();

        console.log(json);
        
        setRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        
    }

    // conditional rendering
    if(restaurant.length === 0){
        return <Shimmer />
    }
    return <div id="body">
        <div id="top-rated">
            <button onClick={() => {
                const filterRestaurent = restaurant.filter(res => res.info.avgRating > 4.1);
                setRestaurant(filterRestaurent);
            }}>Top Rated Restaurants</button>
        </div>
        <div id="res-container">
            {restaurant.map(resuarant => (
                <RestruatantCard key={resuarant?.info?.id} resCardInfo={resuarant} />
            ))}
        </div>
    </div>
}

export default Body;