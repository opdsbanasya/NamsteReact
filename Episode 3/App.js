import React from "react";
import ReactDOM from "react-dom";

// const Heading = <h1 className="heading">Namaste React with JSX</h1>

const Title = ()=>{
    return <h1>This is title</h1>
}

const HeadingComponent = ()=>{
    return <div>
        <Title/>
        <h2>Namste React With Functional Component</h2>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

