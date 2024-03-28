// Import React
import React from "react";
// Import Images
import menuIcon from "/public/menu.png";
// Import SCSS
import "./Navbar.scss";

export default function Navbar() {
    function handleMenu () {
        console.log('clicked')
    }
    return (
        <div className="navbar-container">
        <div 
            className="navbar-menu"
            onClick={handleMenu}
        >
            <img
            src={menuIcon}
            style={{
                height: "22px",
                aspectRatio: "1/1",
                margin: 0,
                filter: "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(101%) contrast(103%)",
            }}
            />
        </div>
        <div className="navbar-title">Star Realms</div>
        </div>
    );
}
