import RestruatantCard, { NearbyResCard } from "./RestruatantCard";
import { useContext, useEffect, useState } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResData from "../utils/useResData";
import { RES_LIST_API } from "../utils/constant";
import UserContext from "../utils/UserContext";
const Body = () => {

    // const [restaurant, setRestaurant] = useState([]);
    const [filterRestaurent, setFilterRestaurent] = useState([])

    const [searchData, setSearchData] = useState("");

    const userStatus = useOnlineStatus();

    const restaurant = useResData(RES_LIST_API);
    // console.log(restaurant);

    const RestruatantCardNearly = NearbyResCard(RestruatantCard);

    const {setUserName} = useContext(UserContext)

    useEffect(() => {
        setFilterRestaurent(restaurant)
    }, [restaurant])

    if (userStatus === false) return (userStatus === false && <h1>You are offline!! <br /> Connect to Internet!!!</h1>)
    // conditional rendering
    return <div id="body">
        <div className="flex mb-20 items-center space-x-6 mx-16 mt-8">
            <div className="input-box space-x-4">
                <input
                    className="p-1 border-2 text-sm border-solid border-slate-600 rounded-md"
                    type="text"
                    value={searchData}
                    onChange={(e) => {
                        setSearchData(e.target.value);
                    }}
                    placeholder="Type to search"
                />
                <button
                    className="px-2 py-1 text-sm bg-blue-600 text-white rounded-lg"
                    onClick={() => {
                        const filterData = restaurant.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchData.toLowerCase());
                        })

                        setFilterRestaurent(filterData);

                    }}
                >Search</button>
            </div>
            <button
                className="px-2 py-1 text-sm bg-blue-600 text-white rounded-lg"
                onClick={() => {
                    const filterRestaurent = restaurant.filter(res => res.info.avgRating > 4.4);
                    setFilterRestaurent(filterRestaurent);
                }}>Top Rated Restaurants</button>
            <div className="space-x-4">
                <input type="text" 
                    placeholder="Enter the username" 
                    className="p-1 text-sm border-2 border-solid border-slate-600 rounded-md"
                    onChange={(e)=>{
                        setUserName(e.target.value)
                    }}
                />
                <button className="px-2 py-1 text-sm bg-blue-600 text-white rounded-lg">Update username</button>

            </div>
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