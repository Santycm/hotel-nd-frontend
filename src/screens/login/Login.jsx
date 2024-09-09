import React from "react";
import { FaUserCircle, FaUserLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login-screen">
      <div className="main-container">
        <div className="info-section">
          <h2>Hotel la manguita</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Architecto provident rerum corporis aut error quam repellendus.
            Reiciendis suscipit fugiat obcaecati hic non corrupti aspernatur,
            sunt omnis eligendi itaque maiores iste!
          </p>
        </div>

        <div className="login-container">
          <form>
            <h1>Login</h1>
            <div className="input-form">
              <input type="text" placeholder="Username" required />
              <FaUserCircle className="icon" />
            </div>
            <div className="input-form">
              <input type="password" placeholder="Password" required />
              <FaUserLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" /> Remember me </label>
              <Link to="/forgot-password">Forgot password</Link>
            </div>
            <button className="button-login" type="submit">Login</button>
          </form>
          <div className="register-link">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};
