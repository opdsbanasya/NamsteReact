import React from "react";
import ReactDOM from "react-dom";


const Header = () => {
    return <header>
        <div id="logo-container">
            <img id="logo" src="https://imgs.search.brave.com/hkG-MNTaxFwfJGO7_WouUVHTfPzCYqLO1xWUnzur-_w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9zXy0ycWdSclBa/bldVcFdJaDROZUl1/OTVVQ0U9LzB4MDo5/OTl4OTk5L2ZpdC1p/bi81MDB4NTAwLzk5/ZGVzaWducy1jb250/ZXN0cy1hdHRhY2ht/ZW50cy8xMTgvMTE4/NjEyL2F0dGFjaG1l/bnRfMTE4NjEyOTQz.jpeg" />
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

const RestruatantCard = () => {
    return <div className="res-card">
        <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d8pqyjprjyp6whgjgzo0" />
        <div className="res-info">
            <h3>Pink Perl Foods</h3>
            <h4>Burger, Vej Biryani...</h4>
            <h5>4.6 star</h5>
            <h5>25 - 30 mins</h5>
            <h5>Raja Park</h5>
        </div>
    </div>
}

const Body = () => {
    return <div id="body">
        <div id="search">Search</div>
        <div id="res-container">
            <RestruatantCard />
        </div>
    </div>
}
const AppLay = () => {
    return <>
        <Header />
        <Body />
    </>
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLay />);

