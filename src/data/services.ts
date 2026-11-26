
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
      "Diseño y desarrollo de sitios web modernos, optimizados y adaptables a diferentes dispositivos.",
    deliverables: [
      "Sitios web corporativos y profesionales",
      "Landing pages y portafolios",
      "Diseño responsive y accesibilidad",
      "SEO técnico y publicación en la nube",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "SEO",
    ],
  },
  {
    id: "full-stack",
    number: "02",
    title: "Aplicaciones Full Stack y móviles",
    description:
      "Desarrollo integral de aplicaciones web y móviles, desde la interfaz hasta la lógica de negocio y la persistencia.",
    deliverables: [
      "Aplicaciones web personalizadas",
      "Aplicaciones móviles multiplataforma",
      "Paneles de administración",
      "Autenticación y gestión de usuarios",
      "Comunicación en tiempo real",
    ],
    technologies: [
      "React",
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Firebase",
      "WebSocket",
      "Monorepo",
    ],
  },
  {
    id: "backend",
    number: "03",
    title: "Backend y APIs",
    description:
      "Construcción de servicios backend, integraciones y sistemas con una arquitectura modular y enfoque en seguridad.",
    deliverables: [
      "Desarrollo de APIs REST",
      "Integración de servicios",
      "Validación y procesamiento de datos",
      "Autenticación y autorización",
      "Control de acceso basado en roles",
    ],
    technologies: [
      "Node.js",
      "Fastify",
      "TypeScript",
      "Java",
      "PHP",
      "Laravel",
      "Zod",
      "JWT",
      "Argon2id",
      "RBAC",
    ],
  },
  {
    id: "automatizacion",
    number: "04",
    title: "Automatización y análisis de datos",
    description:
      "Automatización de tareas repetitivas, procesamiento de información y optimización de procesos operativos.",
    deliverables: [
      "Scripts y herramientas de automatización",
      "Automatización de procesos mediante RPA",
      "Procesamiento y consolidación de datos",
      "Dashboards e indicadores",
      "Generación automatizada de reportes",
    ],
    technologies: [
      "Python",
      "Pandas",
      "Selenium",
      "RPA",
      "Power BI",
      "Excel avanzado",
    ],
  },
  {
    id: "bases-de-datos",
    number: "05",
    title: "Bases de datos",
    description:
      "Diseño, modelado e integración de soluciones de persistencia para aplicaciones y sistemas de información.",
    deliverables: [
      "Diseño y modelado de datos",
      "Consultas SQL",
      "Integración mediante ORM",
      "Bases de datos relacionales y NoSQL",
      "Respaldos y recuperación de información",
    ],
    technologies: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Cloud Firestore",
      "Prisma ORM",
      "SQL",
      "Oracle SQL Developer",
      "DBeaver",
    ],
  },
  {
    id: "mejoras",
    number: "06",
    title: "Optimización y mantenimiento",
    description:
      "Evolución de aplicaciones existentes mediante buenas prácticas de ingeniería, monitoreo y mejoras técnicas.",
    deliverables: [
      "Corrección de errores y refactorización",
      "Optimización del rendimiento",
      "Monitoreo y observabilidad",
      "Pruebas y validaciones técnicas",
      "Despliegue y distribución de software",
    ],
    technologies: [
      "Docker",
      "Git",
      "GitHub",
      "Postman",
      "Grafana",
      "Dynatrace",
      "Atentus",
      "Cloudflare Workers",
      "pnpm",
      "Windows x64",
    ],
  },
];
