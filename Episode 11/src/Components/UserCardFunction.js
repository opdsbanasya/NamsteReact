import { useState } from "react";


const UserCardFunction = (props) => {
    const {name, city} = props;

    const [status] = useState("active")

    return (
        <div className='user-card'>
                <h2>Name: {name} function <span className="user-status">{status}</span> </h2>
                <h3>City: {city}</h3>
                <h3>Twitter: @opdsbanasya</h3>
        </div>
    );
}

export default UserCardFunction;
