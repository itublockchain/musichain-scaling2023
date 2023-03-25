import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      {/* Üst çubuk içeriği */}
      <div className="logo">Logo
      <img src="/musichainLogo.png" alt="Logo"/>
      </div>
      <div className="profile-icon"><a href="http://localhost:3000/Profil">Profile</a></div>
    </header>
  );
};

export default Navbar;