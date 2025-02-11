function Header() {
  return (
    <header className="w-screen shadow py-10 px-14 flex justify-between items-center text-[#222]">
      <h1 className="text-xl font-medium uppercase">Ecalab DV</h1>
      <nav className="flex items-center gap-10">
        <a
          href="#"
          className="hover:text-[#1977cc] font-semibold transition-all "
        >
          Inicio
        </a>
        <a
          href="#"
          className="hover:text-[#1977cc] font-semibold transition-all"
        >
          Nosotros
        </a>
        <a
          href="#"
          className="hover:text-[#1977cc] font-semibold transition-all"
        >
          Servicios
        </a>
        <a
          href="#"
          className="hover:text-[#1977cc] font-semibold transition-all"
        >
          Otros
        </a>
        <a
          href="#"
          className="hover:text-[#1977cc] font-semibold transition-all"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}

export default Header;
