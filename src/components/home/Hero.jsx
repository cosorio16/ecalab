import Carrusel from "../Carrusel";
import Chat from "../Chat";
import Question from "../Question";
import Arrow from "../../icons/Arrow";
import Calendar from "../../icons/Calendar";
import Modal from "../Modal";

function Hero() {
  return (
    <section className="px-5 lg:px-20 py-5 text-[#2C3E50] grid grid-cols-1 gap-10 justify-items-end lg:grid-cols-2 items-center border-b-2 border-slate-300 pb-20">
      <div className="flex flex-col gap-10 lg:items-start items-center ">
        <div className="flex flex-col gap-4 items-center justify-items-center text-center lg:justify-items-start lg:text-start lg:items-start">
          <span
            data-aos="zoom-in-up"
            className=" text-sm lg:text-base rounded-full w-fit px-6 py-3 font-semibold bg-sky-50 text-[#6cc4cc] flex items-center justify-center"
          >
            Bienvenidos a ECALAB DV
          </span>
          <h1
            data-aos="fade-right"
            className="text-4xl xl:text-6xl font-semibold "
          >
            Diagnóstico Veterinario
          </h1>
          <p data-aos="fade-right" className="text-xl xl:text-2xl font-medium">
            Servicios de laboratorio de última generación que proporcionan
            resultados precisos y oportunos para profesionales veterinarios.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-wrap gap-2 lg:gap-10 lg:w-full"
        >
          <button className="min-w-fit py-3 border hover:ring-2 hover:ring-offset-2 hover:border-transparent active:scale-95 rounded bg-[#6cc4cc]  cursor-pointer justify-center w-52 lg:px-16 text-white text-lg font-semibold flex items-center gap-5 transition-all duration-200">
            Leer Mas
            <Arrow sizes={25} />
          </button>
          <button className="min-w-fit py-3 border hover:ring-2 hover:ring-offset-2 hover:border-transparent active:scale-95 rounded text-[#6cc4cc]  cursor-pointer justify-center w-52 lg:px-16 text-lg font-semibold flex items-center gap-5 transition-all duration-200">
            <Calendar sizes={25} />
            Agendar cita
          </button>
        </div>
      </div>
      <div className="hidden lg:inline shadow-xl ring-4 ring-offset-4 ring-[#8cd5db] hover:ring-[#64b2b9] w-full rounded-lg h-150 transition-all duration-500">
        <Carrusel />
      </div>

      <div className="hidden fixed right-10 bottom-10 lg:flex items-center gap-2 z-10">
        <Chat />
      </div>
    </section>
  );
}

export default Hero;
