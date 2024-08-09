import RestruatantCard from "./RestruatantCard";
import resData from "../utils/mockData";
import { useState } from 'react';

const Body = () => {

    const [restaurant, setRestaurant] = useState(resData);

    return <div id="body">
        <div id="top-rated">
            <button onClick={() => {
                const filterRestaurent = restaurant.filter(res => res.info.avgRating > 4.1);
                setRestaurant(filterRestaurent);
            }}>Top Rated Restaurants</button>
        </div>
        <div id="res-container">
            {restaurant.map(resuarant => (
                <RestruatantCard key={resData?.indexOf?.id} resCardInfo={resuarant} />
            ))}
        </div>
    </div>
}

export default Body;