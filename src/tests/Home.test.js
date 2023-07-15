import React from "react";
import { render } from "@testing-library/react";
import Home from "../components/Home";
import "@testing-library/jest-dom";
import { HashRouter } from "react-router-dom";

describe("Home Component", () => {
  it("Renders Correct Heading and Button Text", () => {
    
    const { container } = render(<HashRouter><Home /></HashRouter>);
    expect(container).toMatchSnapshot();
    
  });
});
