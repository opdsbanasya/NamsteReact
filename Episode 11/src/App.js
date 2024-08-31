import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import ErrorPage from "./Components/ErrorPage";
import RestuarentInfo from "./Components/RestuarentInfo";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";


const App = () => {
    const [userName, setUserName] = useState("");
    useEffect(() => {
        // make an api call
        const data = {
            name:"Tom",
        }
        setUserName(data.name);
    }, []);
    console.log(userName);
    

    return (
        <UserContext.Provider value={{loggedInUser:userName}}>
            <div>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const Grocery = lazy(() => import("./Components/Grocery"))
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
                path: "/grocery",
                element: (
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <Grocery />
                    </Suspense>
                )
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
