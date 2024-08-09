import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";



const App = () => {
    return <>
        <Header />
        <Body />
    </>
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

