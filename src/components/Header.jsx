function Header() {
  return (
    <>
      <header className="hidden max-w-screen shadow py-10 px-20 lg:flex justify-between items-center text-[#222]">
        <h1 className="text-xl font-medium uppercase">Ecalab DV</h1>
        <nav className="flex items-center gap-14 text-lg">
          <a
            href="#"
            className="hover:text-[#1977cc] font-semibold transition-all text-xl "
          >
            Inicio
          </a>
          <a
            href="#"
            className="hover:text-[#1977cc] font-semibold transition-all text-xl"
          >
            Nosotros
          </a>
          <a
            href="#"
            className="hover:text-[#1977cc] font-semibold transition-all text-xl"
          >
            Servicios
          </a>

          <button className="w-fit px-10 py-3 border rounded bg-orange-400 text-lg font-medium flex items-center gap-5 text-white">
            <svg width="25" height="25" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 14a1 1 0 1 0-1-1a1 1 0 0 0 1 1m5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1m-5 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1m5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1M7 14a1 1 0 1 0-1-1a1 1 0 0 0 1 1M19 4h-1V3a1 1 0 0 0-2 0v1H8V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM7 18a1 1 0 1 0-1-1a1 1 0 0 0 1 1"
              />
            </svg>
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
