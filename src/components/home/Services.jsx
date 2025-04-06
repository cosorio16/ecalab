import data from "../../lib/def";
import Card from "../ui/Card";

function Services() {
  const images = [
    "/services/hematologia.webp",
    "/services/bioquimca.jpg",
    "/services/urianalisis.jpg",
    "/services/cipatologia.jpg",
    "/services/histopatologia.jpg",
    "/services/microbiologia.jpg",
    "/services/serologia.webp",
    "/services/diagnostico molecular.webp",
  ];

  return (
    <section id="SERVICIOS"  className="py-10 px-5 lg:px-10 2xl:px-12 flex flex-col gap-10 border-b-2 border-slate-300 pb-20">
      <div className="flex flex-col gap-5">
        <h1
          data-aos="fade-right"
          className="text-4xl lg:text-5xl font-semibold flex text-center gap-4"
        >
          Nuestros Servicios
          <span className="text-[#6cc4cc]">
            <svg width="45" height="45" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z"
              />
            </svg>
          </span>
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <p data-aos="fade-left" className="text-lg lg:text-2xl font-medium">
            Nuestra prioridad es brindar un servicio eficiente y de alta
            calidad, adaptado a las necesidades de los profesionales
            veterinarios. Con la apertura de nuestro primer laboratorio,
            ofrecemos un trato más personalizado y tiempos de respuesta
            optimizados.
          </p>
          <p data-aos="fade-left" className="text-lg lg:text-2xl font-medium">
            Contamos con un amplio catálogo de pruebas, incluyendo patología,
            microbiología, alergología, biología molecular, higiene, genética y
            más, asegurando diagnósticos precisos para una mejor atención
            clínica.
          </p>
        </div>
      </div>
      <div className="lg:grid flex overflow-x-scroll lg:overflow-hidden lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 justify-items-stretch w-full p-2 scrollCards">
        {data.services.map((s, i) => (
          <Card
            image={images[i]}
            key={i}
            description={s.descripcion}
            recommendations={s.recomendaciones}
            title={s.title}
            metodos={s.metodos}
            ventajas={s.ventajas}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
