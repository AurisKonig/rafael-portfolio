
export type ProjectCategory =
  | "Aplicaciones web"
  | "Sitios web"
  | "Automatización"
  | "Otros";

export type ProjectStatus =
  | "MVP funcional"
  | "En desarrollo"
  | "Pendiente de documentación";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  status: ProjectStatus;
  summary: string;
  description: string;
  technologies: string[];
  features: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  documentationReady: boolean;
}

export const projects: Project[] = [
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
    featured: true,
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
      "Proyecto web para presentar las clases del profesor Phillippe. Incorporaremos sus funcionalidades, tecnologías y resultados una vez documentados.",
    technologies: [],
    features: [],
    featured: true,
    documentationReady: false,
  },
  {
    slug: "conde-access",
    name: "Conde-access",
    category: "Otros",
    status: "Pendiente de documentación",
    summary:
      "Proyecto de software cuya documentación se incorporará próximamente.",
    description:
      "La información técnica, el propósito y las funcionalidades de este proyecto están pendientes de confirmación.",
    technologies: [],
    features: [],
    featured: false,
    documentationReady: false,
  },
];

export const projectCategories = [
  "Todos",
  "Aplicaciones web",
  "Sitios web",
  "Automatización",
  "Otros",
] as const;
