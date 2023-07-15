import { HashRouter } from "react-router-dom"
import NavBar from "../components/NavBar"
import React from "react"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("NavBar component", ()=>{
    it("Renders 3 pages ", ()=>{
        const {container} = render(<HashRouter><NavBar /></HashRouter>)
        expect(container).toMatchSnapshot();
    })
        
    }
)