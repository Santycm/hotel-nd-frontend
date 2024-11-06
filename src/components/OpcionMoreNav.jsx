import React from "react";
import { useNavigate } from "react-router-dom";


const OpcionMoreNav = () => {

  const redirect = useNavigate();


  const [setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  const handleNavigate =(path)=>{
    redirect(path)
  }

  return (
    <div className="relative">
      {/* Boton para mostrar el menu "Mas" */}
      <button
        type="button"
        className="group  text-white bg-thirdColor rounded-xl px-4 inline-flex items-center text-base font-medium  "
        onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}
      >
        <span className=" text-secondColor hover:shadow-lg hover:scale-125 duration-2000 ">Reservas</span>

        {/* Icono que rota segun el estado del menu */}
        <svg
          className={
            flyerTwo === true
              ? "transform rotate-180 ml-2 h-5 w-5 text-white transition ease-out duration-200"
              : "ml-2 h-5 w-5 text-white group-hover:text-gray-500"
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Menu desplegable que aparece al hacer click */}
      <div
        onMouseLeave={() => setFlyerTwo(false)}
        className={
          flyerTwo
            ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
            : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
        }
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="relative grid gap-6  bg-white px-5 py-6 sm:gap-8 sm:p-8">
            {/* Enlace alhacer una reserva */}
            <a href="#res"
          
              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              <svg
                className="flex-shrink-0 h-8 w-8 text-indigo-600"
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
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900 cursor-pointer">Hacer una reserva</p>
                <p className="mt-1 text-sm text-gray-500">
                  texto de reservas
                </p>
              </div>
            </a>
            {/* Enlace al ver una reserva */}
            <button
              onClick={()=>handleNavigate("/reservations")}
              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              <svg
                className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900 cursor-pointer">Ver mis reservas</p>
                <p className="mt-1 text-sm text-gray-500">
                  texto de ver reservas
                </p>
              </div>
            </button>
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpcionMoreNav;
