import { CDN_URL } from "../utils/constant"
const RestruatantCard = (prop) => {
    const { resCardInfo } = prop;

    const { name, cuisines, avgRatingString, sla, locality, costForTwo, cloudinaryImageId } = resCardInfo?.info;

    const handleCuisinesLength = () => {
        for (let i in cuisines) {
            console.log(cuisines[0])
        }
    }
    handleCuisinesLength();
    return <div className="res-card">
        <img alt="res-logo" className="res-logo" src={CDN_URL + cloudinaryImageId} />
        <div className="res-info">
            <h4>{name}</h4>
            <h5>{cuisines[0]}</h5>
            <h6>{avgRatingString} star • {sla.slaString}</h6>
            <h6>{costForTwo}</h6>
            <h6>{locality}</h6>
        </div>
    </div>
}

export default RestruatantCard;