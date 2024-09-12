import {render, screen} from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Should contact us rendered",()=>{
    // test case for heading
    test("Should load Contact us component with heading", ()=>{
        render(<ContactUs />);
    
        // Quering
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    })
    
    // test case for input boxes
    test("Should input boxes are in the contact us Componet", ()=>{
        render(<ContactUs />);
    
        // Quering
        const inputBoxes = screen.getAllByRole("textbox");
    
        // Assertion
        expect(inputBoxes.length).toBeGreaterThan(2);
    })
})
