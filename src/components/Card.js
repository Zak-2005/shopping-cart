import { Link, Outlet } from "react-router-dom";
import CardPage from "./CardPage";
import RouteSwitch from "./RouteSwitch";

const Card = (props) => {
  return (
    <div>
      <img className="cardImg" src={props.src} alt={props.src} />
      <h4>
        <Link to={`/shop/${props.title}`}>{props.title}</Link>
      </h4>
      <h4>{props.price}</h4>
    </div>
  );
};

export default Card;
