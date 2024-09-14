import { render, screen } from "@testing-library/react";
import RestruatantCard from "../RestaurentCard";
import RestaurentCardInfo from "./mocks/restaurentCardMockData.json";
import "@testing-library/jest-dom";

it("Should rendered the Resaurent Card",()=>{
    render(<RestruatantCard resCardInfo={RestaurentCardInfo}/>)

    const resaurentName = screen.getByText("Chinese Wok");

    expect(resaurentName).toBeInTheDocument();
})