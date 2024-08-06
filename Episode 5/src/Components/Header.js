import { LOGO_URL } from "../utils/constant";
const Header = () => {
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
            </ul>
        </nav>
    </header>
}

export default Header;