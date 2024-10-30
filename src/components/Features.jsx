import React from 'react';

const Features = () => {
  const rooms = [
    {
      imageUrl: "https://static.casadomo.com/media/2017/10/mood-rooms-habitaciones-hotel-emociones-huespedes.png",
      description: "Esta es una habitación espaciosa con todas las comodidades necesarias para una estancia confortable."
    },
    {
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/96/3e/22/exterior-view.jpg?w=1200&h=-1&s=1",
      description: "Habitación con vistas al mar y una decoración moderna."
    },
    {
      imageUrl: "https://www.kayak.com.co/rimg/himg/fe/d3/3c/expedia_group-2388317-c96abc-511314.jpg?width=968&height=607&crop=true",
      description: "Habitación acogedora con una cama king size y baño privado."
    },
    {
      imageUrl: "https://www.hola.com/horizon/landscape/f077d01fb697-habitaciones-hotel-9t-t.jpg",
      description: "Habitación de lujo con jacuzzi y balcón privado."
    }
  ];

  return (
    <div>
      {rooms.map((room, index) => (
        <div 
          key={index} 
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-4 rounded-lg shadow-md mb-4 ${index % 2 !== 0 ? 'bg-contentColor' : 'bg-gray-100'}`}
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