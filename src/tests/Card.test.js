import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../components/Home";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { HashRouter } from "react-router-dom";

describe("Card Component", () => {
  it("Renders Card Correctly", () => {
    const { container } = render(
      <HashRouter>
        <Card
          src={`./Images/Blate.png`}
          title={"Blate"}
          price={"$125"}
        />
      </HashRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
