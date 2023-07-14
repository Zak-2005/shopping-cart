import { Outlet } from "react-router-dom"

const NavBar = () =>{
    return (
        <>
        <nav>
            <ul>
                <li>Home</li>
                <li>Cart</li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}
export default NavBar