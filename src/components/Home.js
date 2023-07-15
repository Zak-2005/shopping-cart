import React from "react";
import { HashRouter, Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h1 className="homeText">
        Your dining experience is about to change forever
      </h1>
      <div>
        <Link to="/shop/products">
          <button type="button" id="shopNow">Shop Now</button>
        </Link>
   
      </div>
    </div>
  );
};
export default Home;
