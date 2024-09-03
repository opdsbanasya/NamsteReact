import { useState, useEffect } from "react";

const useResData = (RES_LIST_API)=>{

    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch(RES_LIST_API);

        const json = await data.json()
        
        setRestaurantData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return restaurantData;
}

export default useResData;