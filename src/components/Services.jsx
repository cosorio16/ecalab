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
    <section className="p-10">
      <h1>SERVICIOS</h1>
      <p>
        Nuestra prioridad es brindar un servicio eficiente y de alta calidad,
        adaptado a las necesidades de los profesionales veterinarios. Con la
        apertura de nuestro primer laboratorio, ofrecemos un trato más
        personalizado y tiempos de respuesta optimizados. Contamos con un amplio
        catálogo de pruebas, incluyendo patología, microbiología, alergología,
        biología molecular, higiene, genética y más, asegurando diagnósticos
        precisos para una mejor atención clínica.
      </p>
      <div className="grid grid-cols-3 gap-10 justify-items-center">
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
