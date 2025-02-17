import Calendar from "../../icons/Calendar";

function Header() {
  return (
    <>
      <header className="hidden max-w-screen shadow-md py-10 px-20 lg:flex justify-between items-center text-[#222] gap-10">
        <h1
          data-aos="fade-right"
          className="text-4xl font-bold uppercase text-blue-500"
        >
          Ecalab DV
        </h1>
        <nav className="flex items-center gap-14 text-lg">
          <a
            data-aos="fade-down"
            href="#"
            className="hover:text-[#1977cc] font-semibold transition-all text-xl "
          >
            Inicio
          </a>
          <a
            data-aos="fade-down"
            href="#"
            className="hover:text-[#1977cc] font-semibold transition-all text-xl"
          >
            Nosotros
          </a>
          <a
            data-aos="fade-down"
            href="#"
            className="hover:text-[#1977cc] font-semibold transition-all text-xl"
          >
            Servicios
          </a>

          <button
            data-aos="fade-left"
            className="w-fit px-10 py-3 border rounded bg-blue-400 text-lg font-medium flex items-center gap-5 text-white"
          >
            <Calendar sizes={25} />
            Agendar cita
          </button>
        </nav>
      </header>

      <header className="max-w-screen h-20 bg-[#2c3e50] lg:hidden flex items-center px-5">
        <button className="text-white">
          <svg width="50" height="50" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"
            />
          </svg>
        </button>
      </header>
    </>
  );
}

export default Header;
