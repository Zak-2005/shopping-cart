import { Link, Outlet } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <ul className="navBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop/products">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart {props.itemsInCart}</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};
export default NavBar;
