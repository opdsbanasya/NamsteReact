import {render, screen} from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

// test case for heading
test("Should load Contact us component", ()=>{
    render(<ContactUs />);

    // Quering
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
})

