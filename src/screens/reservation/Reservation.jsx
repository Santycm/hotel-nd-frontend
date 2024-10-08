import { CalendarIcon, UsersIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Falta algunas cosas para que pueda mandar los datos al backend 

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
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/createReservation`, data);
      console.log(response.data);
      reset();
      navigate("/verreservas");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-purple-600 p-5">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-extrabold mb-4 text-center text-purple-700">Reserva tu habitacion</h1>
        <p className="text-gray-600 mb-6 text-center">
          Asegurate de reservar tu habitacion con antelacion para disfrutar de
          una experiencia comoda y placentera
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-800" htmlFor="date">
              <CalendarIcon className="h-5 w-5 inline-block mr-1 text-purple-500" />Fecha de Reserva
            </label>
            <input
              type="date"
              id="date"
              {...register("date", { required: "La fecha es requerida" })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
            />
            {errors.date && (
              <span className="text-red-500 text-sm">
                {errors.date.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-800" htmlFor="roomType" >
              <UsersIcon className="h-5 w-5 inline-block mr-1 text-purple-500" />Tipo de Habitacion
            </label>
            <select
              id="suite_name"
              {...register("suite_name", {
                required: "El tipo de habitacion es requerido",
              })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
            >
              <option value="">Seleccione un tipo</option>
              <option value="individual">Individual</option>
              <option value="doble">Doble</option>
              <option value="suite">Suite</option>

            </select>
            {errors.roomType && (
              <span className="text-red-500 text-sm">
                {errors.roomType.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 rounded-md transition duration-200 ${
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
