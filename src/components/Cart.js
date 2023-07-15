import { Outlet } from "react-router-dom";
import { useState } from "react";

const Cart = ({itemsInCart}) =>{
    return (
        <div className="Cart">
        <h1>Cart Quantity: {itemsInCart}</h1>
        </div>
    )
}

export default Cart;