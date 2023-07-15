import React from "react";
import { render, screen } from "@testing-library/react";
import Shop from "../components/Shop";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { HashRouter } from "react-router-dom";
describe("Shop Component", ()=>{
    it("Shop Renders All products and filters on load", ()=>{
        const {container}= render(<HashRouter><Shop /></HashRouter>)
        expect(container).toMatchSnapshot()
    })
    it("Utensil Filter only renders Utensils", async ()=>{
        const user = userEvent.setup();
        render(<HashRouter><Shop /></HashRouter>)

        const utensilFilter = screen.getByPlaceholderText("Utensils")
       await act(async ()=> { await user.click(utensilFilter)})
        

        expect(screen.queryByText("Bowl")).not.toBeInTheDocument()
    })
    it("Dishware Filter only renders Dishware", async ()=>{
        const user = userEvent.setup();
        render(<HashRouter><Shop /></HashRouter>)

        const dishwareFilter = screen.getByPlaceholderText("Dishware")
       await act(async()=> { await user.click(dishwareFilter)})
        

        expect(screen.queryByText("Spork")).not.toBeInTheDocument()
    })
    it("Napkins Filter only renders Napkins", async ()=>{
        const user = userEvent.setup();
        render(<HashRouter><Shop /></HashRouter>)

        const napkinFilter = screen.getByPlaceholderText("Napkins")
       await act(async()=> { await user.click(napkinFilter)})
        

        expect(screen.queryByText("Spork")).not.toBeInTheDocument()
    })
})