import { CalendarIcon, UsersIcon, MailIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Reservation = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/create-reservation`,data );
      console.log(response.data);
      reset();
      navigate("/reservations");
    } catch (error) {
      console.error("Error desde el backend es:", error.response.data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-contentColor to-gray-800 p-5">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-extrabold mb-4 text-center text-contentColor">
          Reserva tu habitacion
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Asegurate de reservar tu habitacion con antelacion para disfrutar de
          una experiencia comoda y placentera
        </p>

        {/*Formulario para la reserva*/}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/*Input de email de reserva*/}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-800" htmlFor="user_email">
              <MailIcon className="h-5 w-5 inline-block mr-1 text-contentColor" />Email para la reserva
            </label>
            <input
              type="email"
              id="user_email"
              placeholder="Email"
              {...register("user_email", { required: "El email es requerido" })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-contentColor placeholder:text-black"
            />
            {errors.user_email && (
              <span className="text-red-500 text-sm">{errors.user_email.message}</span>
            )}
          </div>

          {/*Input de fecha de reserva*/}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-800" htmlFor="date">
              <CalendarIcon className="h-5 w-5 inline-block mr-1 text-contentColor" />Fecha de Reserva
            </label>
            <input
              type="date"
              id="date"
              {...register("date", { required: "La fecha es requerida" })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-contentColor"
            />
            {errors.date && (
              <span className="text-red-500 text-sm">{errors.date.message}</span>
            )}
          </div>
          
          {/*Input de tipo de habitacion de reserva*/}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-800" htmlFor="id_suite">
              <UsersIcon className="h-5 w-5 inline-block mr-1 text-contentColor" />Tipo de Habitacion
            </label>
            <select
              id="id_suite"
              {...register("id_suite", { required: "El tipo de habitacion es requerido" })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-contentColor"
            >
              <option value="">Seleccione un tipo</option>
              <option value="1">Individual</option>
              <option value="2">Doble</option>
              <option value="3">Suite</option>
            </select>
            {errors.id_suite && (
              <span className="text-red-500 text-sm">{errors.id_suite.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-contentColor hover:bg-gray-800 text-white font-bold py-2 rounded-md transition duration-200 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Reservando..." : "Hacer Reserva"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
