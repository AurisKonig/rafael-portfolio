
import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";
import { HomePage } from "../pages/HomePage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ProjectDetailPage } from "../pages/ProjectDetailPage";
import { ServicesPage } from "../pages/ServicesPage";
import { AboutPage } from "../pages/AboutPage";
import { TechnologiesPage } from "../pages/TechnologiesPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "proyectos", element: <ProjectsPage /> },
      { path: "proyectos/:slug", element: <ProjectDetailPage /> },
      { path: "servicios", element: <ServicesPage /> },
      { path: "sobre-mi", element: <AboutPage /> },
      { path: "tecnologias", element: <TechnologiesPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
