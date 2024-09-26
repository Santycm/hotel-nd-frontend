/* Aca van todas las rutas de la web donde desde el Login y Register y Home y toda la navegacion
donde despues lo importamos al App.js para mejorar la modularidad
*/

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../screens/login/Login.jsx";
import { Register } from "../screens/register/Register.jsx";
import Home from "../screens/home/Home.jsx";

function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rutas;
