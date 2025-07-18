import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Alogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (email === "Admin@gmail.com" && password === "123456") {
      
      navigate("/admin"); 
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="App1">
      <div className="background">
        <div className="content">
          <h1>Hello! Everyone</h1>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="Mail">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="Password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Alogin;
