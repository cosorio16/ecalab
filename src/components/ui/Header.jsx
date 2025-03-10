import Calendar from "../../icons/Calendar";

function Header() {
  return (
    <>
      <header className="hidden max-w-screen shadow-md py-5 px-20 lg:flex justify-between items-center text-[#222] gap-10">
        {/* <h1
          data-aos="fade-right"
          className="text-4xl font-bold uppercase text-[#6cc4cc]"
        >
          Ecalab DV
        </h1> */}

        <img
          src="/logos/1.jpg"
          alt=""
          className="size-24 aspect-square object-cover mix-blend-multiply"
        />
        <nav className="flex items-center gap-14 text-lg">
          <a
            data-aos="fade-down"
            href="#"
            className="hover:text-[#6cc4cc] font-semibold transition-all text-xl "
          >
            Inicio
          </a>
          <a
            data-aos="fade-down"
            href="#"
            className="hover:text-[#6cc4cc] font-semibold transition-all text-xl"
          >
            Nosotros
          </a>
          <a
            data-aos="fade-down"
            href="#"
            className="hover:text-[#6cc4cc] font-semibold transition-all text-xl"
          >
            Servicios
          </a>

          <button
            data-aos="fade-left"
            className="w-fit px-10 py-3 border rounded bg-[#6cc4cc] text-lg font-semibold flex items-center gap-5 text-white cursor-pointer"
          >
            <Calendar sizes={25} />
            Agendar cita
          </button>
        </nav>
      </header>

      <header className="max-w-screen h-20 bg-[#64b2b9] lg:hidden flex items-center px-5">
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
