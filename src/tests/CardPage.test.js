import React from "react";
import { render, screen } from "@testing-library/react";
import CardPage from "../components/CardPage";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { HashRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
describe("CardPage Component", () => {
  it("Renders CardPage", () => {
    const { container } = render(
      <HashRouter>
        <CardPage
          title="Product Title"
          src="product.png"
          price={9.99}
          itemsInCart={0}
          setItemsInCart={() => {}}
        />
      </HashRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it("Quantity is set when typed, Cart is set to items in cart + quantity when Add to Cart is clicked", async () => {
    const setItemsInCartMock = jest.fn();
    const user = userEvent.setup();

    render(
      <HashRouter>
        <CardPage
          title="Product Title"
          src="product.png"
          price={9.99}
          itemsInCart={0}
          setItemsInCart={setItemsInCartMock}
        />
      </HashRouter>
    );
    const input = screen.getByPlaceholderText("Quantity:");
    const addToCart = screen.getByRole("button", { name: "Add To Cart" });

    await act(async () => {
      await user.type(input, "10", { eventProperties: { keyCode: 49 } });
      await user.click(addToCart);
    });
    expect(setItemsInCartMock).toHaveBeenCalledWith(10);
    expect(setItemsInCartMock).toHaveBeenCalledTimes(1);
  });
  it("Cart is not set when Quantity is not a positive number", async () => {
    const setItemsInCartMock = jest.fn();
    const user = userEvent.setup();

    render(
      <HashRouter>
        <CardPage
          title="Product Title"
          src="product.png"
          price={9.99}
          itemsInCart={0}
          setItemsInCart={setItemsInCartMock}
        />
      </HashRouter>
    );
    const input = screen.getByPlaceholderText("Quantity:");
    const addToCart = screen.getByRole("button", { name: "Add To Cart" });

    await act(async () => {
      await user.type(input, "-10", { eventProperties: { keyCode: 49 } });
      await user.click(addToCart);
    });
    expect(setItemsInCartMock).toHaveBeenCalledTimes(0);
  });
  
});
