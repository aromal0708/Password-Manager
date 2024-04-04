import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return(

        <div className="nav-body">
            <div className="nav-left">
                <img src="/Assets/_733b6453-dadf-47ba-9353-a332edefd3dc.jpeg" alt="logo" className="logo-img" />
                <span className="logo">V Protect</span>
            </div>
            <div className="nav-right">
                <button className="normal-button">Sign in </button>
                <button className="dark-button">Try for Free <i style={{"background":"none"}} className="fa-solid fa-arrow-trend-up"></i></button>
            </div>
        </div>

    )
};

export default Navbar;
