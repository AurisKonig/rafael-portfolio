
export type ProjectCategory =
  | "Aplicaciones web"
  | "Aplicaciones móviles"
  | "Sitios web"
  | "Automatización"
  | "Otros";

export type ProjectStatus =
  | "Finalizado"
  | "MVP funcional"
  | "En desarrollo"
  | "Pendiente de documentación";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectTest {
  component: string;
  passed: number;
}

export interface ProjectArchitecture {
  layer: string;
  technologies: string[];
  description: string;
}

export interface Project {
  slug: string;
  name: string;
  subtitle?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  summary: string;
  description: string;
  role?: string;
  technologies: string[];
  features: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  documentationReady: boolean;
  metrics?: ProjectMetric[];
  architecture?: ProjectArchitecture[];
  tests?: ProjectTest[];
  gallery?: ProjectImage[];
  validations?: string[];
  nextSteps?: string[];
  competencies?: string[];
}

const condoImages = "/images/projects/condo-access";

export const projects: Project[] = [
  {
    slug: "condo-access",
    name: "Condo Access",
    subtitle: "Smart Residential Access Management",
    category: "Aplicaciones web",
    status: "Finalizado",
    role: "Full Stack Developer · Proyecto personal",
    summary:
      "Plataforma integral de gestión residencial que conecta administración, conserjería y residentes mediante aplicaciones web y móvil, comunicación en tiempo real y una arquitectura respaldada por 574 pruebas automatizadas aprobadas.",
    description:
      "Condo Access centraliza y digitaliza la gestión de accesos vehiculares en condominios residenciales. Integra una plataforma web administrativa, una aplicación móvil para residentes y un servicio local distribuido mediante un instalador para Windows. El proyecto abarca arquitectura de software, desarrollo Full Stack, seguridad, persistencia, comunicación en tiempo real, pruebas automatizadas y distribución. La versión desarrollada funciona en un entorno local con accesos simulados.",
    technologies: [
      "React",
      "TypeScript",
      "React Native",
      "Expo",
      "Node.js",
      "Fastify",
      "SQLite",
      "Prisma ORM",
      "WebSocket",
      "Zod",
      "JWT",
      "Argon2id",
      "RBAC",
      "pnpm",
      "Git",
      "GitHub",
    ],
    features: [
      "Administración de departamentos, residentes y vehículos",
      "Gestión de estacionamientos y asignaciones",
      "Panel de conserjería con eventos en tiempo real",
      "Aplicación móvil para residentes",
      "Validación de proximidad mediante geolocalización",
      "Gestión de visitas y reservas",
      "Control lógico de ocupación de estacionamientos",
      "Autenticación y gestión de sesiones",
      "Control de acceso basado en roles",
      "Auditoría y trazabilidad de eventos",
      "Copias de seguridad y recuperación de datos",
      "Instalador de software para Windows x64",
      "Cloud Relay validado en entorno local",
    ],
    imageUrl: `${condoImages}/cover.webp`,
    featured: true,
    documentationReady: true,
    metrics: [
      { value: "574", label: "Pruebas aprobadas" },
      { value: "3", label: "Plataformas" },
      { value: "3", label: "Roles de usuario" },
      { value: "E2E", label: "Desarrollo integral" },
    ],
    architecture: [
      {
        layer: "Frontend web",
        technologies: ["React", "TypeScript"],
        description:
          "Interfaces administrativas y de conserjería para la gestión centralizada del sistema.",
      },
      {
        layer: "Aplicación móvil",
        technologies: ["React Native", "Expo"],
        description:
          "Aplicación para residentes con funcionalidades de interacción y validación de proximidad.",
      },
      {
        layer: "Backend",
        technologies: ["Node.js", "Fastify", "TypeScript"],
        description:
          "Servicios de aplicación, lógica de negocio y gestión centralizada de operaciones.",
      },
      {
        layer: "Persistencia",
        technologies: ["SQLite", "Prisma ORM"],
        description:
          "Modelado y almacenamiento de entidades, relaciones y registros operacionales.",
      },
      {
        layer: "Comunicación y validación",
        technologies: ["WebSocket", "Zod"],
        description:
          "Comunicación en tiempo real y validación estructurada de datos.",
      },
      {
        layer: "Seguridad",
        technologies: ["JWT", "Argon2id", "RBAC"],
        description:
          "Autenticación, protección de credenciales y autorización diferenciada para administradores, conserjes y residentes.",
      },
      {
        layer: "Arquitectura y distribución",
        technologies: ["Monorepo", "pnpm", "Windows x64"],
        description:
          "Organización modular del código y distribución mediante un instalador para Windows.",
      },
    ],
    tests: [
      { component: "Backend", passed: 352 },
      { component: "Web", passed: 54 },
      { component: "Mobile", passed: 72 },
      { component: "Relay Protocol", passed: 81 },
      { component: "Relay", passed: 15 },
    ],
    gallery: [
      {
        src: `${condoImages}/dashboard.webp`,
        alt: "Dashboard administrativo de Condo Access",
        caption: "Dashboard administrativo",
      },
      {
        src: `${condoImages}/mobile.webp`,
        alt: "Aplicación móvil para residentes",
        caption: "Aplicación móvil",
      },
      {
        src: `${condoImages}/concierge.webp`,
        alt: "Panel de conserjería de Condo Access",
        caption: "Panel de conserjería",
      },
      {
        src: `${condoImages}/access.webp`,
        alt: "Evento de acceso permitido simulado",
        caption: "Validación de acceso simulado",
      },
      {
        src: `${condoImages}/vehicles.webp`,
        alt: "Interfaz de administración de vehículos",
        caption: "Gestión de vehículos",
      },
      {
        src: `${condoImages}/visits.webp`,
        alt: "Interfaz de gestión de visitas",
        caption: "Gestión de visitas",
      },
      {
        src: `${condoImages}/occupancy.webp`,
        alt: "Panel de ocupación de estacionamientos",
        caption: "Control de ocupación",
      },
      {
        src: `${condoImages}/audit.webp`,
        alt: "Interfaz de auditoría del sistema",
        caption: "Auditoría y trazabilidad",
      },
      {
        src: `${condoImages}/backups.webp`,
        alt: "Interfaz de administración de respaldos",
        caption: "Copias de seguridad",
      },
    ],
    validations: [
      "574 pruebas automatizadas aprobadas según los resultados documentados",
      "Aplicación móvil validada en dispositivos reales",
      "Instalación y actualización de software en Windows x64 verificadas",
      "Desinstalación, reinstalación y reinicio verificados",
      "Cloud Relay validado mediante pruebas locales",
      "Operación funcional con portones simulados",
    ],
    nextSteps: [
      "Integración con hardware físico",
      "Validación de Cloud Relay sobre internet público",
      "Pruebas de rendimiento y escalabilidad",
      "Implementación piloto en un condominio residencial",
    ],
    competencies: [
      "Full Stack Development",
      "Software Architecture",
      "Mobile Development",
      "REST APIs",
      "Real-Time Systems",
      "Authentication & Authorization",
      "Database Design",
      "Automated Testing",
      "Software Security",
      "Software Packaging & Distribution",
      "Product Development",
    ],
  },
  {
    slug: "chess-study",
    name: "Chess Study",
    category: "Aplicaciones web",
    status: "MVP funcional",
    summary:
      "Plataforma educativa para analizar partidas de ajedrez mediante Stockfish.",
    description:
      "Proyecto académico colaborativo de desarrollo Full Stack. Permite importar partidas PGN, analizar movimientos con Stockfish y almacenar estudios personales mediante Firebase.",
    technologies: [
      "React",
      "Firebase Authentication",
      "Cloud Firestore",
      "Stockfish",
      "PGN",
    ],
    features: [
      "Importación y procesamiento de archivos PGN",
      "Análisis de partidas mediante Stockfish",
      "Retroalimentación sobre movimientos",
      "Autenticación con correo electrónico y Google",
      "Biblioteca personal de estudios y partidas",
    ],
    repositoryUrl: "https://github.com/AurisKonig/Chess_Study",
    imageUrl: "/images/projects/chess-study.webp",
    featured: true,
    documentationReady: true,
  },
  {
    slug: "rentify",
    name: "Rentify",
    category: "Aplicaciones web",
    status: "En desarrollo",
    summary:
      "Proyecto PropTech para la administración de arriendos residenciales.",
    description:
      "Plataforma en desarrollo orientada a propietarios, administradores, arrendatarios y corredores de propiedades.",
    technologies: [],
    features: [],
    featured: false,
    documentationReady: false,
  },
  {
    slug: "universopiano",
    name: "UniversoPiano",
    category: "Sitios web",
    status: "Pendiente de documentación",
    summary:
      "Sitio web de presentación de clases de piano y sus servicios.",
    description:
      "Proyecto web para presentar las clases del profesor Phillippe.",
    technologies: [],
    features: [],
    featured: false,
    documentationReady: false,
  },
];

export const projectCategories = [
  "Todos",
  ...Array.from(
    new Set(projects.map((project) => project.category)),
  ),
];
