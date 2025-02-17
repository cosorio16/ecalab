function About() {
  return (
    <section className="bg-slate-50 px-16 py-14 flex flex-col gap-10">
      {/* Sección principal */}
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-semibold">¿Quiénes somos?</h1>
        <p className="text-2xl font-medium">
          Somos un laboratorio con más de 5 años de experiencia enfocado en el
          diagnóstico de pequeñas especies. Priorizamos la calidad en los
          resultados, respaldados por un equipo altamente capacitado y
          tecnología avanzada.
        </p>
      </div>

      {/* Servicios */}
      {/* <div className="grid grid-cols-2 gap-20">
        <div className="gap-2 flex border border-slate-300 flex-col shadow bg-white rounded px-8 py-10">
          <h2 className="text-3xl font-semibold">Toma de muestra</h2>
          <p className="text-lg">
            En nuestras instalaciones realizamos desde pruebas básicas como
            hemograma y bioquímica hasta estudios avanzados como evaluación de
            líquido cefalorraquídeo y médula ósea.
          </p>
        </div>
        <div className="gap-2 flex border border-slate-300 flex-col shadow bg-white rounded px-8 py-10">
          <h2 className="text-3xl font-semibold">Servicio de mensajería</h2>
          <p className="text-lg">
            Contamos con personal capacitado para la recolección y manejo de
            muestras.
          </p>
          <button className="w-96 flex items-center gap-2 border rounded px-5 py-2 font-semibold bg-blue-400 text-white cursor-pointer hover:gap-5 transition-all duration-300 justify-center m-auto mt-10">
            <svg width="20" height="25" viewBox="0 0 304 432">
              <path
                fill="currentColor"
                d="M149 3q62 0 106 43.5T299 152q0 31-15.5 71.5t-37.5 75t-44 65t-37 48.5l-16 17q-6-6-16-18t-35.5-46.5t-45.5-67T16 224T0 152Q0 90 43.5 46.5T149 3m0 202q22 0 38-15.5t16-37.5t-16-37.5T149 99t-37.5 15.5T96 152t15.5 37.5T149 205"
              />
            </svg>
            Consulta disponibilidad en tu zona
          </button>
        </div>
        <div className="gap-2 flex border border-slate-300 flex-col shadow bg-white rounded px-8 py-10">
          <h2 className="text-3xl font-semibold">Asesoría técnica</h2>
          <p className="text-lg">
            Contamos con médicos especializados en diversas áreas que pueden
            brindar apoyo en diagnósticos y tratamientos.
          </p>
        </div>
      </div> */}

      <p className="text-2xl font-medium">
        En nuestro laboratorio, entendemos la importancia de un diagnóstico
        preciso y oportuno para el bienestar de las mascotas. Trabajamos en
        estrecha colaboración con médicos veterinarios, proporcionando
        resultados confiables que permiten tomar decisiones clínicas informadas.
        Nuestro enfoque se basa en la innovación, el uso de tecnología avanzada
        y la mejora continua de nuestros procesos para ofrecer un servicio que
        marque la diferencia en la vida de los animales y sus cuidadores.
      </p>

      {/* Estadísticas */}
      {/* <div className="grid grid-cols-4 justify-items-center gap-10">
        <div className="border border-slate-300 rounded bg-white shadow min-w-fit w-96 py-5 flex flex-col items-center">
          <h2 className="font-bold text-4xl">19</h2>
          <p className="font-medium text-xl">Equipo</p>
        </div>
        <div className="border border-slate-300 rounded bg-white shadow min-w-fit w-96 py-5 flex flex-col items-center">
          <h2 className="font-bold text-4xl">1</h2>
          <p className="font-medium text-xl">Sucursales</p>
        </div>
        <div className="border border-slate-300 rounded bg-white shadow min-w-fit w-96 py-5 flex flex-col items-center">
          <h2 className="font-bold text-4xl">50</h2>
          <p className="font-medium text-xl">Tipos de análisis</p>
        </div>
        <div className="border border-slate-300 rounded bg-white shadow min-w-fit w-96 py-5 flex flex-col items-center">
          <h2 className="font-bold text-4xl">8</h2>
          <p className="font-medium text-xl">Reconocimientos</p>
        </div>
      </div> */}
    </section>
  );
}

export default About;
