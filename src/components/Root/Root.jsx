import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AuthProvider from "../../AuthProvider/AuthProvider";
const Root = () => {
    return (
        <div className="bg-white">
            <Navbar></Navbar>
            <AuthProvider></AuthProvider>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>

    );
};

export default Root;