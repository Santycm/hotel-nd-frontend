import React from 'react';

const Features = () => {
  const rooms = [
    {
      imageUrl: "https://static.casadomo.com/media/2017/10/mood-rooms-habitaciones-hotel-emociones-huespedes.png",
      description: "Esta es una habitación espaciosa con todas las comodidades necesarias para una estancia confortable."
    },
    {
      imageUrl: "https://static.casadomo.com/media/2017/10/mood-rooms-habitaciones-hotel-emociones-huespedes.png",
      description: "Habitación con vistas al mar y una decoración moderna."
    },
    {
      imageUrl: "https://static.casadomo.com/media/2017/10/mood-rooms-habitaciones-hotel-emociones-huespedes.png",
      description: "Habitación acogedora con una cama king size y baño privado."
    },
    {
      imageUrl: "https://static.casadomo.com/media/2017/10/mood-rooms-habitaciones-hotel-emociones-huespedes.png",
      description: "Habitación de lujo con jacuzzi y balcón privado."
    }
  ];

  return (
    <div>
      {rooms.map((room, index) => (
        <div 
          key={index} 
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-4 rounded-lg shadow-md mb-4 ${index % 2 !== 0 ? 'bg-mainColor' : 'bg-gray-100'}`}
        >
          {index % 2 === 0 ? (
            <>
              <div className="room-image">
                <img src={room.imageUrl} alt={`Room ${index + 1}`} className="w-full h-auto rounded-lg" />
              </div>
              <div className="room-description text-lg p-4">
                <p className="text-gray-700">{room.description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="room-description text-lg p-4">
                <p className="text-white">{room.description}</p>
              </div>
              <div className="room-image">
                <img src={room.imageUrl} alt={`Room ${index + 1}`} className="w-full h-auto rounded-lg" />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Features;