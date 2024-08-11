import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider} from "react-router-dom";



const App = () => {
    return <>
        <Header />
        <Body />
    </>
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {}
    

])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

