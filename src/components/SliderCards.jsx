import { useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


export const SliderCards = () => {
  const [cards] = useState([
    {
      id: 1,
      src: "./src/assets/imgHotel1.jpg",
      title: "Suite precidencial",
      description:
        "La habitación del hotel es un refugio acogedor y moderno, con paredes pintadas en tonos suaves que aportan tranquilidad. Una cama king-size, vestida con sábanas de algodón de alta calidad, ocupa el centro del espacio, flanqueada por mesas de noche con lámparas suaves. Un escritorio funcional se encuentra junto a una ventana, ofreciendo luz natural y una vista relajante. El baño en suite cuenta con una ducha de vidrio y artículos de tocador de lujo. ",
    },
    {
      id: 2,
      src: "./src/assets/imgHotel1.jpg",
      title: "Suite familiar",
      description: "La habitación del hotel es un refugio acogedor y moderno, con paredes pintadas en tonos suaves que aportan tranquilidad. Una cama king-size, vestida con sábanas de algodón de alta calidad, ocupa el centro del espacio, flanqueada por mesas de noche con lámparas suaves. Un escritorio funcional se encuentra junto a una ventana, ofreciendo luz natural y una vista relajante.",
    },
    {
      id: 3,
      src: "./src/assets/imgHotel1.jpg",
      title: "Suite Naranja",
      description: "La habitación del hotel es un refugio acogedor y moderno, con paredes pintadas en tonos suaves que aportan tranquilidad. Una cama king-size, vestida con sábanas de algodón de alta calidad, ocupa el centro del espacio, flanqueada por mesas de noche con lámparas suaves. Un escritorio funcional se encuentra junto a una ventana, ofreciendo luz natural y una vista relajante.",
    },
    {
      id: 4,
      src: "./src/assets/imgHotel1.jpg",
      title: "Suite Homo",
      description: "La habitación del hotel es un refugio acogedor y moderno, con paredes pintadas en tonos suaves que aportan tranquilidad. Una cama king-size, vestida con sábanas de algodón de alta calidad, ocupa el centro del espacio, flanqueada por mesas de noche con lámparas suaves. Un escritorio funcional se encuentra junto a una ventana, ofreciendo luz natural y una vista relajante.",
    },
  ]);
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
          perPage: 3, // Display 3 cards per page
          gap: "1rem", // Add gap between cards
        }}
        aria-label="Card Slider"
      >
        <div className="custom-wrapper relative">
          <SplideTrack className="w-full">
            {cards.map((card, index) => (
              <SplideSlide key={index}>
                <article className="p-4 bg-white shadow-md rounded-lg group">
                  <img
                    className="h-[200px] w-full object-cover rounded-t-lg"
                    src={card.src}
                    alt={card.description}
                  />
                  <div className="card-info p-4">
                    <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                    <p className="text-gray-400 font-semibold line-clamp-6">
                      {card.description}
                    </p>
                    <div className="flex items-center justify-center py-10 ">
                      <a
                        className="absolute translate-y-20 transition-all duration-300 ease-in-out group-hover:bg-blue-300 px-4 rounded-lg group-hover:translate-y-0 bg-transparent"
                        href=""
                      >
                        Reservar ahora
                      </a>
                    </div>
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
