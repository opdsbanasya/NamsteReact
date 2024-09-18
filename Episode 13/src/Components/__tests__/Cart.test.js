import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import MOCK_MENU_LIST from "./mocks/restaurentMenuList.json"
import RestuarentInfo from "../RestuarentInfo";
import appStore from "../../store/appStore";
import Cart from "../Cart";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_MENU_LIST)
}))

describe("Cart should be work perfectly", () => {
    it("Is There accordian with header", async () => {
        await act(async () => {
            render(
                <BrowserRouter >
                    <Provider store={appStore} >
                        <RestuarentInfo />
                        <Header /> 
                        <Cart />
                    </Provider>
                </BrowserRouter>
            )
        })

        const accordianHeader = screen.getByText("Rice (6)");

        fireEvent.click(accordianHeader);

        

        expect(screen.getAllByTestId("foodItems").length).toBe(6);
        
        // get add Buttons
        const addBtns = screen.getAllByText("Add +");
        
        expect(screen.getByTestId("cart")).toBeInTheDocument();
        
        fireEvent.click(addBtns[0]);
        fireEvent.click(addBtns[1]);

        expect(screen.getAllByTestId("foodItems").length).toBe(8);
        
        fireEvent.click(screen.getByRole("button", {name:"Clear Cart"}))

        expect(screen.getAllByTestId("foodItems").length).toBe(6);

        expect(screen.getByText(/No Item/));
    })
});
