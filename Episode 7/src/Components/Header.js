import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header = () => {

    const [btnName, setBtnName] = useState("login")

    return <header>
        <div id="logo-container">
            <img id="logo" src={LOGO_URL} />
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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