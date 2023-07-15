import { Outlet } from "react-router-dom";
import { useState } from "react";

const Cart = ({itemsInCart}) =>{
    return (
        <div>
        <h1>Cart {itemsInCart}</h1>
        </div>
    )
}

export default Cart;