import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <p>Hola, este es el Login</p>
      <button onClick={goToRegister}>Register</button>
    </div>
  );
};
