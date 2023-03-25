import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      {/* Üst çubuk içeriği */}
      <div className="logo">
        Logo
        <img src="/musichainLogo.png" alt="Logo" />
      </div>
      <div className="profile-icon">
        <Link to="/profile">Profile</Link>
      </div>
    </header>
  );
};

export default Navbar;
