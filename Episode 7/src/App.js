import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import ErrorPage from "./Components/ErrorPage";
import RestuarentInfo from "./Components/RestuarentInfo";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";


const App = () => {
    return <>
        <Header />
        <Outlet />
    </>
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/restuarentInfo/:id",
                element: <RestuarentInfo />
            },
        ],
        errorElement: <ErrorPage />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
