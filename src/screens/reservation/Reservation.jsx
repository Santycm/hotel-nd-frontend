import { useEffect, useState } from 'react';
import axios from 'axios';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { CalendarIcon, MailIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";

const Reservation = () => {
    const { register, handleSubmit, setValue,reset, formState: { errors } } = useForm();
    const [disabledDates, setDisabledDates] = useState([]);
    const [suiteID, setSuiteID] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchSuiteInfo = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const suiteID = urlParams.get('ID');
            setSuiteID(suiteID);

            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/suite-info`, {
                    id_suite: suiteID,
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log('Suite Info:', response.data);
            } catch (error) {
                console.error('Error de informacion de la habitacion', error);
            }
        };

        const checkAvailability = async () => {
            if (!suiteID) return; 

            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/verify-available`, {
                    id_suite: suiteID,
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setDisabledDates(response.data.message);
            } catch (error) {
                console.error('Error de disponibilidad', error);
            }
        };

        fetchSuiteInfo();
        checkAvailability();
    }, [suiteID]);

    useEffect(() => {
        flatpickr("#datePicker", {
            disable: disabledDates.map(date => flatpickr.parseDate(date, "Y-m-d")),
            dateFormat: "Y-m-d",
            onChange: (selectedDates, dateStr) => setValue("date", dateStr),
        });
    }, [disabledDates, setValue]);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        const reservationData = {
            id_suite: suiteID,
            user_email: data.email, 
            date: data.date,
        };

        console.log('Submitting Reservation Data:', reservationData);

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/create-reservation`, reservationData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.data.ok) {
                alert('Reservacion exitosa');
                reset()
            } else {
                alert('Error en la reservacion');
            }
        } catch (error) {
            console.error('Error de reserva:', error.response ? error.response.data : error);
            alert('Error en la reserva intente mas tarde');
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
                    Asegurate de reservar tu habitacion con antelacion para disfrutar de una experiencia comoda y placentera
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-gray-800">
                            <MailIcon className="h-5 w-5 inline-block mr-1 text-contentColor" /> Email para la reserva
                        </label>
                        <input
                            type="email"
                            placeholder="Ingrese su email"
                            {...register("email", { required: "El email es requerido" })}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-contentColor "
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">{errors.email.message}</span>
                        )}
                    </div>

                    {/* Date Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-gray-800">
                            <CalendarIcon className="h-5 w-5 inline-block mr-1 text-contentColor" /> Fecha de Reserva
                        </label>
                        <input
                            type="text"
                            id="datePicker"
                            placeholder="Seleccione la fecha"
                            {...register("date", { required: "La fecha es requerida" })}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-contentColor"
                        />
                        {errors.date && (
                            <span className="text-red-500 text-sm">{errors.date.message}</span>
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
