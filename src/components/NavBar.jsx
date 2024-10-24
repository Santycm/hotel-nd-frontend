import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavMovil from "./NavMovil";
import OpcionMoreNav from "./OpcionMoreNav";


const NavBar = () => {
  const redirect = useNavigate()
  const [open, setOpen] = useState(false);

  const handleNavigation = () => {
    redirect("/admin"); 
  };

  return (
    <div className="relative mb-4 " >
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
            <div onClick={handleNavigation} className="text-base font-medium bg-thirdColor rounded-xl px-4 text-secondColor hover: shadow-lg hover:scale-125 duration-2000  underline-offset-8 cursor-pointer">Admin </div>
            <Link href="#" className="text-base font-medium bg-thirdColor rounded-xl px-4 text-secondColor hover: shadow-lg hover:scale-125 duration-2000 underline-offset-8 ">Ubicacion</Link>
            {/*Componente para opciones "mas"*/}
            <OpcionMoreNav />
          </nav>
          {/*Boton para cerrar sesion*/}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to="/"
              className="text-secondColor bg-gradient-to-r from-thirdColor  to-thirdColor hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg  dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:shadow-white duration-1000"
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