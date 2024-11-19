import { useState, useEffect  } from "react";
import { Card, CardContent, Typography, Grid, TextField, Button, MenuItem } from '@mui/material';
import axios from "axios";

const MyReservation = () => {
  const [reservations, setReservations] = useState([]);

  const getUserEmailFromToken = () => {
    const token = localStorage.getItem("token"); // Asumiendo que el token está almacenado bajo la clave 'token'
    if (!token) {
      alert("No hay un token almacenado, por favor inicia sesión");
      window.location.href = "/";
    }

    try {
      const decodedToken = jwt_decode(token);
      return decodedToken.email; // Asumiendo que el email está en el payload del token
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  const getMyReservations = async () => {
    const userEmail = getUserEmailFromToken();
    if (userEmail) {
      console.log("User email:", userEmail);
      // Puedes usar userEmail aquí según sea necesario
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/my-reservations`,
        { user_email: userEmail },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setReservations(response.data.message);
      // Aquí puedes manejar la respuesta, por ejemplo, renderizar la información en la página
    } catch (error) {
      console.error("Error fetching my reservations:", error);
    }
  };
  useEffect(() => {
    getMyReservations();
  }, []);

  return (
    <section className="w-full h-[100vh] bg-contentColor ">
      <div className="container mx-auto  ">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">
          Mis Reservas
        </h1>
        <div className="bg-white shadow-md rounded-lg lg:p-4">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b hidden lg:block">ID</th>
                <th className="py-2 px-4 border-b">Fecha</th>
                <th className="py-2 px-4 border-b">Suite</th>
                <th className="py-2 px-4 border-b">Precio</th>
                <th className="py-2 px-4 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr
                  key={reservation.id_reservation}
                  className="hover:bg-gray-100 text-center "
                >
                  <td className="py-2 px-4 border-b text-center hidden lg:block">
                    {reservation.id_reservation}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {new Date(
                      reservation.date_reservation
                    ).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {reservation.name}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {reservation.price}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button
                      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
                      onClick={async () => {
                        try {
                          const response = await axios.post(
                            `${
                              import.meta.env.VITE_API_URL
                            }/api/delete-reservation`,
                            { id_reservation: reservation.id_reservation },
                            {
                              headers: {
                                Authorization: `Bearer ${localStorage.getItem(
                                  "token"
                                )}`,
                              },
                            }
                          );
                          console.log(response.data);
                          setReservations(
                            reservations.filter(
                              (r) =>
                                r.id_reservation !== reservation.id_reservation
                            )
                          );
                          // Recargar la página si es necesario
                          // window.location.reload();
                        } catch (error) {
                          console.error("Error cancelling reservation:", error);
                        }
                      }}
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
    </section>
  );
};

export default MyReservation;