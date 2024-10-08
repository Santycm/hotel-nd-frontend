import { useForm } from "react-hook-form";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigation = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/register`, data);
      console.log(response.data); 
      reset();
      navigation("/")
    } catch (error) {
      console.error('Error:', error);
    }
  });

  const errorMessages = Object.values(errors).map((error) => error.message);

  return (
    <section className="background flex items-center justify-around p-2">
      <div className="hidden md:block text-white text-center space-y-4 ml-8 animation-up">
        <h2 className="text-2xl font-bold text-center">¿Por que registrarse?</h2>
        <ul className="list-disc list-inside text-right">
          <li>Todavia no se despues miro</li>
          <li>Todavia no se despues miro</li>
          <li>Todavia no se despues miro</li>
          <li>Todavia no se despues miro</li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center border-2 shadow-lg bg-transparent rounded-lg backdrop-blur-lg border-white/20 animation-up">
        <h1 className="font-extrabold text-4xl text-white my-2">Registro</h1>
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-center items-center p-4"
        >
          <input
            {...register("name", {
              required: "Nombre requerido",
              minLength: {
                value: 2,
                message: "El nombre debe contener al menos 2 caracteres",
              },
              maxLength: 20,
            })}
            placeholder="Nombre"
            className="input-register"
          />

          <input
            {...register("lastname", {
              required: "Apellido requerido",
              minLength: {
                value: 2,
                message: "El apellido debe contener al menos 2 caracteres",
              },
              maxLength: 20,
            })}
            placeholder="Apellido"
            className="input-register"
          />

          <input
            {...register("cedula", {
              required: "Cédula requerida",
              pattern: {
                value: /^[0-9]{1,10}$/,
                message: "Cédula: (Debe tener solo números, máximo 10)",
              },
            })}
            placeholder="Cédula"
            className="input-register"
          />

          <input
            {...register("tel", {
              required: "Teléfono requerido",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Teléfono: (Debe tener solo números, 10 dígitos)",
              },
            })}
            placeholder="Teléfono"
            className="input-register"
          />

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
            className="input-register"
          />

          <input
            type="password"
            {...register("password", {
              required: "Contraseña requerida",
              minLength: {
                value: 6,
                message: "La contraseña debe contener al menos 6 caracteres",
              },
            })}
            placeholder="Contraseña"
            className="input-register"
          />

          {errorMessages.length > 0 && (
            <div className="error-messages w-11/12 max-h-20 overflow-y-auto bg-transparent text-red-600 font-bold">
              {errorMessages.map((msg, index) => (
                <p key={index}>{msg}</p>
              ))}
            </div>
          )}

          <button className="button-register my-4" type="submit">
            Registrar
          </button>
        </form>
      </div>
      
    </section>
  );
};

export default Register