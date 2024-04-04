import React from "react";
import "./Login.css"

const Login = () => {
  return (
    <div className="login-body">
      <div className="login-container">
        <span className="header">Signup</span>
          <div className="input">
          <input placeholder="Enter Email" type="email" className="text-box" />
          <input placeholder="Enter Password" type="password" className="text-box" />
          </div>
          <div className="submit">
          <button className="dark-button">Login</button>
          <button className="normal-button">Signup</button>
          </div>
            
      </div>
    </div>
  );
};

export default Login;
