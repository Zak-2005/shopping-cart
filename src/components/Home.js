import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h1>Your dining experience is about to change forever</h1>
      <div>
      <button>
        <Link to="/shop/products">Shop Now</Link>
      </button>
      </div>
    </div>
  );
};
export default Home;
