import React from "react";

function Menu({ state, onClose }) {
  return (
    <div
      onClick={onClose}
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
          <li className="border-b  text-lg font-semibold text-start px-5 flex">
            <a className="py-3 min-w-full" href="#HOME">
              Inicio
            </a>
          </li>
          <li className="border-b  text-lg font-semibold text-start px-5 flex">
            <a className="py-3 min-w-full" href="#SERVICIOS">
              Servicios
            </a>
          </li>
          <li className="border-b  text-lg font-semibold text-start px-5 flex">
            <a className="py-3 min-w-full" href="#CONTACTANOS">
              Ubicaciones
            </a>
          </li>
          <li className="border-b  text-lg font-semibold text-start px-5 flex">
            <button className="py-3">Agendar Ahora</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
