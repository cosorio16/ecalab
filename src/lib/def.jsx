let services = [
  {
    title: "HEMATOLOGÍA",
    descripcion:
      "Análisis esencial para evaluar las células sanguíneas y su estado de salud.",
    recomendaciones: [
      "Asegurar que la muestra esté en condiciones óptimas.",
      "Evitar coágulos o cantidad insuficiente.",
      "Utilizar un tubo de tapón lila para su recolección.",
    ],
  },
  {
    title: "BIOQUÍMICA CLÍNICA",
    descripcion:
      "Prueba clave para diagnosticar afecciones a través del análisis de diversos órganos.",
    recomendaciones: [
      "Se recomienda el uso de suero, aunque también puede emplearse plasma.",
      "La muestra debe tener al menos 3 mL.",
      "Debe enviarse en un tubo de tapón rojo.",
    ],
  },
  {
    title: "URIANÁLISIS",
    descripcion:
      "Examen general de orina para evaluar el funcionamiento del tracto urinario.",
    recomendaciones: [
      "Se sugiere complementarlo con bioquímica sanguínea para un diagnóstico más preciso.",
      "El método más fiable es la cistocentesis.",
      "Evitar contaminación de la muestra para resultados más precisos.",
    ],
  },
  {
    title: "CITOPATOLOGÍA",
    descripcion:
      "Análisis microscópico de células que permite detectar alteraciones de manera rápida, económica y con mínima invasión.",
    metodos: ["Punción/aspirado con aguja fina", "Impronta", "Raspado"],
  },
  {
    title: "HISTOPATOLOGÍA",
    descripcion:
      "Estudio de la estructura microscópica de tejidos y órganos para identificar anomalías.",
    recomendaciones: [
      "Colocar el tejido en formol al 10% tras la extracción para evitar autólisis celular.",
      "Asegurar que el tamaño de la muestra sea suficiente para un diagnóstico preciso.",
      "Evitar el uso de desinfectantes que puedan alterar la estructura tisular.",
    ],
  },
  {
    title: "MICROBIOLOGÍA",
    descripcion:
      "Permite identificar agentes infecciosos y determinar el tratamiento adecuado.",
    recomendaciones: [
      "Las muestras deben transportarse en medios adecuados o extraerse de tejidos.",
      "Para pruebas micológicas, se requieren escamas, pelo o secreciones, según el caso.",
      "Se recomienda la toma de muestra antes de iniciar tratamiento antimicrobiano.",
    ],
  },
  {
    title: "SEROLOGÍA",
    descripcion:
      "Método rápido y sencillo para detectar anticuerpos o antígenos.",
    ventajas: [
      "Proporciona resultados en menos de 24 horas.",
      "Alta especificidad y sensibilidad.",
      "Requiere un volumen mínimo de muestra.",
    ],
  },
  {
    title: "DIAGNÓSTICO MOLECULAR",
    descripcion:
      "Técnica de alta precisión para detectar enfermedades infecciosas.",
    ventajas: [
      "Alta sensibilidad y especificidad.",
      "Permite detectar patógenos en etapas tempranas.",
      "Útil para la identificación de variantes genéticas.",
    ],
  },
];

let faq = [
  {
    question: "¿Cuál es el horario de atención?",
    answer:
      "Si necesitas recolección de muestras, llámanos al 55 4274 5321 y te informaremos sobre los horarios de servicio. Para la toma de muestras en nuestras instalaciones, agenda tu cita al 56 2160 7231. Recibimos muestras hasta las 18:00 hrs. Consulta los horarios de ruta haciendo clic en el siguiente enlace.",
    link: "#",
    text: "Ver horarios de ruta",
  },
  {
    question: "¿Cómo debo tomar mis muestras correctamente?",
    answer:
      "El procedimiento varía según el estudio que necesites realizar. Cada prueba tiene requisitos específicos, por lo que te recomendamos visitar nuestro blog para obtener información detallada y asegurarte de cumplir con todas las indicaciones.",
  },
  {
    question: "¿Debo seguir algún cuidado antes y después de la toma de muestra?",
    answer:
      "Para la mayoría de los estudios, es importante mantener un ayuno mínimo de 8 horas de sólidos y líquidos. Sin embargo, algunas pruebas requieren preparaciones específicas. Sigue siempre las indicaciones de tu médico para garantizar la precisión de los resultados y los cuidados necesarios después del procedimiento.",
  },
  {
    question: "¿Cuentan con un área especializada para la toma de muestras?",
    answer:
      "Sí, contamos con un espacio totalmente equipado para la toma de muestras, desde procedimientos básicos como análisis sanguíneos hasta estudios más complejos, como recolección de líquido cefalorraquídeo o médula ósea. Nuestro equipo está capacitado para brindarte un servicio seguro y profesional.",
  },
  {
    question: "¿Cómo saber qué pruebas son adecuadas para mi paciente?",
    answer:
      "La elección de las pruebas depende de varios factores, como el examen físico, la historia clínica y los tratamientos previos. Para obtener un diagnóstico preciso, te recomendamos consultar con un especialista que pueda orientarte sobre los estudios más adecuados.",
  },
  {
    question: "¿Cuánto tardan en entregarse los resultados?",
    answer:
      "Los resultados de bioquímica, hemograma y urianálisis estarán listos en un máximo de 24 horas. Para el resto de los estudios, los tiempos de entrega varían según la prueba. Consulta nuestro catálogo para conocer los tiempos específicos de cada análisis.",
  },
  {
    question: "¿Qué necesito para agendar mis estudios?",
    answer:
      "Para programar tu estudio, es necesario contar con una hoja de solicitud de servicio o una receta médica emitida por un Médico Veterinario Zootecnista (MVZ) con cédula profesional. Si tienes dudas, nuestro equipo está listo para orientarte en el proceso.",
  },
];


export default { services, faq };
