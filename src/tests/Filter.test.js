import React from "react";
import { render } from "@testing-library/react";
import Filter from "../components/Home";
import "@testing-library/jest-dom";
import { HashRouter } from "react-router-dom";

describe("Filter Component", () => {
  it("Renders Filter Correctly", () => {
    
    const { container } = render(<HashRouter><Filter label={"Utensils"} setChecked={()=>{}}/></HashRouter>);
    expect(container).toMatchSnapshot();
    
  });
});
