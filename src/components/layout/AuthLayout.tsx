import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AuthLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>            
        </div>
    );
};

export default AuthLayout;