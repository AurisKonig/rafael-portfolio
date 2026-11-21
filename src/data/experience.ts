
export interface ProfessionalExperience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const professionalExperience: ProfessionalExperience[] = [
  {
    company: "SCL Consultores",
    role: "Técnico en Monitoreo TI",
    period: "Junio – Julio 2026",
    description:
      "Monitoreo de disponibilidad y rendimiento de servicios tecnológicos, detección de anomalías y gestión de incidentes.",
    highlights: [
      "Monitoreo de servicios tecnológicos y continuidad operativa.",
      "Gestión y escalamiento de incidentes y alertas.",
    ],
    technologies: ["Dynatrace", "Atentus", "Grafana"],
  },
  {
    company: "Banco de Chile",
    role: "Riesgo Tecnológico y Seguridad de la Información · Práctica",
    period: "Agosto – Noviembre 2025",
    description:
      "Desarrollo de automatizaciones para la recolección de evidencias de controles de seguridad y elaboración de reportes.",
    highlights: [
      "Reducción del 60–70 % en tiempos de reporting.",
      "Desarrollo de bots RPA y pipelines de consolidación de evidencias.",
      "Construcción de dashboards de KPIs de seguridad y riesgo tecnológico.",
    ],
    technologies: ["Python", "Pandas", "Selenium", "RPA"],
  },
  {
    company: "PwC Chile",
    role: "Analista de TI Ciberseguridad · Práctica",
    period: "Enero – Marzo 2025",
    description:
      "Participación en procedimientos de auditoría tecnológica y evaluación de controles de seguridad de la información.",
    highlights: [
      "Ejecución de procedimientos ITGC e ISO/IEC 27001.",
      "Estandarización de documentación de auditoría.",
      "Seguimiento de hallazgos mediante Jira.",
    ],
    technologies: ["ITGC", "ISO/IEC 27001", "Jira"],
  },
  {
    company: "Walmart Chile",
    role: "Desarrollador Back-End y RPA · Práctica",
    period: "Enero – Marzo 2024",
    description:
      "Desarrollo de integraciones backend y automatización de procesos operativos.",
    highlights: [
      "Contribución a APIs REST con PHP/Laravel y LDAP para un sistema de inventario.",
      "Soporte a un sistema con más de 1.000 solicitudes diarias.",
      "Reducción del 67 % del tiempo de procesamiento de pedidos mediante automatización.",
    ],
    technologies: ["PHP", "Laravel", "LDAP", "Python", "Selenium"],
  },
  {
    company: "Auris Digital Studio",
    role: "Asesor y Desarrollador Freelance",
    period: "2023 – 2025",
    description:
      "Desarrollo de soluciones web y prestación de servicios tecnológicos para clientes particulares.",
    highlights: [
      "Desarrollo de soluciones web.",
      "Gestión directa de requerimientos de clientes.",
      "Asesoría y soporte tecnológico.",
    ],
    technologies: ["Desarrollo web", "Soporte TI"],
  },
];

export const education = [
  {
    title: "Ingeniería en Informática",
    institution: "Duoc UC",
    date: "Junio 2024",
  },
  {
    title: "Analista Programador Computacional",
    institution: "Duoc UC",
    date: "2025",
  },
];

export const certifications = [
  "Scrum Foundation Professional Certificate — CertiProf",
  "Google Cybersecurity Professional Certificate",
  "Software Engineer Certificate",
  "Software Engineer Intern Certificate",
];
