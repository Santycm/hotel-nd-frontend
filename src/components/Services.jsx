import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa los estilos de Font Awesome
import '../styles/Services.css';


const Services = () => {
    const icons = [
        {
            id: 1,
            name: 'Wifi',
            icon: 'fas fa-wifi',
        },
        {
            id: 2,
            name: 'Cafetería',
            icon: 'fas fa-coffee',
        },
        {
            id: 3,
            name: 'Estacionamiento',
            icon: 'fas fa-parking',
        },
        {
            id: 4,
            name: 'Piscina',
            icon: 'fas fa-swimming-pool',
        },
        {
            id: 5,
            name: 'Gimnasio',
            icon: 'fas fa-dumbbell',
        },
        {
            id: 6,
            name: 'Spa',
            icon: 'fas fa-spa',
        },
    ]
    return(
        <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {
                icons.map(icon => (
                    <div key={icon.id} className="service bg-thirdColor p-10 shadow-lg rounded-lg overflow-hidden flex flex-col text-center items-center justify-center">
                        <i className={`${icon.icon} text-4xl text-secondColor`}></i>
                        <p className="text-secondColor text-lg font-semibold ml-2">{icon.name}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Services;