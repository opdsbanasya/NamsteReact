import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    const [btnName, setBtnName] = useState("login")
    const userStatus = useOnlineStatus();

    return <header>
        <div id="logo-container">
            <img id="logo" src={LOGO_URL} />
        </div>
        <nav>
            <ul>
                <li>Internet Status: {userStatus === false ? "🔴" : "🟢"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <button className="login" onClick={() => { 
                    btnName === "login" ? 
                    setBtnName("logout") : 
                    setBtnName("login") 
                }}>{btnName}</button>
            </ul>
        </nav>
    </header>
}

export default Header;