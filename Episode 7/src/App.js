import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import ErrorPage from "./Components/ErrorPage";


const App = () => {
    return <>
        <Header />
        <Body />
    </>
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <ContactUs />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
