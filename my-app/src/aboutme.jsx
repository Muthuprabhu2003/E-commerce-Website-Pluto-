import React from "react";
import "./App.css"; 
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-header">
        <img
          src="/assets/images/2day.png"
          alt="Muthu Prabhu"
          className="profile-image"
        />
        <h1>Muthu Prabhu</h1>
        <p>UI/UX Designer | Frontend Developer | Electronics Enthusiast</p>
      </div>

      <div className="about-section">
        <h2>🎓 Education</h2>
        <ul>
          <li>
            <strong>Bachelor of Engineering (ECE)</strong><br />
           
          </li>
        </ul>
      </div>

      <div className="about-section">
        <h2>🛠 Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Figma</span>
          <span>UI/UX Design</span>
        </div>
      </div>

      <div className="about-section">
        <h2>📜 Certifications & Trainings</h2>
        <ul>
          <li>Forage - Tata Data Visualization</li>
          <li>Smart Wireless Cellphone Electronics (KCE Dhurva)</li>
          <li>Android Workshop (Mepco College)</li>
          <li>Embedded Systems – Code Bind Technologies, Trichy</li>
          <li>RETRIC’23 – Velammal College (Beyond 5G)</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>📂 Projects</h2>
        <ul>
          <li>
            <strong>Pluto E-Commerce</strong><br />
            A modern e-commerce frontend with React – featuring category filtering,
            authentication, and cart/order/payment modules.
          </li>
        </ul>
      </div>

      <div className="about-section">
        <h2>📧 Contact</h2>
        <p>Email: <a href="mailto:muthuprabhu2003mp@gmail.com">muthuprabhu2003mp@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/muthu-prabhu" target="_blank" rel="noreferrer">linkedin.com/in/muthu-prabhu-b-00096b223</a></p>
      </div>
      <Link to="/admin"><button className="abutton">Back</button></Link>
    </div>
  );
}

export default AboutMe;
