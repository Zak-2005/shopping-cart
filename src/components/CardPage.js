import React, { useState } from "react";
import { useOutlet, useOutletContext } from "react-router-dom";
const CardPage = ({title,price,setItemsInCart,itemsInCart}) =>{
    const [quantity, setQuantity] = useState(0)
    return (
        <div>
        <h1>{title}</h1>
        <h2>{price}</h2>
        <input type="number" placeholder="Quantity:" min={0} onChange={(e)=>setQuantity(parseInt(e.target.value))}/>
        <button onClick={()=>(quantity>=0)?setItemsInCart(itemsInCart+quantity):0}>Add To Cart</button>
        </div>
    )
}

export default CardPage;