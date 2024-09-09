/* Aca van todas las rutas de la web donde desde el Login y Register y Home y toda la navegacion
donde despues lo importamos al App.js para mejorar la modularidad
*/  
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../screens/Login/Login";
import { Register } from "../screens/Register/Register";




function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas;