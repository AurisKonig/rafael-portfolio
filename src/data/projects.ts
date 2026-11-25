
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
const pianoImages = "/images/projects/universopiano";

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
    subtitle: "Sitio web de enseñanza musical · Santiago y online",
    category: "Sitios web",
    status: "Finalizado",
    role: "Frontend Developer · UI responsive · SEO técnico · Cloud Deployment",
    summary:
      "Sitio web profesional de clases de piano con arquitectura estática, diseño responsive, SEO técnico y contacto integrado por WhatsApp y correo. Construido con Next.js, React y TypeScript y desplegado en Cloudflare Workers.",
    description:
      "UniversoPiano es un sitio web profesional orientado a la presentación de clases particulares de piano presenciales y online. El proyecto reúne la trayectoria del profesor, su metodología de enseñanza, páginas especializadas por perfil de estudiante y contenido educativo. El desarrollo comprende diseño e implementación de interfaces, arquitectura de información, accesibilidad, adaptación a dispositivos móviles, SEO técnico y despliegue en la nube. La solución utiliza exportación estática y un flujo de contacto mediante WhatsApp y correo electrónico, sin necesidad de un backend propio. La versión inicial está publicada en una URL temporal.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS",
      "Tailwind CSS",
      "Lucide Icons",
      "Cloudflare Workers",
      "Wrangler",
      "Static Site Generation",
      "SEO técnico",
      "Git",
      "GitHub",
    ],
    features: [
      "Diseño responsive para dispositivos móviles y escritorio",
      "Página de presentación y trayectoria profesional del profesor",
      "Página especializada en metodología de enseñanza",
      "Catálogo de clases presenciales y online",
      "Páginas específicas para adultos, adolescentes y principiantes",
      "Blog con contenido educativo sobre piano",
      "Formulario de consultas integrado con WhatsApp",
      "Contacto mediante correo electrónico",
      "Metadatos específicos para cada página",
      "URLs canónicas y Open Graph",
      "Datos estructurados y sitemap XML",
      "Exportación estática mediante Next.js",
      "Despliegue de activos estáticos en Cloudflare Workers",
    ],
    liveUrl: "https://universopiano.raphaelauris.workers.dev",
    imageUrl: `${pianoImages}/cover.webp`,
    featured: false,
    documentationReady: true,
    metrics: [
      {
        value: "12",
        label: "Rutas públicas en sitemap",
      },
      {
        value: "19/19",
        label: "Páginas generadas en build",
      },
      {
        value: "96/100",
        label: "Accesibilidad reportada",
      },
      {
        value: "96/100",
        label: "Buenas prácticas reportadas",
      },
    ],
    architecture: [
      {
        layer: "Frontend",
        technologies: [
          "Next.js 16.4.6",
          "React 19",
          "TypeScript",
        ],
        description:
          "Implementación de interfaces y páginas mediante componentes React y una estructura de rutas organizada con Next.js.",
      },
      {
        layer: "Diseño y experiencia de usuario",
        technologies: [
          "CSS",
          "Tailwind CSS 4",
          "Lucide Icons",
        ],
        description:
          "Diseño adaptable a distintos tamaños de pantalla, navegación móvil y una identidad visual coherente con la enseñanza musical.",
      },
      {
        layer: "Arquitectura estática",
        technologies: [
          "Static Site Generation",
          "Next.js Static Export",
        ],
        description:
          "Generación de archivos HTML, CSS y JavaScript durante la compilación, evitando la necesidad de un servidor de aplicación.",
      },
      {
        layer: "SEO técnico",
        technologies: [
          "Metadata",
          "Canonical URLs",
          "Open Graph",
          "Structured Data",
          "Sitemap XML",
          "Robots.txt",
        ],
        description:
          "Organización de metadatos y recursos técnicos para facilitar la interpretación del contenido por buscadores. La indexación pública permanece deshabilitada temporalmente.",
      },
      {
        layer: "Despliegue en la nube",
        technologies: [
          "Cloudflare Workers",
          "Wrangler",
          "Git",
          "GitHub",
        ],
        description:
          "Publicación de la versión estática del sitio mediante Cloudflare Workers, con control de versiones del código fuente.",
      },
      {
        layer: "Integración de contacto",
        technologies: [
          "WhatsApp",
          "Mailto",
        ],
        description:
          "Flujo de consultas que prepara mensajes para WhatsApp y ofrece contacto directo mediante correo electrónico, sin almacenar consultas en una base de datos propia.",
      },
    ],
    gallery: [
      {
        src: `${pianoImages}/cover.webp`,
        alt: "Página de inicio de UniversoPiano",
        caption: "Diseño e identidad visual",
      },
      {
        src: `${pianoImages}/mobile.webp`,
        alt: "Versión móvil del sitio UniversoPiano",
        caption: "Diseño responsive",
      },
      {
        src: `${pianoImages}/classes.webp`,
        alt: "Página de modalidades de clases de piano",
        caption: "Oferta de clases",
      },
      {
        src: `${pianoImages}/about.webp`,
        alt: "Página de trayectoria profesional del profesor",
        caption: "Presentación profesional",
      },
    ],
    validations: [
      "Verificación de TypeScript mediante npx tsc --noEmit sin errores reportados",
      "Verificación de lint sin errores reportados",
      "Compilación exitosa con 19 de 19 páginas estáticas generadas",
      "Sitemap XML con 12 rutas públicas y respuesta HTTP 200 documentada",
      "URLs canónicas verificadas y ausencia de referencias a localhost en sitemap",
      "Contacto mediante WhatsApp y correo probado por el desarrollador",
      "PageSpeed móvil reportado: rendimiento 91/100, accesibilidad 96/100, buenas prácticas 96/100 y SEO 93/100",
      "PageSpeed escritorio reportado: rendimiento 95/100, accesibilidad 96/100, buenas prácticas 96/100 y SEO 93/100",
      "Indexación deshabilitada deliberadamente durante la publicación temporal, condición que puede afectar la puntuación SEO",
    ],
    nextSteps: [
      "Conectar el dominio definitivo y actualizar las URLs canónicas",
      "Habilitar la indexación pública cuando corresponda",
      "Optimizar las imágenes de portada, logotipo y fotografía",
      "Repetir las mediciones de PageSpeed en móvil y escritorio",
      "Completar el aviso de privacidad y verificar los enlaces del sitio",
    ],
    competencies: [
      "Frontend Development",
      "React Development",
      "Next.js Development",
      "TypeScript",
      "Responsive Web Design",
      "Information Architecture",
      "Technical SEO",
      "Web Accessibility",
      "Static Site Generation",
      "Cloud Deployment",
      "UX/UI Implementation",
      "Production QA",
    ],
  },
];

export const projectCategories = [
  "Todos",
  ...Array.from(
    new Set(projects.map((project) => project.category)),
  ),
];
