// Import React
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import Images
import menuIcon from "/public/menu.png";
// Import SCSS
import "./Navbar.scss";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Dashboard",
      navigation: "/dashboard",
    },
    {
      title: "Authority Tracker",
      navigation: "/authoritytracker",
    },
  ];

  function handleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div style={{ position: "relative" }}>
      <div className="navbar-container">
        <div className="navbar-menu" onClick={handleMenu}>
          <img
            src={menuIcon}
            style={{
              height: "22px",
              aspectRatio: "1/1",
              margin: 0,
              filter:
                "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(101%) contrast(103%)",
            }}
          />
        </div>
        <div className="navbar-title">Star Realms</div>
      </div>
      <div
        className="navbar-menu-options"
        style={{ display: menuOpen ? "block" : "none" }}
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="navbar-menu-item"
            onClick={() => {
              navigate(item.navigation), setMenuOpen(false);
            }}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
