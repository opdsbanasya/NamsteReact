import RestruatantCard from "./RestruatantCard";
import { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";

const Body = () => {

    const [restaurant, setRestaurant] = useState([]);
    const [filterRestaurent, setFilterRestaurent] = useState([])

    const [searchData, setSearchData] = useState("");

    useEffect(() => {
        fetchData();
        setFilterRestaurent(restaurant)
    }, [])

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        setFilterRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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
                const filterRestaurent = restaurant.filter(res => res.info.avgRating > 4.4);
                setFilterRestaurent(filterRestaurent);
            }}>Top Rated Restaurants</button>
        </div>
        {filterRestaurent.length === 0 ? <Shimmer /> : <div id="res-container">
            {filterRestaurent.map(resuarant => (
                <RestruatantCard key={resuarant?.info?.id} resCardInfo={resuarant} />
            ))}
        </div>}
        {filterRestaurent.length !== 0 && (<div className="show-more">
            <button>Show More</button>
        </div>
        )}

    </div>
}

export default Body;