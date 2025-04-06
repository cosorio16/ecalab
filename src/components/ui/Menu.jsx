import React from "react";

function Menu({ state }) {
  return (
    <div
      className={`fixed text-white inset-0 bg-black/50 z-10 top-19 ${
        state ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-all`}
    >
      <div
        className={`h-fit w-full bg-[#64b2b9] ${
          state ? "translate-0" : "-translate-y-3 opacity-0"
        }transition-all duration-300 `}
      >
        <ul className={`h-full flex flex-col `}>
          <li className="border-b py-3 text-lg font-semibold text-start px-5">
            <a href="#">Inicio</a>
          </li>
          <li className="border-b py-3 text-lg font-semibold text-start px-5">
            <a href="#">Servicios</a>
          </li>
          <li className="border-b py-3 text-lg font-semibold text-start px-5">
            <a href="#">Ubicaciones</a>
          </li>
          <li className="border-b py-3 text-lg font-semibold text-start px-5">
            <button>Agendar Ahora</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
