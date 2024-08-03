import React from "react";
import ReactDOM from "react-dom";


const Header = ()=>{
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

const AppLay = () =>{
    return <>
        <Header />
    </>
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLay />);

