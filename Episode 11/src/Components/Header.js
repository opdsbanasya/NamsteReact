import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {

    const [btnName, setBtnName] = useState("login")
    const userStatus = useOnlineStatus();

    const {userName} = useContext(UserContext);
    console.log(userName);
    

    return <header className="w-full h-[12vh] flex items-center justify-between px-10 shadow-md mb-4">
        <div className="w-1/3 h-full">
            <img className="h-full object-cover" src={LOGO_URL} />
        </div>
        <nav className="w-2/3 h-full flex items-center justify-end">
            <ul className="flex items-center space-x-7"> 
                <li className="text-lg font-semibold">Internet Status: {userStatus === false ? "🔴" : "🟢"}</li>
                <li className="text-lg hover:underline font-semibold"><Link to="/">Home</Link></li>
                <li className="text-lg hover:underline font-semibold"><Link to="/about">About Us</Link></li>
                <li className="text-lg hover:underline font-semibold"><Link to="/contact">Contact Us</Link></li>
                <li className="text-lg hover:underline font-semibold"><Link to="/grocery">Grocery</Link></li>
                <li className="text-lg hover:underline font-semibold">Cart</li>
                <li className="text-lg hover:underline font-semibold">{userName}</li>
                <button className="w-20 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={() => { 
                    btnName === "login" ? 
                    setBtnName("logout") : 
                    setBtnName("login") 
                }}>{btnName}</button>
            </ul>
        </nav>
    </header>
}

export default Header;