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

export default services;
