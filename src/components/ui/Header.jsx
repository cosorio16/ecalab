import { useState } from "react";
import Calendar from "../../icons/Calendar";
import Menu from "./Menu";
import MenuIcon from "../../icons/MenuIcon";
import Close from "../../icons/Close";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
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

      <header className="max-w-screen h-20 bg-[#64b2b9] lg:hidden flex items-center px-5 fixed w-screen top-0 left-0 z-10 justify-between">
      <img src="/logos/1.jpg" alt="" className="size-16 mix-blend-multiply"/>
        <button
          onClick={() => setShowMenu((showMenu) => !showMenu)}
          className="text-white"
        >
          {showMenu ? <Close sizes={50} /> : <MenuIcon sizes={50} />}
        </button>
        <Menu state={showMenu} onClose={() => setShowMenu(false)} />
      </header>
    </>
  );
}

export default Header;
