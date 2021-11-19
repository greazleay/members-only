import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from './Footer';

export const Layout = () => {
    return (
        <div className="container">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}