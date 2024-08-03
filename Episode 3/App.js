import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

// const Heading = <h1 className="heading">Namaste React with JSX</h1>

const Title = ()=>{
    return <h1>This is title</h1>
}
const title2 =( 
    <h1>This is title 2</h1>
)
const HeadingComponent = ()=>{
    return <div>
        <Header />
        <Title/>
        {title2}
        <h2>Namste React With Functional Component</h2>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

