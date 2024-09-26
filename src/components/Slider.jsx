import React from "react";
import { useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
export const Slider = () => {
    const [images, setImages] = useState([
        { id: 1, src: "./src/assets/imgHotel1.jpg" },
        { id: 2, src: "./src/assets/imgHotel1.jpg" },
        { id: 3, src: "./src/assets/imgHotel1.jpg" },
      ]);
    return (
        <section className="container w-full h-[350px] mx-auto">
      <Splide className="h-[350px] w-full"
          hasTrack={false}
          options={{
            type: "loop",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            heightRatio: 0.5,
          }}
          aria-label="Image Slider"
        >
          <div className="custom-wrapper relative  ">
            <button className="splide__toggle absolute bottom-1 lg:left-[45%] left-[40%] z-10 bg-blue-400 px-2 rounded-lg" type="button">
              <span className="splide__toggle__play">
                <FontAwesomeIcon icon={faPlay} />
              </span>
              <span className="splide__toggle__pause">
                <FontAwesomeIcon icon={faPause} />
              </span>
              
            </button>
            <div className="splide__pagination absolute bg-blue-500 opacity-60 bottom-0 p-2 w-full">
              <div className="splide__pagination__page  bg-red-500 " />
            </div>
            <div className="splide__progress absolute bg-blue-500 -bottom-2 left-0 w-full">
              <div className="splide__progress__bar" />
            </div>

            <SplideTrack className="h-[350px] w-full">
              {images.map((image, index) => (
                <SplideSlide key={index}>
                  <img className="h-[350px] w-full object-cover" src={image.src} alt={image.alt} />
                </SplideSlide>
              ))}
            </SplideTrack>
          </div>
        </Splide>
      </section>
    )
}