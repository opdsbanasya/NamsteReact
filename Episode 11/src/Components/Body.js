import RestruatantCard, { NearbyResCard } from "./RestruatantCard";
import { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResData from "../utils/useResData";
import { RES_LIST_API } from "../utils/constant";
const Body = () => {

    // const [restaurant, setRestaurant] = useState([]);
    const [filterRestaurent, setFilterRestaurent] = useState([])

    const [searchData, setSearchData] = useState("");

    const userStatus = useOnlineStatus();

    const restaurant = useResData(RES_LIST_API);
    console.log(restaurant);

    const RestruatantCardNearly = NearbyResCard(RestruatantCard);

    useEffect(() => {
        setFilterRestaurent(restaurant)
    }, [restaurant])

    if (userStatus === false) return (userStatus === false && <h1>You are offline!! <br /> Connect to Internet!!!</h1>)
    // conditional rendering
    return <div id="body">
        <div className="flex mb-20 items-center space-x-7 mx-16">
            <div className="input-box space-x-5">
                <input
                    className="px-2 py-1 border-2 border-solid border-slate-600 rounded-md"
                    type="text"
                    value={searchData}
                    onChange={(e) => {
                        setSearchData(e.target.value);
                    }}
                    placeholder="Type to search"
                />
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    onClick={() => {
                        const filterData = restaurant.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchData.toLowerCase());
                        })

                        setFilterRestaurent(filterData);

                    }}
                >Search</button>
            </div>
            <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={() => {
                    const filterRestaurent = restaurant.filter(res => res.info.avgRating > 4.4);
                    setFilterRestaurent(filterRestaurent);
                }}>Top Rated Restaurants</button>
        </div>
        {filterRestaurent.length === 0 ? <Shimmer /> : <div id="res-container" className="w-full h-full flex items-center justify-center gap-[4vw] flex-wrap ">
            {filterRestaurent.map(restaurant => (
                <Link
                    to={"/restuarentInfo/" + restaurant?.info?.id}
                    key={restaurant?.info?.id}
                    className="w-[17%] h-[50vh] flex items-center justify-center relative"
                >
                    {
                        restaurant?.info?.sla?.lastMileTravel <= 2.5 
                            ? <RestruatantCardNearly resCardInfo={restaurant} /> 
                            : <RestruatantCard resCardInfo={restaurant} />
                    }
                </Link>
            ))}
        </div>}

    </div>
}

export default Body;