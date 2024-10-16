/* Aca van todas las rutas de la web donde desde el Login y Register y Home y toda la navegacion
donde despues lo importamos al App.js para mejorar la modularidad
*/

import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Login  from "../screens/login/Login.jsx";
import Register  from "../screens/register/Register.jsx";
import Home from "../screens/home/Home.jsx";
import Reservation from "../screens/reservation/Reservation.jsx";
import Admin from "../screens/admin/Admin.jsx";

function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/reservation" element={<Reservation/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rutas;
