import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { MdEmail, FaUserLock } from "../../assets/Images";
import fondo from "../../assets/fondo.png";

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`,data);
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
      <div className="flex justify-between items-center w-full max-w-6xl px-16">
        <div className="info-section text-white p-4 max-w-xs flex-1 mr-96">
          <h2 className="text-4xl mb-5 font-bold">Hotel la manguita</h2>
          <p className="text-lg leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            provident rerum corporis aut error quam repellendus. Reiciendis
            suscipit fugiat obcaecati hic non corrupti aspernatur, sunt omnis
            eligendi itaque maiores iste!
          </p>
        </div>

        <div className="login-contenedor">
          <form onSubmit={onSubmit}>
            <h1 className="mb-5 text-4xl font-extrabold text-white">Login</h1>

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
              <label className="text-white text-sm">
                <input type="checkbox" /> Recordarme
              </label>
              <Link to="" className="text-blue-500 text-sm hover:underline">
                Olvidé la contraseña
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
          <div className="register-link mt-5">
            <p className="text-sm text-white">
              No tienes una cuenta?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Registrar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
