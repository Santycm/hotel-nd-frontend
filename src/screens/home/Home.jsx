import { Slider } from "/src/components/Slider.jsx";
import { SliderCards } from "/src/components/SliderCards.jsx";
import NavBar from "../../components/NavBar.jsx";
import fondo from "../../assets/fondo.png";

function Home() {
  return (
    <div className="bg-cover h-full min-h-screen bg-slate-900">
      <NavBar />
      <Slider />
      <section className="container mx-auto ">
        <h1  className="text-[28px] text-purple-200 font-bold text-2xl mb-4 text-center">Habitaciones en tendencias</h1>
        <SliderCards />
      </section>
      <section className="flex flex-col justify-center items-center  container mx-auto p-6 border-2 rounded-lg border-blue-400 mt-6">
        <h1 className="text-[28px] text-blue-700 font-bold text-2xl mb-4">Conocenos</h1>
        <div className="w-2/4 border-b-4 border-blue-500 mb-10"></div>
        <article className="grid lg:grid-cols-3 max-w-6xl gap-10 ">
            <figure className="lg:col-span-1 col-span-2 p-4 rounded-lg shadow-2xl flex items-center justify-center lg:order-1 order-2">
                <img className="rounded-lg shadow-2xl  w-[500px]" src={fondo} alt="Conocenos" />
            </figure>
            <section className="col-span-2 flex flex-col items-start justify-start p-[30px] lg:order-2 order-1">
                <h2 className="text-[24px] text-white font-bold">Hotel La manguita</h2>
                <span className="text-white">
                ¡Bienvenidos al refugio que transforma cada estancia en una experiencia inolvidable! Imagina un lugar donde la comodidad y la elegancia se fusionan, donde cada rincón está diseñado para satisfacer tus deseos más exigentes. Desde nuestras lujosas habitaciones hasta el servicio personalizado que te hará sentir como en casa, estamos aquí para hacer que tu visita sea única. Prepárate para explorar un mundo de relajación y aventura, donde cada día trae nuevas sorpresas. ¡Descubre tu hogar lejos de casa!</span>
            </section>
        </article>
      </section>
    </div>
  );
}

export default Home;
