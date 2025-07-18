import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import "./App.css";


function Home() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/tlogin">
        <img src="./favicon.png" alt="Logo" /></Link>
        <h1 className="navbar-title">Pluto</h1>
        <div className="navbar-search">
          <span className="search-wrapper">
            <input type="text" placeholder="Search" aria-label="Search products" />
          </span>
        </div>
        <NavLink to="/adver" className="nav-link" title="Home">
          <FaHome size={24} />
        </NavLink>
        
        <NavLink to="/cart" className="nav-link" title="Cart">
          <IoCartOutline size={24} />
        </NavLink>
        <NavLink to="/tlogin" className="nav-link" title="Profile"><CgProfile size={24}/></NavLink>
        <NavLink to="/alogin" className="nav-link" title="Admin Login">
          <MdOutlineAdminPanelSettings size={24} />
        </NavLink>
        
      </div>
    </nav>
  );
}

export default Home;