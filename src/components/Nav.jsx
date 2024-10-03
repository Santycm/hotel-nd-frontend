import { useState } from "react";
import { Link } from "react-router-dom";
import NavMovil from "./NavMovil";
import OpcionMoreNav from "./OpcionMoreNav";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative bg-slate-900 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          {/*Logo de la aplicacion*/}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10"src="/src/assets/fondo.png"alt=""/>
            </a>
          </div>
          {/*Boton para abrir el menu movil*/}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/*Navegacion principal*/}
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-base font-medium text-white">Pricing</a>
            <a href="#" className="text-base font-medium text-white">Docs</a>
            {/*Componente para opciones "mas"*/}
            <OpcionMoreNav />
          </nav>
          {/*Boton para cerrar sesion*/}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to="/"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Cerrar Sesion
            </Link>
          </div>
        </div>
      </div>
      {/*Componente de navegacion movil y las 2 props*/}
      <NavMovil open={open} setOpen={setOpen} />
    </div>
  );
};

export default NavBar;