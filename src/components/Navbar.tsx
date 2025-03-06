import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar=()=>{
    const navigate= useNavigate();

    return (
        <>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about" state={{data:20}}>About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            
            {/* <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li> */}
        </ul>
        <button onClick={()=>{navigate("/co",{state:{data:10}})}} className="bg-red-300 p-2 text-white">Controls</button>
        </>

    )
}
export default Navbar;
