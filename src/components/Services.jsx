import Card from "./Card";
import services from "../lib/def";

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
    <section className="py-10 px-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-semibold">Nuestros Servicios</h1>
        <p className="text-2xl font-medium">
          Nuestra prioridad es brindar un servicio eficiente y de alta calidad,
          adaptado a las necesidades de los profesionales veterinarios. Con la
          apertura de nuestro primer laboratorio, ofrecemos un trato más
          personalizado y tiempos de respuesta optimizados.
        </p>
        <p className="text-2xl font-medium">
          Contamos con un amplio catálogo de pruebas, incluyendo patología,
          microbiología, alergología, biología molecular, higiene, genética y
          más, asegurando diagnósticos precisos para una mejor atención clínica.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 justify-items-stretch">
        {services.map((s, i) => (
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
