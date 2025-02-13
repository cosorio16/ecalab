function Hero() {
  return (
    <section className="px-20 py-8 gap-5 text-[#2C3E50] grid grid-cols-2 justify-items-end items-center">
      <div className="flex flex-col gap-10 items-start">
        <div className="flex flex-col gap-4">
          <span className="rounded-full w-fit px-6 py-3 font-semibold bg-sky-50 text-sky-500 flex items-center justify-center">
            Bienvenidos a ECALAB DV
          </span>
          <h1 className="text-6xl font-semibold ">Diagnóstico Veterinario</h1>
          <p className="text-2xl font-medium">
            Servicios de laboratorio de última generación que proporcionan
            resultados precisos y oportunos para profesionales veterinarios.
          </p>
        </div>
        <div className="flex items-center gap-10 justify-center">
          <button className="w-fit px-20 py-3 border rounded bg-orange-400 text-white text-lg font-medium flex items-center gap-5">
            Leer Mas
            <svg width="25" height="25" viewBox="0 0 15 15">
              <path
                fill="currentColor"
                d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
              />
            </svg>
          </button>
          <button className="w-fit px-20 py-3 border rounded text-orange-400 text-lg font-medium flex items-center gap-5">
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
      <div className="shadow-xl max-w-160 h-150">
        <img src="/10.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
      </div>

      <div className="fixed right-10 bottom-10 flex items-center gap-2">
        <button className="aspect-square bg-green-600 text-white rounded-full p-5 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer ">
          <svg width="25" height="25" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z"
            />
          </svg>
        </button>
        <button className="aspect-square bg-orange-400 text-white rounded-full p-5 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer ">
          <svg width="25" height="25" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path
                strokeDasharray="28"
                strokeDashoffset="28"
                d="M7 8c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5c0 1.64 -0.79 3.09 -2 4c-0.84 0.63 -3 2 -3 5"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.6s"
                  values="28;0"
                />
              </path>
              <path strokeDasharray="2" strokeDashoffset="2" d="M12 21v0.01">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.6s"
                  dur="0.2s"
                  values="2;0"
                />
              </path>
            </g>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Hero;
