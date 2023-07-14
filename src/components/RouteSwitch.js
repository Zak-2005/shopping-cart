import { HashRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import NavBar from "./NavBar";
const RouteSwitch = () =>{
    return (
        <HashRouter>
            <Routes>
                <Route element={<NavBar />}>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}
export default RouteSwitch