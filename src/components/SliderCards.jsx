import { useState, useEffect } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SliderCards = () => {
  const [cards, setCards] = useState([]);

  const redirect = useNavigate();

  useEffect(() => {
    const fetchSuites = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/suites`);
        setCards(data.suites);
      } catch (error) {
        console.error("Error fetching suites:", error);
      }
    };

    fetchSuites();
  }, []);

  const handleReserve = (id) => {
    redirect(`/reservation?ID=${id}`); 
  };

  return (
    <section className="container mx-auto mb-14">
      <Splide
        className="w-full"
        hasTrack={false}
        options={{
          type: "loop",
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          perPage: 3,
          gap: "1rem",
          breakpoints: {
            640: {
              perPage: 1, 
              gap: "0.5rem", 
            },
            768: {
              perPage: 2, 
            },
          },
        }}
        aria-label="Card Slider"
      >
        <div className="custom-wrapper relative">
          <SplideTrack className="w-full">
            {cards.map((card) => (
              <SplideSlide key={card.id_suite}>
                <article className="flex flex-col h-full p-4 bg-white shadow-md rounded-lg group">
                  <img
                    className="h-[200px] w-full object-cover rounded-t-lg"
                    src={card.image_gallery[0] || ""}
                    alt={card.description}
                  />
                  <div className="card-info flex-grow p-4">
                    <h2 className="text-xl font-bold mb-2">{card.name}</h2>
                    <p className="text-gray-500 font-semibold">${card.price}</p>
                    <p className="text-gray-400 font-semibold">{card.description}</p>
                    <p className="text-gray-400 font-semibold">Capacidad: {card.capacity}</p>
                  </div>
                  <div className="flex items-center justify-center py-4">
                    <button
                      className="relative bottom-[-50px] transition-all duration-300 ease-in-out group-hover:bottom-0 bg-secondColor text-white font-semibold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100"
                      onClick={() => handleReserve(card.id_suite)}
                    >
                      Reservar ahora
                    </button>
                  </div>
                </article>
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>
      </Splide>
    </section>
  );
};
