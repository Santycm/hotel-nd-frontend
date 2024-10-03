import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { MdEmail, FaUserLock } from "../../assets/Images";
import fondo from "../../assets/fondo.png";
import { useState } from "react";

export const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`,data);
      console.log(response.data);
      reset();
      navigate("/home");
    } catch (error) {
      console.error("Error:", error);
    }
  });

  const errorMessages = Object.values(errors).map((error) => error.message);

  return (
    <div className="login-screen" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-6xl">
        <div className="info-section text-white p-4 max-w-xs lg:max-w-md lg:mr-16 mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl mb-4 font-bold text-center animation-rigth">
            Hotel la manguita
          </h2>

          <p className="text-sm lg:text-lg leading-7 text-center animation-rigth">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            provident rerum corporis aut error quam repellendus.
          </p>
        </div>

        <div className="login-contenedor animation-left">
          <form onSubmit={onSubmit}>
            <h1 className="mb-5 text-2xl lg:text-4xl font-extrabold text-white">Login</h1>

            {/* Input de email del login */}
            <div className="relative mb-5">
              <input
                type="email"
                {...register("email", {
                  required: "Email requerido",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: "Email inválido",
                  },
                })}
                placeholder="Email"
                className="input-login"
              />
              <MdEmail className="icons-login" />
            </div>

            {/* Input de contraseña */}
            <div className="relative mb-5">
              <input
                type="password"
                {...register("password", {
                  required: "Contraseña requerida",
                  minLength: {
                    value: 6,
                    message:
                      "La contraseña debe contener al menos 6 caracteres",
                  },
                })}
                placeholder="Contraseña"
                className="input-login"
              />
              <FaUserLock className="icons-login" />
            </div>

            {/* Checkbox para recordar la contraseña */}
            <div className="remember-forgot flex justify-between items-center mb-5">
              <label className="flex items-center cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <div className="w-10 h-5 bg-gray-700 rounded-full shadow-inner transition-colors duration-300 ease-in-out group-hover:bg-gray-600"></div>
                  <div
                    className={`absolute left-0 top-0 w-5 h-5 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full shadow transition-transform duration-300 ease-in-out ${
                      isChecked ? "transform translate-x-full" : ""
                    }`}
                  ></div>
                </div>
                <span className="ml-3 text-white text-sm group-hover:text-blue-400 transition-colors duration-300 ease-in-out">
                  Recordarme
                </span>
              </label>
              <Link
                href="/forgot-password"
                className="text-blue-500 text-sm hover:text-blue-300 transition-colors duration-300 ease-in-out relative group"
              >
                Olvidé la contraseña
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            </div>

            {errorMessages.length > 0 && (
              <div className="error-messages w-11/12 max-h-20 overflow-y-auto bg-transparent text-red-600 font-bold mb-2 text-left text-sm">
                {errorMessages.map((msg, index) => (
                  <p key={index}>{msg}</p>
                ))}
              </div>
            )}

            {/* Botón para iniciar sesión */}
            <button className="button-login" type="submit">
              Login
            </button>
          </form>

          {/* Link para registrar una cuenta */}
          <div className="register-link mt-5 text-center">
            <p className="text-sm text-white">
              No tienes una cuenta?{" "}
              <Link to="/register"  className="text-blue-500 text-sm hover:text-blue-300 transition-colors duration-300 ease-in-out relative group">
                Registrar
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
