import { HashRouter, Route, Routes, useOutletContext } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import NavBar from "./NavBar";
import "../styles.css";
import CardPage from "./CardPage";
import { products } from "./ProductList";
import React, {useState} from "react";
import Cart from "./Cart";
const RouteSwitch = () => {
    const [itemsInCart, setItemsInCart] = useState(0);
  return (
    <HashRouter>
      <Routes>
        <Route element={<NavBar itemsInCart={itemsInCart}/>}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart itemsInCart={itemsInCart}/>} />
          <Route path="/shop">
            <Route path="products" element={<Shop />} />

            {products.map((product) => {
              return <Route
                path={product.title}
                element={<CardPage title={product.title} price={product.price} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>}
              />;
            })}
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};
export default RouteSwitch;
