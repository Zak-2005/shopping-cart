import { HashRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
const RouteSwitch = () =>{
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="shop" element={<Shop />} />
            </Routes>
        </HashRouter>
    )
}
export default RouteSwitch