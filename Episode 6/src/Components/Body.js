import RestruatantCard from "./RestruatantCard";
import resData from "../utils/mockData";
import { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";

const Body = () => {

    const [restaurant, setRestaurant] = useState(resData);
    const [filterRestaurent, setFilterRestaurent] = useState([])

    const [searchData, setSearchData] = useState("");

    useEffect(() => {
        fetchData();
        setFilterRestaurent(resData)
    }, [])

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=26.9124336&lng=75.7872709");

        const json = await data.json();

        console.log(json);

        setRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestaurent(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)

    }

    // conditional rendering
    return <div id="body">
        <div id="top-rated">
            <div className="input-box">
                <input
                    type="text"
                    value={searchData}
                    onChange={(e) => {
                        setSearchData(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        const filterData = restaurant.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchData.toLowerCase());
                        })

                        setFilterRestaurent(filterData);

                    }}
                >Search</button>
            </div>
            <button onClick={() => {
                const filterRestaurent = restaurant.filter(res => res.info.avgRating > 4.1);
                setFilterRestaurent(filterRestaurent);
            }}>Top Rated Restaurants</button>
        </div>
        {filterRestaurent.length === 0 ? <Shimmer /> : <div id="res-container">
            {filterRestaurent.map(resuarant => (
                <RestruatantCard key={resuarant?.info?.id} resCardInfo={resuarant} />
            ))}
        </div>}
    </div>
}

export default Body;