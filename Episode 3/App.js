import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {}, "Namaste React");

const jsxHeading = <h1>Namaste React with JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);