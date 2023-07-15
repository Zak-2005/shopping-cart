import React from "react";
import { render } from "@testing-library/react";
import Cart from "../components/Cart";
import "@testing-library/jest-dom";
import { HashRouter } from "react-router-dom";

describe("Cart Component", () => {
  it("Renders Cart text and items", () => {
    
    const { container } = render(<HashRouter><Cart itemsInCart={0}/></HashRouter>);
    expect(container).toMatchSnapshot();
    
  });
});
