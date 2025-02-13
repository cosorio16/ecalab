function About() {
  return (
    <section className="bg-slate-50 px-16 py-10">
      <div className="flex flex-col gap-4">
        {/* Sección principal */}
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-semibold">¿Quiénes somos?</h1>
          <p className="text-2xl font-medium">
            Somos un laboratorio con más de 5 años de experiencia enfocado en el
            diagnóstico de pequeñas especies. Priorizamos la calidad en los
            resultados, respaldados por un equipo altamente capacitado y
            tecnología avanzada.
          </p>
        </div>

        {/* Servicios */}
        <div className="grid grid-cols-3 gap-5">
          <div className="flex border border-slate-300 flex-col shadow bg-white rounded p-4">
            <h2 className="text-2xl">Servicio de mensajería</h2>
            <p className="text-lg">
              Contamos con personal capacitado para la recolección y manejo de
              muestras. Consulta disponibilidad en tu zona.
            </p>
          </div>
          <div className="flex border border-slate-300 flex-col shadow bg-white rounded p-4">
            <h2 className="text-2xl">Toma de muestra</h2>
            <p className="text-lg">
              En nuestras instalaciones realizamos desde pruebas básicas como
              hemograma y bioquímica hasta estudios avanzados como evaluación de
              líquido cefalorraquídeo y médula ósea.
            </p>
          </div>
          <div className="flex border border-slate-300 flex-col shadow bg-white rounded p-4">
            <h2 className="text-2xl">Asesoría técnica</h2>
            <p className="text-lg">
              Contamos con médicos especializados en diversas áreas que pueden
              brindar apoyo en diagnósticos y tratamientos.
            </p>
          </div>
        </div>
        
        <p className="text-2xl font-medium">
          En nuestro laboratorio, entendemos la importancia de un diagnóstico
          preciso y oportuno para el bienestar de las mascotas. Trabajamos en
          estrecha colaboración con médicos veterinarios, proporcionando
          resultados confiables que permiten tomar decisiones clínicas
          informadas. Nuestro enfoque se basa en la innovación, el uso de
          tecnología avanzada y la mejora continua de nuestros procesos para
          ofrecer un servicio que marque la diferencia en la vida de los
          animales y sus cuidadores.
        </p>

        {/* Estadísticas */}
        <div className="grid grid-cols-4">
          <div className="border border-slate-300 rounded bg-white shadow w-fit px-20 py-5 flex flex-col items-center">
            <h2 className="font-bold text-4xl">19</h2>
            <p className="font-medium text-xl">Equipo</p>
          </div>
          <div className="border border-slate-300 rounded bg-white shadow w-fit px-20 py-5 flex flex-col items-center">
            <h2 className="font-bold text-4xl">1</h2>
            <p className="font-medium text-xl">Sucursales</p>
          </div>
          <div className="border border-slate-300 rounded bg-white shadow w-fit px-20 py-5 flex flex-col items-center">
            <h2 className="font-bold text-4xl">50</h2>
            <p className="font-medium text-xl">Tipos de análisis</p>
          </div>
          <div className="border border-slate-300 rounded bg-white shadow w-fit px-20 py-5 flex flex-col items-center">
            <h2 className="font-bold text-4xl">8</h2>
            <p className="font-medium text-xl">Reconocimientos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
