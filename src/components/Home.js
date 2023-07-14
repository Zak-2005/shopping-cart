import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Your dining experience is about to change forever</h1>
      <button>
        <Link to="/shop">Shop Now</Link>
      </button>
    </div>
  );
};
export default Home;
