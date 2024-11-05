import { useEffect, useState } from "react";
import axios from "axios";

const AllReservation = () => {
  const [reservations, setReservations] = useState([]);

  const getAllReservations = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/getAllReservations`
      );
      setReservations(response.data.message);
    } catch (error) {
      console.error("Error al mostrar todos las reservas", error);
    }
  };

  const cancelReservation = async (id) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin_delete-reservation`,
        {
          id_reservation: id,
        }
      );
      console.log(response.data);
      
      await getAllReservations();
    } catch (error) {
      console.error("Error al cancelar la reserva", error);
    }
  };

  useEffect(() => {
    getAllReservations();
  }, []);

  return (
    <div className="bg-contentColor min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Reservas</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="text-white bg-blue-600">
              <th className="border border-gray-300 p-4">Id</th>
              <th className="border border-gray-300 p-4">Fecha</th>
              <th className="border border-gray-300 p-4">Email</th>
              <th className="border border-gray-300 p-4 hidden cell:table-cell">Cédula</th>
              <th className="border border-gray-300 p-4 hidden cell:table-cell">Nombre</th>
              <th className="border border-gray-300 p-4 hidden lg:table-cell">Apellidos</th>
              <th className="border border-gray-300 p-4 hidden lg:table-cell">Suite</th>
              <th className="border border-gray-300 p-4 hidden lg:table-cell">Precio</th>
              <th className="border border-gray-300 p-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id_reservation} className="hover:bg-gray-300">
                <td className="border border-gray-300 p-4 text-center">
                  {reservation.id_reservation}
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  {new Date(reservation.date_reservation).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  {reservation.email}
                </td>
                <td className="border border-gray-300 p-4 text-center hidden cell:table-cell">
                  {reservation.cedula}
                </td>
                <td className="border border-gray-300 p-4 text-center hidden cell:table-cell">
                  {reservation.us_name}
                </td>
                <td className="border border-gray-300 p-4 text-center hidden lg:table-cell">
                  {reservation.lastname}
                </td>
                <td className="border border-gray-300 p-4 text-center hidden lg:table-cell">
                  {reservation.name}
                </td>
                <td className="border border-gray-300 p-4 text-center hidden lg:table-cell">
                  {reservation.price}
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  <button
                    onClick={() => cancelReservation(reservation.id_reservation)}
                    className={`bg-red-500 text-white py-2 px-4 rounded transition duration-300 
                                  hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300`}
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReservation;
