import Carrusel from "./Carrusel";
import Chat from "./Chat";
import Question from "./Question";
import Modal from "../components/Modal";

function Hero() {
  return (
    <section className="px-5 lg:px-20 py-5 text-[#2C3E50] grid grid-cols-1 gap-10 justify-items-end lg:grid-cols-2 items-center border-b-2 border-slate-300 pb-20">
      <div className="flex flex-col gap-10 lg:items-start items-center ">
        <div className="flex flex-col gap-4">
          <span
            data-aos="zoom-in-up"
            className=" text-sm lg:text-base rounded-full w-fit px-6 py-3 font-semibold bg-sky-50 text-sky-500 flex items-center justify-center"
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
        <div className="flex flex-wrap w-full gap-5 lg:gap-10">
          <button
            data-aos="fade-up"
            className="min-w-fit py-3 border rounded bg-blue-500  cursor-pointer justify-center w-52 lg:px-16 text-white text-lg font-medium flex items-center gap-5"
          >
            Leer Mas
            <svg width="25" height="25" viewBox="0 0 15 15">
              <path
                fill="currentColor"
                d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
              />
            </svg>
          </button>
          <button
            data-aos="fade-up"
            className="min-w-fit py-3 border rounded text-blue-500  cursor-pointer justify-center w-52 lg:px-16 text-lg font-medium flex items-center gap-5"
          >
            <svg width="25" height="25" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 14a1 1 0 1 0-1-1a1 1 0 0 0 1 1m5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1m-5 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1m5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1M7 14a1 1 0 1 0-1-1a1 1 0 0 0 1 1M19 4h-1V3a1 1 0 0 0-2 0v1H8V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM7 18a1 1 0 1 0-1-1a1 1 0 0 0 1 1"
              />
            </svg>
            Agendar cita
          </button>
        </div>
      </div>
      <div className="hidden lg:inline shadow-xl ring-4 ring-offset-4 ring-blue-200 hover:ring-blue-300 w-full rounded-lg h-150 transition-all duration-500">
        <Carrusel />
      </div>

      <div className="fixed right-10 bottom-10 flex items-center gap-2 z-10">
        <Chat />
        <Question />
        {/* <Modal /> */}
      </div>
    </section>
  );
}

export default Hero;
