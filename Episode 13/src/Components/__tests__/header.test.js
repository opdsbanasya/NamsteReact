import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../Store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// for login button
it("Should header rendered with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    // quering
    const loginBtn = screen.getByRole("button", {name:"login"});

    // Assertion
    expect(loginBtn).toBeInTheDocument();
})

// for cart
it("Should cart rendered with 0 element", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // quering
    const cart = screen.getAllByText(/Cart/);

    // Assertion
    expect(cart).to
})

// for logout button
it("Should header rendered with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    // quering
    const loginBtn = screen.getByRole("button", {name:"login"});

    // event dispatch
    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", {name:"logout"});

    // Assertion
    expect(logoutBtn).toBeInTheDocument();
})