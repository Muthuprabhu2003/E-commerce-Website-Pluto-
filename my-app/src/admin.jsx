import React from "react";
import "./App.css"; 
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="aprofile-container">
      <div className="aprofile-admin">
        <h1>Admin portal</h1>
      </div>
     
      <div className="aprofile-banner">
        <div className="aprofile-image">
        <img
          src="/images/profile.jpeg"  
          alt="Muthu Prabhu"
          className="profile-image"
        />
      </div>

      </div>

      

      
      <div className="aprofile-info">
        <h2>Muthu Prabhu</h2>
        <p>Admin </p>
        <Link to ="/orders" className="abutton">
         <button className="abutton">Order History</button>
        </Link>
        <Link to="/adminusers" className="abutton">
        <button className="abutton">Login History</button></Link>
         <Link to="/phis" className="abutton">
        <button className="abutton">Payment history</button></Link>
        <Link to="/aboutme" className="abutton">
        <button className="abutton">About me</button></Link>
      

      </div>
    </div>
  );
}

export default Admin;
