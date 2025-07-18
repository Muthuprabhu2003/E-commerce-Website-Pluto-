import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./App.css";

function TLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios.get("http://localhost:3000/users")
      .then(res => {
        const user = res.data.find(
          u => u.email === formData.email && u.password === formData.password
        );

        if (user) {
          const loginTime = new Date().toLocaleString();

          axios.patch(`http://localhost:3000/users/${user.id}`, {
            time: loginTime
          });

          navigate("/adminuser");
        } else {
          alert("Invalid credentials");
        }
      })
      .catch(err => console.error("Login error:", err));
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <button type="submit" className="submit">Login</button>

        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
}

export default TLogin;
