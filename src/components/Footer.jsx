import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const sections = [
  {
    title: "Ubicaconos",
    items: ["Medellin", "San Pedro", "San Cristobal"],
  },
  {
    title: "Soporte",
    items: ["Precios", "Guias", "Preguntas frecuestes"],
  },
  {
    title: "Sobre Nosotros",
    items: ["Contactanos", "Blog", ],
  },
  
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-gray-500 hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Ingresa tu correo</p>
          <p className="py-4">
            Ingresa tu correo para recibir las últimas noticias y ofertas
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 Hotel la Manguita, Derechos reservados</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {items.map((x, index) => {
            return <x.icon key={index} className="hover:text-white" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;