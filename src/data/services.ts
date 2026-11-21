
export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export const services: Service[] = [
  {
    id: "desarrollo-web",
    number: "01",
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web modernos, rápidos y adaptables a dispositivos móviles.",
    deliverables: [
      "Sitios corporativos",
      "Landing pages",
      "Portafolios profesionales",
      "Interfaces responsive",
    ],
    technologies: ["React", "TypeScript", "HTML", "CSS"],
  },
  {
    id: "full-stack",
    number: "02",
    title: "Aplicaciones Full Stack",
    description:
      "Desarrollo de plataformas que integran interfaces, lógica de negocio y almacenamiento de información.",
    deliverables: [
      "Aplicaciones web personalizadas",
      "Paneles de administración",
      "Autenticación y roles",
      "Gestión de datos",
    ],
    technologies: ["React", "Node.js", "Firebase", "SQL"],
  },
  {
    id: "backend",
    number: "03",
    title: "Backend y APIs",
    description:
      "Construcción de servicios backend e integración de aplicaciones mediante APIs.",
    deliverables: [
      "APIs REST",
      "Integración de servicios",
      "Validación de datos",
      "Autenticación y autorización",
    ],
    technologies: ["Node.js", "PHP", "Laravel", "PostgreSQL"],
  },
  {
    id: "automatizacion",
    number: "04",
    title: "Automatización de procesos",
    description:
      "Automatización de tareas repetitivas y procesamiento de información para mejorar la eficiencia operativa.",
    deliverables: [
      "Scripts de automatización",
      "Procesamiento de archivos",
      "Consolidación de información",
      "Generación automatizada de reportes",
    ],
    technologies: ["Python", "Pandas", "Selenium", "RPA"],
  },
  {
    id: "bases-de-datos",
    number: "05",
    title: "Bases de datos",
    description:
      "Diseño e integración de soluciones de persistencia de datos para aplicaciones y sistemas.",
    deliverables: [
      "Modelado de datos",
      "Consultas SQL",
      "Integración con aplicaciones",
      "Persistencia en bases relacionales y NoSQL",
    ],
    technologies: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Cloud Firestore",
    ],
  },
  {
    id: "mejoras",
    number: "06",
    title: "Optimización y mantenimiento",
    description:
      "Mejoras técnicas para aplicaciones existentes, enfocadas en rendimiento, estabilidad y mantenibilidad.",
    deliverables: [
      "Corrección de errores",
      "Refactorización",
      "Mejoras de rendimiento",
      "Mantenimiento evolutivo",
    ],
    technologies: ["Git", "GitHub", "Docker", "Postman"],
  },
];
