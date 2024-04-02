import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layouts = () => {
    return (
        <>
         <Navbar/>   
         <Outlet/>
        </>
    );
};

export default Layouts;