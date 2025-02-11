function Hero() {
  return (
    <section className="px-20 py-40 text-center flex flex-col gap-14">
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-semibold ">
          Diagnóstico Veterinario Avanzado para Mejor Atención
        </h1>
        <p className="text-4xl font-medium">
          Servicios de laboratorio de última generación que proporcionan
          resultados precisos y oportunos para profesionales veterinarios.
          Confíe en nuestra experiencia para soluciones diagnósticas integrales.
        </p>
      </div>
      <div className="flex items-center gap-10 justify-center">
        <button className="px-10 py-4 border rounded bg-[#222] text-white text-xl font-medium w-80">
          Agrendar Cita
        </button>
        <button className="px-10 py-4 border rounded bg-[#222] text-white text-xl font-medium w-80">
          Contactar
        </button>
      </div>
    </section>
  );
}

export default Hero;
